import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div
        className="py-5 text-center font-medium"
        style={{
          backgroundColor: "rgba(41, 41, 41)",
          letterSpacing: ".4px",
          color: "rgba(239, 239, 239, 1)",
        }}
      >
        <p>Promo: Free shipping in every orders</p>
      </div>

      <header className="bg-[#f7f5e9] py-5">
        {/* Mobile menu */}
        <div className="md:hidden flex justify-around items-center">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25 9.9165H29.75"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M4.25 17H29.75"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M4.25 24.0835H29.75"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>

          <Link href={"/"} className="ml-12">
            <Image src={"/logo.png"} alt="" width={60} height={60} />
          </Link>

          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7344 21C16.9811 21 21.2344 16.7467 21.2344 11.5C21.2344 6.25329 16.9811 2 11.7344 2C6.48767 2 2.23438 6.25329 2.23438 11.5C2.23438 16.7467 6.48767 21 11.7344 21Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.2344 22L20.2344 20"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="relative">
            <Link href={"/cart"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 8H21"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>

            <span className="bg-[#A74107] text-white absolute -top-[11px] -right-[18px] rounded-full  text-sm w-5 h-5 flex justify-center">
              4
            </span>
          </div>
        </div>

        <nav className="hidden md:flex justify-around items-center w-full">
          <ul className="nav-links">
            <li>
              <Link href={"#"}>men</Link>
            </li>

            <li>
              <Link href={"#"}>women</Link>
            </li>

            <li>
              <Link href={"#"}>baby&kids</Link>
            </li>

            <li>
              <Link href={"#"}>sales</Link>
            </li>
          </ul>

          <Link href={"#"}>
            <Image
              src={"/logo.png"}
              className="nav-logo"
              alt=""
              width={100}
              height={100}
            />
          </Link>

          <ul className="nav-links">
            <li>
              <Link href={"#"}>search</Link>
            </li>

            <li>
              <Link href={"#"}>account</Link>
            </li>

            <li>
              <Link href={"/cart"}>cart(4)</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
