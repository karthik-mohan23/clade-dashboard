import { Database, Divide, MapPin } from "lucide-react";
import CompanyDetails from "./CompanyDetails";
import JobDescription from "./JobDescription";
import figmaImage from "../../assets/figma.png";
import adobeIllImage from "../../assets/adobe-ill.png";
import adobeXdImage from "../../assets/adobe-xd.png";
import Divider from "../Divider";

function Content() {
  return (
    <div className="bg-custom-white-900 flex-grow ">
      {/*  */}
      <div className=" w-[76%] mx-auto">
        <div className="flex items-center gap-3 pt-9 pb-6">
          <h1 className="font-semibold text-[35px]">Senior Product Designer</h1>
          <Ellipse fill="#D1D1D1" />
          <span className="font-medium text-sm text-custom-gray-500">
            Posted 2 days ago
          </span>
          <div className=" flex items-center gap-1 bg-[#ECFDF3] border border-[#ABEFC6] rounded-full ps-[7px] pe-2 py-[6px]">
            <Ellipse fill="#17B26A" />
            <p className="text-[#067647] font-medium text-xs leading-[18px]">
              Open
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center gap-4 text-xl text-custom-gray-600 font-medium pb-8">
          <div className="flex items-center gap-2">
            <MapPin className="" />
            <p className="">Deleware, USA</p>
          </div>

          <div>
            <Ellipse />
          </div>
          {/*  */}
          <div className="flex items-center gap-3">
            <Database />
            <p>$300k-$400k</p>
          </div>
        </div>
      </div>
      {/* divider */}
      <Divider />
      {/*  */}
      <div className=" w-[76%] mx-auto">
        <div className="flex max-w-[872px]  gap-16 py-8">
          {/* first */}
          <div className="flex flex-col gap-2 flex-grow ">
            <p className="text-[#6E6D6D] text-sm font-medium">
              Skills Required
            </p>
            <p className="text-[#344054] text-xs font-medium px-[6px] py-2 border border-[#D0D5DD] rounded-lg flex items-center gap-1">
              <img src={figmaImage} alt="figma icon" />
              <span>Figma</span>
            </p>
            <p className="text-[#344054] text-xs font-medium px-[6px] py-2 border border-[#D0D5DD] rounded-lg flex items-center gap-1">
              <img src={adobeIllImage} alt="adobe illustrator icon" />
              <span>Adobe Illustrator</span>
            </p>
            <p className="text-[#344054] text-xs font-medium px-[6px] py-2 border border-[#D0D5DD] rounded-lg flex items-center gap-1">
              <img src={adobeXdImage} alt="adobeXD icon" />
              <span>Adobe XD</span>
            </p>
          </div>
          {/* second */}
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-[#6E6D6D] text-sm font-medium">
              Preferred Language
            </p>
            <p className="text-custom-gray-800 text-base font-semibold">
              English
            </p>
          </div>
          {/* third */}
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-[#6E6D6D] text-sm font-medium">Type</p>
            <p className="text-custom-gray-800 text-base font-semibold">
              Full time
            </p>
          </div>
          {/* fourth */}
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-[#6E6D6D] text-sm font-medium">
              Years of Experience
            </p>
            <p className="text-custom-gray-800 text-base font-semibold">
              3+ Years of Experience
            </p>
          </div>
        </div>
      </div>
      {/* divider */}
      <Divider />
      {/* Job description */}
      <div className=" w-[76%] mx-auto">
        <JobDescription />
      </div>
      {/* divider */}
      <Divider />
      {/* company details */}
      <div className=" w-[76%] mx-auto">
        <CompanyDetails />
      </div>
    </div>
  );
}
export default Content;

export function Ellipse({ fill = "#D1D1D1" }) {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 4 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="2" cy="2.5" r="2" fill={fill} />
    </svg>
  );
}
