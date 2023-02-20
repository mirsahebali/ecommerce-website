import { useState } from "react";
import { VscCallOutgoing } from "react-icons/vsc";
import { HiLocationMarker } from "react-icons/hi"
import { TbWorld } from "react-icons/tb"

export default function ContactUs() {
  interface User {
    fullname: String,
    email: String,
    number: Number,
    message: String
  }


  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState<number>(null);
  const [message, setMessage] = useState("");

  function handleSubmit() { }

  return (
    <div className="flex w-[100vw] justify-around items-center bg-blue-100 mb-[7.5rem]">
      <div className="flex flex-col justify-center text-2xl">
        <div className="m-8 ">
          <h1 className="text-2xl font-bold flex"><span className="text-blue-400"><VscCallOutgoing /></span> <span className="text-gray-600">Call Us</span></h1>
          <p className="underline"> +91-888-987-1111</p>
        </div>
        <div className="m-8 ">
          <h1 className="text-2xl font-bold flex"><span className="text-blue-400"><HiLocationMarker /></span> <span className="text-gray-600">Location</span></h1>
          <p>Ghaziabad, Uttar Pradesh</p>
        </div>
        <div className="m-8 ">
          <h1 className="text-2xl flex font-bold"><span className="text-blue-400"><TbWorld /></span><span className="text-gray-600">Mail us</span></h1>
          <p>info@markall.in</p>
        </div>
      </div>
      <div className="flex flex-col w-[55%] custom-shadow h-[80vh] z-10 bg-white">
        <div>
          <h1 className="text-6xl p-12 font-bold ">Contact Now</h1>
          <p className="font-thin px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse
            necessitatibus, eligendi optio, tempore minus ratione quidem earum
            similique soluta sapiente minima, a voluptatibus eius delectus
            blanditiis animi voluptas cum?
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} action="/api/form" className="flex flex-col p-12">
            <input
              className="hover:enabled:scale-110 ease-in-out duration-300 py-4"
              placeholder="Full Name*"
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              name="fullname"
            />

            <input
              className="hover:enabled:scale-110 ease-in-out duration-300 py-4"
              placeholder="Email*"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              className="  hover:enabled:scale-110 ease-in-out duration-300 py-4"
              placeholder="Phone Number*"
              type="number"
              name="number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.valueAsNumber)

              }}
            />

            <textarea
              className="  hover:enabled:scale-110 ease-in-out duration-300 py-4"
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>

            <div>
              <button
                type="submit"
                formMethod="POST"
                className="flex justify-center items-center p-4 bg-blue-500 rounded mt-8 hover:scale-110 ease-in-out duration-300"
              >
                Submit Form

              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
