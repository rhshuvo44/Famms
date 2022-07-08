import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const HomeFooter = () => {
  return (
    <div>
      <footer className="footer p-16 bg-[#F8F8F8] text-base-content">
        <div>
          <img width="250" src={logo} alt="" />
          <p className="w-3/4 py-2">
            <span className="font-bold text-xl">ADDRESS:</span> 28 White tower,
            Street Name New York City, USA
          </p>
          <p>
            <span className="font-bold text-xl">TELEPHONE:</span> +91 987 654
            3210
          </p>
          <p className="py-2">
            <span className="font-bold text-xl">EMAIL:</span>yourmain@gmail.com
          </p>
        </div>
        <div>
          <span className="footer-title ">menu</span>
          <a className="link link-hover" href="#home">
            Home
          </a>
          <a className="link link-hover" href="#about">
            About
          </a>
          <a className="link link-hover" href="#services">
            Services
          </a>
          <a className="link link-hover" href="#testimonial">
            Testimonial
          </a>
          <Link className="link link-hover" to="blog">
            Blog
          </Link>
          <a className="link link-hover" href="#contact">
            Contact
          </a>
        </div>
        <div>
          <span className="footer-title" href="r">
            ACCOUNT
          </span>
          <a className="link link-hover" href="r">
            Account
          </a>
          <a className="link link-hover" href="r">
            Checkout
          </a>
          <a className="link link-hover" href="r">
            Login
          </a>
          <a className="link link-hover" href="r">
            Register
          </a>
          <a className="link link-hover" href="r">
            Shopping
          </a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">
                Subscribe by our newsletter and get update protidin.
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-10 bg-black text-white">
        <div>
          <p>Copyright © 2022 - All right reserved by Famms Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeFooter;
