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

          <div
            className="progress-step progress-step-active"
            data-title="Payment"
          ></div>
        </div>

        <form action="" className="my-14">
          <h2 className="mb-6 text-2xl font-semibold">Pay With</h2>

          <div>
            <label htmlFor="firstname" className="inline-block mb-2 text-lg">
              Card Number
            </label>

            <input
              type="text"
              id="firstname"
              className="block p-3 bg-transparent border border-solid border-[#00000033] w-full"
              placeholder="OOOO OOOO OOOO OOOO"
            />
          </div>

          <div className="flex justify-between">
            <div className="mt-5 basis-[48%]">
              <label htmlFor="expiry" className="inline-block mb-2 text-lg">
                Expiry
              </label>

              <input
                type="text"
                id="expiry"
                className="block p-3 bg-transparent border border-solid border-[#00000033] w-full"
                placeholder="MM/YY"
              />
            </div>

            <div className="mt-5 basis-[48%]">
              <label htmlFor="cvv" className="inline-block mb-2 text-lg">
                CVV
              </label>

              <input
                type="text"
                id="cvv"
                className="block p-3 bg-transparent border border-solid border-[#00000033] w-full"
                placeholder="123"
              />
            </div>
          </div>

          <button
            href={"/shipping"}
            className="w-full py-3 px-2 md:py-[0.625rem] border border-solid border-[#a74107] bg-[#a74107] text-white text-[13px] min-[450px]:text-base text-center mt-5 "
          >
            Pay $520 (#754,000)
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
