import { FaLongArrowAltRight } from "react-icons/fa";
import img from "@/assets/automation.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function LearnMore() {
  const [hovered, setHovered] = useState(false);

  function handleHoveredTrue() {
    setHovered(true);
  }
  function handleHoveredFalse() {
    setHovered(false);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#e5dfdf] rounded-2xl w-[90%] flex p-20">
        <div>
          <h1 className="text-4xl font-extrabold pb-7 w-[60%]">
            Save precious time with automation{" "}
          </h1>
          <p className="text-[1.2rem] font-[300] pb-7 w-[60%]">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, odit
            dolor? Excepturi amet eveniet dolor enim odio? Nisi voluptatum
            inventore adipisci eligendi, architecto sequi est.
          </p>
          <div
            className=" w-max"
            onMouseEnter={handleHoveredTrue}
            onMouseOut={handleHoveredFalse}
          >
            {" "}
            <Link
              href="#"
              className="flex rounded font-bold text-2xl p-3 transiton hover:bg-black hover:text-white hover:scale-110 ease duration-300"
            >
              {" "}
              Learn More{" "}
              <span className="font-[600] px-1">
                <FaLongArrowAltRight />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <Image src={img} alt=" " width={1000} height={500}></Image>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
