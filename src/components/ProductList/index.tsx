"use client";

import Link from "next/link";

function index({ products }: { products: any }) {
  return (
    <>
      {products?.map((product: any, index: number) => (
        <div
          key={product.id}
          className={`product text-center xl:text-left ${
            index !== 0 ? "mt-5 xl:mt-0" : ""
          }`}
        >
          <div className="love-icon right-5">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.62 20.9641C12.28 21.0841 11.72 21.0841 11.38 20.9641C8.48 19.9741 2 15.8442 2 8.84415C2 5.75415 4.49 3.25415 7.56 3.25415C9.38 3.25415 10.99 4.13415 12 5.49415C13.01 4.13415 14.63 3.25415 16.44 3.25415C19.51 3.25415 22 5.75415 22 8.84415C22 15.8442 15.52 19.9741 12.62 20.9641Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="product-image xl:mt-10">
            {product.photos && (
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                className="mx-auto xl:mx-0 xl:mb-8"
                alt=""
              />
            )}
          </div>

          <div className="product-desc">
            <h3 className="font-medium uppercase">{product.name}</h3>

            <div className="flex justify-between gap-1 mx-auto xl:mx-0 w-max my-2">
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

            <p className="font-bold text-2xl">
              NGN
              {new Intl.NumberFormat("en-US").format(
                Number(product.current_price[0]["NGN"][0])
              )}
            </p>
          </div>

          <div className="add-to-cart-icon bottom-5">
            <Link href={"/cart"}>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 8H21"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default index;
