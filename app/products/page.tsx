import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Link href="/products/mobile">Mobile</Link>
      <Link href="/products/laptop">Laptop</Link>
    </div>
  );
}
