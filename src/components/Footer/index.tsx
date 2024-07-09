import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Company</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">About us</a>
            </li>

            <li>
              <a href="#">FAQ</a>
            </li>

            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Newsletter</h2>

          <p className="leading-tight">
            Sign up for our Newsletter and Receive $10 off your First Order
          </p>

          <form className="newsletter-form" action="">
            <input
              type="text"
              className="py-3 border-0 bg-none rounded-none w-full text-[1.05rem] font-bold"
              placeholder="Your Email"
            />
            <button className="bg-transparent border-0 cursor-pointer h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
              </svg>
            </button>
          </form>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
