import { Suspense } from "react";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<p>Loading product...</p>}>
      <ProductDetails params={params} />
    </Suspense>
  );
}

async function ProductDetails({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}
