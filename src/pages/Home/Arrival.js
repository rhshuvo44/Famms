import bg from "../../images/arrival-bg.png";
import "./Arrival.css";

const Arrival = () => {
  return (
    <div className="py-5 ">
      <div className="bg-neutral px-16 flex items-center ">
        <figure className="h-fit w-4/4">
          <img className="w-4/4" src={bg} alt="Album" />
        </figure>
        <div className="w-4/4">
          <h2 className="font-bold text-6xl capitalize text-accent">#new Arrivals</h2>
          <p className="py-6">
            Vitae fugiat laboriosam officia perferendis provident aliquid
            voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
            Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex
            unde!
          </p>

          <button className="common-btn btn-primary">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
