import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h1 id="heading">Home </h1>
      <div className="navBar">
        <a style={{ backgroundColor: "aqua" }} href="/about">
          About me
        </a>
        <a href="/login">Login</a>

        <Link href="/about" >
        About
        </Link>
        <Link href="/products">Products</Link>
      </div>
    </div>
  );
}
