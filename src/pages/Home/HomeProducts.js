import { Link } from "react-router-dom";

const HomeProducts = () => {
  return (
    <div className="p-16">
      <h1 className="text-center font-bold text-6xl capitalize">
        Our <span className="text-primary">Products</span>
      </h1>
      <hr className="drive" />
      <Link to="/products" class="common-btn btn-primary">
        view all products
      </Link>
    </div>
  );
};

export default HomeProducts;
