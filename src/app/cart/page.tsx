import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="flex justify-center py-3">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            className="nav-logo"
            width={100}
            height={100}
            alt=""
          />
        </Link>
      </div>

      <div className="shopping-cart">
        <div className="progressbar">
          <div
            className="progress-step progress-step-active"
            data-title="Cart"
          ></div>
          <div className="progress-step" data-title="Shipping"></div>
          <div className="progress-step" data-title="Payment"></div>
        </div>

        <div className="item">
          <div className="image">
            <img src="/best-4.png" alt="" />
          </div>

          <div className="description">
            <p className="uppercase">Bomber Sweater</p>
          </div>

          <div className="quantity">
            <button className="plus-btn" type="button">
              <svg
                width="20"
                height="21"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91211 5.59412H7.5607"
                  stroke="#292D32"
                  stroke-width="0.581073"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M5.23633 7.91848V3.2699"
                  stroke="#292D32"
                  stroke-width="0.581073"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <input type="text" name="name" value="1" />

            <button className="minus-btn" type="button">
              <svg
                width="20"
                height="21"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.49609 5.59412H7.14468"
                  stroke="#292D32"
                  stroke-width="0.581073"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="total-price">$249</div>
        </div>

        <div className="item">
          <div className="image">
            <img src="/product-3.png" alt="" />
          </div>

          <div className="description">
            <p className="uppercase">Brown Sweater</p>
          </div>

          <div className="quantity">
            <button className="plus-btn" type="button">
              <svg
                width="20"
                height="21"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91211 5.59412H7.5607"
                  stroke="#292D32"
                  stroke-width="0.581073"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M5.23633 7.91848V3.2699"
                  stroke="#292D32"
                  stroke-width="0.581073"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <input type="text" name="name" value="1" />

            <button className="minus-btn" type="button">
              <svg
                width="20"
                height="21"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.49609 5.59412H7.14468"
                  stroke="#292D32"
                  stroke-width="0.581073"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="total-price">$126</div>
        </div>

        <div className="w-full flex justify-between items-center">
          <h2 className="uppercase font-semibold">Cart total</h2>
          <h3 className="text-3xl font-extrabold">$520</h3>
        </div>

        <div className="w-full flex justify-between items-center mt-12">
          <button className="md:w-60 py-3 px-2 text-sm md:py-[0.625rem] border border-solid border-[#a74107] bg-transparent text-[#a74107]">
            Continue Shopping
          </button>

          <button className="md:w-60 py-3 px-2 text-sm md:py-[0.625rem] border border-solid border-[#a74107] bg-[#a74107] text-white">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
