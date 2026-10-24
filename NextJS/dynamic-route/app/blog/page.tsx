import Link from "next/link";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  rating: number;
};

const Page = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=10");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const { products }: { products: Product[] } = await response.json();

  return (
    <main className="min-h-screen bg-gray-100 px-5 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Our Products
      </h1>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-52 w-full bg-white object-contain p-4"
            />

            <div className="p-5">
              <h2 className="mb-2 text-lg font-bold text-gray-800">
                {product.title}
              </h2>

              <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-green-600">
                  ${product.price}
                </span>

                <span className="rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                  ⭐ {product.rating}
                </span>
              </div>

              <Link href={`/blog/${product.id}`}>
                {" "}
                <button className="mt-5 cursor-pointer w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700">
                  View Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
