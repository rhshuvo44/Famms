import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const HomeFooter = () => {
  return (
    <div>
      <footer class="footer p-16 bg-[#F8F8F8] text-base-content">
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
          <span class="footer-title ">menu</span>
          <a class="link link-hover" href="#home">
            Home
          </a>
          <a class="link link-hover" href="#about">
            About
          </a>
          <a class="link link-hover" href="#services">
            Services
          </a>
          <a class="link link-hover" href="#testimonial">
            Testimonial
          </a>
          <Link class="link link-hover" to="blog">
            Blog
          </Link>
          <a class="link link-hover" href="#contact">
            Contact
          </a>
        </div>
        <div>
          <span class="footer-title" href="r">
            ACCOUNT
          </span>
          <a class="link link-hover" href="r">
            Account
          </a>
          <a class="link link-hover" href="r">
            Checkout
          </a>
          <a class="link link-hover" href="r">
            Login
          </a>
          <a class="link link-hover" href="r">
            Register
          </a>
          <a class="link link-hover" href="r">
            Shopping
          </a>
        </div>
        <div>
          <span class="footer-title">Newsletter</span>
          <div class="form-control w-80">
            <label class="label">
              <span class="label-text">
                Subscribe by our newsletter and get update protidin.
              </span>
            </label>
            <div class="relative">
              <input
                type="text"
                placeholder="username@site.com"
                class="input input-bordered w-full pr-16"
              />
              <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer class="footer footer-center p-10 bg-black text-white">
        <div>
          <p>Copyright © 2022 - All right reserved by Famms Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeFooter;
