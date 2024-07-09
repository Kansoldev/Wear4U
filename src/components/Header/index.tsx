import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* Promo banner*/}
      <div></div>
      {/* End Promo banner */}

      <header className="p-3 bg-[#f7f5e9]">
        {/* Mobile menu */}
        <div className="md:hidden flex justify-around items-center">
          <span className="lnr lnr-menu text-3xl"></span>

          <Link href={"#"} className="ml-12">
            <Image src={"/logo.png"} alt="" width={60} height={60} />
          </Link>

          <span className="lnr lnr-magnifier text-xl"></span>

          <span className="lnr lnr-cart text-xl"></span>
        </div>

        <nav className="hidden md:flex justify-around items-center w-full py-[0.625rem]">
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
              <Link href={"#"}>cart(4)</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
