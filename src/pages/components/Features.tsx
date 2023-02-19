import styles from "@/styles/Features.module.css";
import LearnMore from "./LearnMore";
function Features() {
          return (
                    <div className="flex flex-col">
                    <div>
                           <div className="w-[45%] p-5">
                              <p className="text-3xl p-9">Our Features</p>
                              <h1 className="text-5xl font-extrabold px-9 py-4">Know your audience and boost sales</h1>
                             <hr className="relative r-5 border-2 border-black border-b"/>
                             </div>   
                              <p className="float-right w-[45%] text-2xl font-bold m-[3rem]">
                                        Effective emails convey the most significant substance to a client at a
                                        proper time which is our marketing approaches include scheduled emails.
                              </p>
                    </div>
                              <LearnMore></LearnMore>
                              </div>
          );
}

export default Features;
