import { ImQuotesLeft } from "react-icons/im"

function Testimonials() {
  return (<div className="bg-[#fffed6] my-[6rem] py-[1rem]  flex flex-col h-[70vh] relative">
    <div className="w-[45%] p-20 m-1">
      <p className="text-2xl font-[400]">OUR HAPPY CUSTOMERS</p>
      <h1 className="text-5xl font-bold pb-7">What our customers say about us</h1>
      <hr className="border-[1.5px] border-black " />
    </div>
    <div className="float-right absolute w-[40%] right-0 bottom-0 m-11 hover:scale-110  ease-in-out duration-300">
      <span className="text-[#a0beaa] text-4xl relative right-[3.5rem]"><ImQuotesLeft /></span>
      <p className="text-4xl font-bold text-[#41624d]">Lorem ipsum dolor sit amet adipisicing elit. Molestiae assumenda perspiciatis, a quos illum officia odit? Fugiat aperiam dolorem saepe?</p>
      <h1 className="text-5xl font-bold text-[#3d5044] mt-2">Jane Doe</h1>
      <p className="text-[#7c9e88] text-2xl">Product Specialist, Lorem Co.</p>
    </div>
  </div>);
}

export default Testimonials;