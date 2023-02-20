import styles from "@/styles/Main.module.css";
import Navbar from "@/pages/components/Navbar";
import Image from "next/image";
import img from "@/assets/marketingImg.png";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs"
function Main() {
  return (
    <div className={styles.main}>
      <Navbar></Navbar>
      <div className="flex flex-row justify-around ">
        <div className="flex justify-center items-center w-[45%]">
          <div className="flex flex-col">
            <div>
              {" "}
              <h1 className="text-white font-extrabold text-6xl">
                Reach your - audience & convert your leads{" "}
              </h1>
            </div>
            <div className="text-white pt-7 pb-7">
              {" "}
              <p>
                Get your customers with SEO, rank your business with email
                marketing, build sales leads.
              </p>
            </div>
            <div className="flex">
              <div className="w-max bg-green-400 text-black font-bold p-2 rounded-md m-2 hover:bg-green-300 transition-all ease-in-out hover:scale-110">

                <Link className="p-1" href="#">Get Started</Link>
              </div>
              <div className="w-max text-white font-bold border border-white p-2 rounded-md m-2  hover:bg-white hover:text-black transition ease-in-out duration-400 hover:scale-110 flex">
        <span className="p-1"> <BsFillPlayFill/></span>  <button type="submit">Watch Demo</button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="z-[2] relative top-[10rem]">
            <Image src={img} alt="image" width={500} height={500}></Image>
          </div>
          <div className="border border-white w-[32rem] h-[20rem] ease relative left-2 bottom-[15rem] z-[0]"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
