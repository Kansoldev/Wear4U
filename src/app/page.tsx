"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import { getAllProducts } from "@/api/product/route";

export default function Home() {
  type Product = {
    id: string;
    name: string;
    current_price: any[];
  }[];

  const [products, setProducts] = useState<Product>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getAllProducts();
        setProducts(products.items.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Header />

      <section className="hero-area">
        <img src="/hero-bg.jpg" className="w-full object-cover" alt="" />
      </section>

      <section className="w-[1200px] max-w-full mx-auto mt-14">
        <h2
          className="text-center uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-[166px] tracking-[-4px] font-normal"
          style={{
            fontFamily: "helvetica",
          }}
        >
          New Arrivals
        </h2>

        <div className="product__grid">
          <div
            className="p-4 border border-solid border-[#bdbdbd] hidden xl:block"
            style={{ gridArea: "bg-1" }}
          >
            <img className="collection_image" src="./arrivals.jpg" alt="" />
          </div>

          <ProductList products={products} />

          <Link
            href={"#"}
            className="mt-[0.625rem] hidden xl:inline border-0 bg-transparent font-bold text-right no-underline text-black"
            style={{ fontFamily: "Helvetica", gridArea: "bg-6" }}
          >
            see all
          </Link>
        </div>
      </section>

      <section className="w-[1200px] max-w-full mx-auto mt-14">
        <h2
          className="text-center uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-[166px] tracking-[-4px] font-normal"
          style={{
            fontFamily: "helvetica",
          }}
        >
          best sellers
        </h2>

        <div className="grid justify-between gap-5 grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 p-[25px] sm:p-[13px] mt-6 xl:mt-0">
          <ProductList products={products} />
        </div>
      </section>

      <section className="shipping-banner">
        <span
          className="block w-52 p-[0.625rem] text-center rounded-[200px] text-[20px]"
          style={{
            backgroundColor: "rgba(247, 245, 233, 1)",
            color: "rgba(41, 41, 41, 1)",
          }}
        >
          Just launched
        </span>

        <h2 className="text-3xl sm:text-6xl lg:text-8xl xl:text-[140px] leading-snug sm:leading-none py-16">
          Free Express Shipping
        </h2>

        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 xl:gap-12 p-5 xl:p-[0.625rem]"
          style={{ backgroundColor: "rgba(113, 85, 63, 0.5)" }}
        >
          <p>
            Join us and get free express shipping on any orders over $100, and
            free global shipping on orders over $200 shop
          </p>

          <button>Shop</button>
        </div>
      </section>

      <section className="w-[1200px] max-w-full mx-auto mt-14">
        <span
          className="text-[#a74107] text-4xl block tracking-[-4px] text-center"
          style={{ fontFamily: "Helvetica" }}
        >
          men
        </span>

        <h2
          className="text-center uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-[166px] tracking-[-4px] font-normal"
          style={{
            fontFamily: "helvetica",
          }}
        >
          Collection
        </h2>

        <div className="product__grid grid2">
          <div
            className="p-4 border border-solid border-[#bdbdbd] hidden xl:block"
            style={{ gridArea: "bg-1" }}
          >
            <img className="collection_image" src="/men.jpg" alt="" />
          </div>

          <ProductList products={products} />
        </div>
      </section>

      <section className="w-[1200px] max-w-full mx-auto mt-14">
        <span
          className="text-[#a74107] text-4xl block tracking-[-4px] text-center"
          style={{ fontFamily: "Helvetica" }}
        >
          women
        </span>

        <h2
          className="text-center uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-[166px] tracking-[-4px] font-normal"
          style={{
            fontFamily: "helvetica",
          }}
        >
          Collection
        </h2>

        <div className="product__grid">
          <div
            className="p-4 border border-solid border-[#bdbdbd] hidden xl:block"
            style={{ gridArea: "bg-1" }}
          >
            <img className="collection_image" src="/women.jpg" alt="" />
          </div>

          <ProductList products={products} />

          <Link
            href={"#"}
            className="mt-[0.625rem] hidden xl:inline border-0 bg-transparent font-bold text-right no-underline text-black"
            style={{ fontFamily: "Helvetica", gridArea: "bg-6" }}
          >
            see all
          </Link>
        </div>
      </section>

      <section className="w-[1200px] max-w-full mx-auto my-12">
        <h2
          className="text-center uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-[164px] tracking-[-6px] font-normal"
          style={{
            fontFamily: "helvetica",
          }}
        >
          Made for you
        </h2>

        <div className="flex flex-col md:flex-row m-3 border border-solid border-[#00000033]">
          <div
            className="border-r-[1px] border-solid border-[#00000033] flex-grow"
            style={{
              backgroundImage: "url('/made-for-you.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "360px",
            }}
          ></div>

          <ul className="madeforlinks sm:grid flex-grow xl:flex-grow-[2]">
            <li>
              <a href="#" className="active">
                Clothing
              </a>
            </li>

            <li>
              <a href="#">Lounge & Sweats</a>
            </li>

            <li>
              <a href="#">Bags</a>
            </li>

            <li>
              <a href="#">T-Shirts</a>
            </li>

            <li>
              <a href="#">Jackets & Outerwear</a>
            </li>

            <li>
              <a href="#">Tops</a>
            </li>

            <li>
              <a href="#">Knitwear</a>
            </li>

            <li>
              <a href="#">Pants</a>
            </li>

            <li>
              <a href="#">Denim</a>
            </li>

            <li>
              <a href="#">Dresses & Jumpsuits</a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
