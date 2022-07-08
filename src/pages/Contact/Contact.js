import { useForm } from "react-hook-form";
import Arrival from "../Home/Arrival";
import Footer from "../Shared/Footer";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1 className="text-5xl text-center py-12 capitalize font-bold text-white bg-primary">
        Contact us{" "}
      </h1>
      <div className="w-3/5 mx-auto py-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="input input-bordered w-full  mb-10"
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Enter Your Emaill Address"
            className="input input-bordered w-full  mb-10"
            {...register("email")}
          />
          <input
            type="text"
            placeholder="Enter Subject"
            className="input input-bordered w-full  mb-10"
            {...register("subject")}
          />
          <textarea
            placeholder="Enter Your Message"
            className="input input-bordered h-40 w-full  mb-10"
            {...register("message")}
          />

          <button className="submit-btn text-white bg-black w-1/4 mx-auto">
            Submit
          </button>
        </form>
      </div>
      <Arrival />
      <Footer />
    </div>
  );
};

export default Contact;
