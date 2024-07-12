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

          <div
            className="progress-step progress-step-active"
            data-title="Shipping"
          ></div>

          <div className="progress-step" data-title="Payment"></div>
        </div>

        <form action="" className="my-14">
          <h2 className="mb-6 text-2xl font-semibold">Shipping Address</h2>

          <div>
            <label htmlFor="firstname" className="inline-block mb-2 text-lg">
              First name
            </label>

            <input
              type="text"
              id="firstname"
              className="block p-3 bg-transparent border border-solid border-[#00000033] w-full"
              placeholder="Enter your first name"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="lastname" className="inline-block mb-2 text-lg">
              Last name
            </label>

            <input
              type="text"
              id="lastname"
              className="block p-3 bg-transparent border border-solid border-[#00000033] w-full"
              placeholder="Enter your last name"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="phone" className="inline-block mb-2 text-lg">
              Phone number
            </label>

            <input
              type="text"
              id="phone"
              className="block p-3 bg-transparent border border-solid border-[#00000033] w-full"
              placeholder="Enter your phone"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="address" className="inline-block mb-2 text-lg">
              Address
            </label>

            <input
              type="text"
              id="address"
              className="block p-3 bg-transparent border border-solid border-[#00000033] w-full"
              placeholder="Enter your address"
            />
          </div>

          <div className="flex justify-between">
            <div className="mt-5 basis-[48%]">
              <label htmlFor="country" className="inline-block mb-2 text-lg">
                Country
              </label>

              <input
                type="text"
                id="country"
                className="block p-3 bg-transparent border border-solid border-[#00000033] w-full"
                placeholder="Enter your country"
              />
            </div>

            <div className="mt-5 basis-[48%]">
              <label htmlFor="state" className="inline-block mb-2 text-lg">
                State
              </label>

              <input
                type="text"
                id="state"
                className="block p-3 bg-transparent border border-solid border-[#00000033] w-full"
                placeholder="Enter your state"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="city" className="inline-block mb-2 text-lg">
              City
            </label>

            <input
              type="text"
              id="city"
              className="block p-3 bg-transparent border border-solid border-[#00000033] w-full"
              placeholder="Enter your city"
            />
          </div>

          <div className="mt-7">
            <input
              type="checkbox"
              id=""
              className="p-3 bg-transparent border border-solid border-[#00000033] w-7 h-7"
            />

            <label htmlFor="" className="inline-block align-top ml-4 text-lg">
              Save the above shipping address
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="additional" className="inline-block mb-2 text-lg">
              Additional Note
            </label>

            <textarea
              name=""
              id="additional"
              className="block p-3 bg-transparent border border-solid border-[#00000033] w-full resize-none h-28"
              placeholder="What else do you want to add?"
            ></textarea>

            <span className="helper text inline-block text-right mt-2 w-full">
              0/500 characters
            </span>
          </div>
        </form>

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
          <Link
            href={"/cart"}
            className="inline-block md:w-60 py-3 px-2 md:py-[0.625rem] border border-solid border-[#a74107] bg-transparent text-[#a74107] text-[13px] min-[450px]:text-base text-center"
          >
            Go back
          </Link>

          <Link
            href={"/payment"}
            className="md:w-60 py-3 px-2 md:py-[0.625rem] border border-solid border-[#a74107] bg-[#a74107] text-white text-[13px] min-[450px]:text-base text-center"
          >
            Proceed to payment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
