import { investmentOptions } from "../../../constants/staticData";
import Button from "../../atoms/button/Button";
import TextDisplay from "../../atoms/textContent/TextContent";
import FDActionSection from "../../molecules/FDActionSection";
import ActionSection from "../actionSection";
import InvestmentOptionsSection from "../investmentOptionsSection";

const FDOptionsExplorer = () => {
  return (
    <div className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col justify-between gap-4 md:w-[75%] md:gap-10 ">
      <div id="topContent">
        <h2 className="text-[20px] bold-text leading-8 tracking-[-0.3] text-[#1B1B1B] md:text-4xl md:semi-bold-text md:leading-[44px]  md:tracking-[-0.1]">
          <span className="text-[#21B546]">Discover FDs</span>{" "}
          <span>based on your </span>
          <span className="block"> requirements</span>
        </h2>
      </div>

      <InvestmentOptionsSection investmentOptions={investmentOptions} />
     <FDActionSection/>
      
    </div>
  );
};

export default FDOptionsExplorer;
