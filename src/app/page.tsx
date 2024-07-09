import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const products = [
    {
      id: 1,
      imgUrl: "/product-1.png",
      name: "Leather biker jacket",
      price: 128,
    },
    {
      id: 2,
      imgUrl: "/product-2.png",
      name: "Quiet Luxury Hoodie",
      price: 500,
    },
    {
      id: 3,
      imgUrl: "/product-3.png",
      name: "Brown Sweater",
      price: 126,
    },
    {
      id: 4,
      imgUrl: "/product-4.png",
      name: "Sweat shirt",
      price: 53,
    },
  ];

  const bestSellers = [
    {
      id: 1,
      imgUrl: "/best-1.png",
      name: "Tee shirt",
      price: 19,
    },
    {
      id: 2,
      imgUrl: "/best-2.png",
      name: "Carton Pant",
      price: 29,
    },
    {
      id: 3,
      imgUrl: "/best-3.png",
      name: "Burberry barrel Bag",
      price: 1800,
    },
    {
      id: 4,
      imgUrl: "/best-4.png",
      name: "Bomber Sweater",
      price: 249,
    },
    {
      id: 5,
      imgUrl: "/best-4.png",
      name: "Gucci Vanity Bag",
      price: 2200,
    },
    {
      id: 6,
      imgUrl: "/best-4.png",
      name: "Gilngham Short",
      price: 80,
    },
    {
      id: 7,
      imgUrl: "/best-4.png",
      name: "Stio Women's Colter",
      price: 429,
    },
    {
      id: 8,
      imgUrl: "/best-4.png",
      name: "Calvin Klein Metal Cap",
      price: 88.5,
    },
  ];

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

          {products.map((product) => (
            <div
              key={product.id}
              className={`product text-center xl:text-left ${
                product.id !== 1 ? "mt-4 xl:mt-0" : ""
              }`}
            >
              <div className="love-icon flex justify-center items-center p-3 absolute right-5 top-5">
                <span className="lnr lnr-heart"></span>
              </div>

              <div className="product-image xl:mt-10">
                <img
                  src={product.imgUrl}
                  className="mx-auto xl:mx-0 xl:mb-8"
                  alt=""
                />
              </div>

              <div className="product-desc">
                <h3 className="font-medium uppercase">{product.name}</h3>

                <div className="flex justify-between gap-1 w-max my-2">
                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    S
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    M
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    L
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    XL
                  </span>
                </div>

                <p className="font-bold">${product.price}</p>
              </div>

              <div className="add-to-cart-icon flex justify-center items-center p-3 absolute right-5 bottom-5">
                <Link href={"/cart"}>
                  <span className="lnr lnr-cart font-bold"></span>
                </Link>
              </div>
            </div>
          ))}

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

        <div className="grid justify-between gap-5 grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 p-3 mt-6 xl:mt-0">
          {bestSellers.map((bestProduct) => (
            <div
              key={bestProduct.id}
              className="product text-center xl:text-left"
            >
              <div className="love-icon flex justify-center items-center p-3 absolute right-5 top-5">
                <span className="lnr lnr-heart"></span>
              </div>

              <div className="product-image mt-10">
                <img
                  src={`/best-${bestProduct.id}.png`}
                  className="mx-auto xl:mx-0"
                  alt=""
                />
              </div>

              <div className="product-desc">
                <h3 className="font-medium uppercase">{bestProduct.name}</h3>

                <div className="flex justify-between gap-1 w-max my-2">
                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    S
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    M
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    L
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    XL
                  </span>
                </div>

                <p className="font-bold mt-[0.625rem]">${bestProduct.price}</p>
              </div>

              <div className="add-to-cart-icon flex justify-center items-center p-3 absolute right-4 bottom-5">
                <Link href={"/cart"}>
                  <span className="lnr lnr-cart font-bold"></span>
                </Link>
              </div>
            </div>
          ))}
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

          {products.map((product) => (
            <div
              key={product.id}
              className={`product text-center xl:text-left ${
                product.id !== 1 ? "mt-4 xl:mt-0" : ""
              }`}
            >
              <div className="love-icon flex justify-center items-center p-3 absolute right-5 top-5">
                <span className="lnr lnr-heart"></span>
              </div>

              <div className="product-image xl:mt-10">
                <img
                  src={product.imgUrl}
                  className="mx-auto xl:mx-0 xl:mb-8"
                  alt=""
                />
              </div>

              <div className="product-desc">
                <h3 className="font-medium uppercase">{product.name}</h3>

                <div className="flex justify-between gap-1 w-max my-2">
                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    S
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    M
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    L
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    XL
                  </span>
                </div>

                <p className="font-bold mt-[0.625rem]">${product.price}</p>
              </div>

              <div className="add-to-cart-icon flex justify-center items-center p-3 absolute right-5 bottom-5">
                <Link href={"/cart"}>
                  <span className="lnr lnr-cart font-bold"></span>
                </Link>
              </div>
            </div>
          ))}
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

          {products.map((product) => (
            <div
              key={product.id}
              className={`product text-center xl:text-left ${
                product.id !== 1 ? "mt-4 xl:mt-0" : ""
              }`}
            >
              <div className="love-icon flex justify-center items-center p-3 absolute right-5 top-5">
                <span className="lnr lnr-heart"></span>
              </div>

              <div className="product-image xl:mt-10">
                <img
                  src={product.imgUrl}
                  className="mx-auto xl:mx-0 xl:mb-8"
                  alt=""
                />
              </div>

              <div className="product-desc">
                <h3 className="font-medium uppercase">{product.name}</h3>

                <div className="flex justify-between gap-1 w-max my-2">
                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    S
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    M
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    L
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    XL
                  </span>
                </div>

                <p className="font-bold mt-[0.625rem]">${product.price}</p>
              </div>

              <div className="add-to-cart-icon flex justify-center items-center p-3 absolute right-5 bottom-5">
                <Link href={"/cart"}>
                  <span className="lnr lnr-cart font-bold"></span>
                </Link>
              </div>
            </div>
          ))}

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
