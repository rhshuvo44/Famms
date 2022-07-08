import React from "react";
import "./Arrival.css";
import bg from "../../images/arrival-bg.png";

const Arrival = () => {
  return (
    <div className="py-5 ">
      <div class="bg-neutral px-16 flex items-center ">
        <figure className="h-fit w-4/4">
          <img className="w-4/4" src={bg} alt="Album" />
        </figure>
        <div class="w-4/4">
          <h2 class="font-bold text-6xl capitalize text-accent">#new Arrivals</h2>
          <p className="py-6">
            Vitae fugiat laboriosam officia perferendis provident aliquid
            voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
            Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex
            unde!
          </p>

          <button class="common-btn btn-primary">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
