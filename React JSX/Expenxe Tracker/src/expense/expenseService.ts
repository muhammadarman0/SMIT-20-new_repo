import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../Firebase/auth";
import type { Expense } from "./expense";

export type NewExpense = Omit<Expense, "id">;

export const addExpense = async (expense: NewExpense): Promise<void> => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Please login to add an expense.");
  }

  const expensesRef = collection(db, "users", user.uid, "expenses");

  await addDoc(expensesRef, {
    ...expense,
    createdAt: serverTimestamp(),
  });
};

export const subscribeToExpenses = (
  onUpdate: (expenses: Expense[]) => void,
  onError: (error: Error) => void,
) => {
  const user = auth.currentUser;

  if (!user) {
    onError(new Error("Please login to view transactions."));
    return () => {};
  }

  const expensesRef = collection(db, "users", user.uid, "expenses");

  const expensesQuery = query(expensesRef, orderBy("createdAt", "desc"));

  return onSnapshot(
    expensesQuery,
    (snapshot) => {
      const expenses: Expense[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Expense, "id">),
      }));

      onUpdate(expenses);
    },
    (error) => onError(error),
  );
};
