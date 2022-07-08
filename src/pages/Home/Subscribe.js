
const Subscribe = () => {
  return (
    <div className="p-16 bg-neutral">
      <div className="w-2/4 m-auto">
        <h1 className="font-bold text-4xl text-accent">
          Subscribe To Get Discount Offers
        </h1>
        <p style={{ fontSize: 18 }} className="py-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="flex flex-col pt-5">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="input w-full rounded-full mb-10"
          />
          <button
            style={{ textTransform: "uppercase" }}
            className="common-btn btn-primary w-2/4 m-auto rounded-full"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
