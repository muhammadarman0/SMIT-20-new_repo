import Link from "next/link";

type ProductPageProp = {
  params: Promise<{
    id: string;
  }>;
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  brand?: string;
  thumbnail: string;
  images: string[];
};

const Page = async ({ params }: ProductPageProp) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  const product: Product = await response.json();

  return (
    <main className="min-h-screen bg-slate-100 px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <Link href={"/blog"}>
          {" "}
          <p className="mb-8 inline-block font-medium text-blue-600 hover:text-blue-800">
            ← Back to Products
          </p>
        </Link>
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
          {/* Product Image */}
          <div className="flex min-h-[350px] items-center justify-center bg-slate-50 p-8 md:p-12">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-[400px] w-full object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center p-7 md:p-12">
            <span className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold capitalize text-blue-700">
              {product.category}
            </span>

            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              {product.title}
            </h1>

            {product.brand && (
              <p className="mt-3 text-slate-500">
                Brand:{" "}
                <span className="font-semibold text-slate-700">
                  {product.brand}
                </span>
              </p>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-yellow-500">⭐ {product.rating} / 5</span>

              <span className="text-slate-300">|</span>

              <span
                className={
                  product.stock > 0
                    ? "font-medium text-green-600"
                    : "font-medium text-red-600"
                }
              >
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </span>
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              {product.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="text-4xl font-bold text-slate-900">
                ${product.price}
              </span>

              <span className="rounded-lg bg-green-100 px-3 py-1.5 text-sm font-semibold text-green-700">
                {product.discountPercentage}% OFF
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                disabled={product.stock <= 0}
                className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                Add to Cart
              </button>

              <button className="rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100">
                ♡ Add to Wishlist
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6">
              <div>
                <p className="text-sm text-slate-500">Product ID</p>
                <p className="mt-1 font-semibold text-slate-800">
                  #{product.id}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Availability</p>
                <p className="mt-1 font-semibold text-slate-800">
                  {product.stock > 0 ? "Available" : "Unavailable"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
