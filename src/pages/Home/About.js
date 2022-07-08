import { TbCertificate, TbFreeRights, TbTruckDelivery } from "react-icons/tb";

const About = () => {
  return (
    <div className="p-16">
      <h1 className="text-center font-bold text-6xl capitalize">
        why shop with us
      </h1>
      <hr className="drive" />
      <div className="cards py-10 grid md:grid-cols-3 gap-5">
        <div className="card bg-accent text-white py-5 rounded-none">
          <figure>
            <div>
              <TbTruckDelivery className="w-14 h-auto pt-2" />
            </div>
          </figure>
          <div className="card-body text-center px-10">
            <h2 className="font-bold text-3xl">Free Shiping</h2>
            <p className="px-10">
              variations of passages of Lorem Ipsum available
            </p>
          </div>
        </div>
        <div className="card bg-accent text-white py-5 rounded-none">
          <figure>
            <div>
              <TbFreeRights className="w-14 h-auto pt-2" />
            </div>
          </figure>
          <div className="card-body text-center px-10">
            <h2 className="font-bold text-3xl">Fast Delivery</h2>
            <p className="px-10">
              variations of passages of Lorem Ipsum available
            </p>
          </div>
        </div>
        <div className="card bg-accent text-white py-5 rounded-none">
          <figure>
            <div>
              <TbCertificate className="w-14 h-auto pt-2" />
            </div>
          </figure>
          <div className="card-body text-center px-10">
            <h2 className="font-bold text-3xl">Best Quality</h2>
            <p className="px-10">
              variations of passages of Lorem Ipsum available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
