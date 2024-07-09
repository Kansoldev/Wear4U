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
      name: "Leather biker jacket",
      price: 128,
    },
    {
      id: 3,
      imgUrl: "/product-3.png",
      name: "Leather biker jacket",
      price: 128,
    },
    {
      id: 4,
      imgUrl: "/product-4.png",
      name: "Leather biker jacket",
      price: 128,
    },
  ];

  return (
    <>
      <Header />

      <section className="hero-area">
        <img src="/hero-bg.jpg" alt="" />
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
              <div className="love-icon flex justify-center items-center p-3">
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
                <p className="font-bold mt-[0.625rem]">${product.price}</p>
              </div>

              <div className="add-to-cart-icon flex justify-center items-center p-3">
                <span className="lnr lnr-cart font-bold"></span>
              </div>
            </div>
          ))}

          <Link
            href={"#"}
            className="mt-[0.625rem] hidden lg:inline border-0 bg-transparent font-bold text-right no-underline text-black"
            style={{ fontFamily: "Helvetica", gridArea: "bg-6" }}
          >
            see all
          </Link>
        </div>
      </section>
    </>
  );
}
