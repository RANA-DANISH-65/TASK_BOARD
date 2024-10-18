import { BiChevronDown } from "react-icons/bi";
import {
  IoNotificationsCircleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoSettingsOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-[calc(100%-60px)] md:w-[calc(100%-230px)] fixed flex items-center justify-between pl-2 pr-4 md:pr-6 h-[60px] md:h-[70px] top-0 md:left-[230px] left-[60px]  bg-[#343434]">
      
      <div className="flex items-center gap-2 md:gap-3 cursor-pointer">
        <IoPersonOutline className="text-orange-400 w-6 h-6 md:w-7 md:h-7" />
        <span className="font-semibold text-orange-400 md:text-lg text-sm whitespace-nowrap">
          Board Name
        </span>
        <BiChevronDown className="text-orange-400 w-4 h-4 md:w-5 md:h-5" />
      </div>

      <div className="flex items-center gap-2 md:w-[600px] w-[160px] bg-gray-100 rounded-lg px-2 py-[8px] md:py-[10px]">
        <IoSearchOutline color="#999" className="w-4 h-4 md:w-5 md:h-5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 outline-none text-sm md:text-[15px]"
        />
      </div>

      <div className="hidden md:flex items-center gap-3 md:gap-4">
        <div className="grid place-items-center bg-gray-100 rounded-full p-1.5 md:p-2 cursor-pointer">
          <IoShareSocialOutline className="text-gray-600 w-5 h-5" />
        </div>
        <div className="grid place-items-center bg-gray-100 rounded-full p-1.5 md:p-2 cursor-pointer">
          <IoSettingsOutline className="text-gray-600 w-5 h-5" />
        </div>
        <div className="grid place-items-center bg-gray-100 rounded-full p-1.5 md:p-2 cursor-pointer">
          <IoNotificationsCircleOutline className="text-gray-600 w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
