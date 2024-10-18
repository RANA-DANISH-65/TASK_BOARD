import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const layout = () => {
  return (
    <div className="w-screen h-screen relative ">
      <Navbar/>
      <Sidebar/>
      <div className="overflow-y-atuo overflow-scroll md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default layout;
