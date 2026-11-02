import Link from "next/link";
import Card from "@/components/Card"

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
        <Card name = "iphone" price = {1000}/>
        <Card name = "samsung" price = {5000}/>
        <Card name = "nokia" price = {8000}/>
        <Card name = ""/>
    </div>
  );
}
