import { IoAppsOutline, IoGridOutline, IoHomeOutline, IoLogOutOutline, IoNewspaperOutline, IoNotificationsOutline, IoPeopleOutline, IoPieChartOutline } from "react-icons/io5";

const Sidebar = () => {
  const navLinks = [
    {
      title: "Home",
      icon: <IoHomeOutline className="text-red-500 w-5 h-5" />,
      active: false,
    },
    {
      title: "Boards",
      icon: <IoAppsOutline className="text-red-500 w-5 h-5" />,
      active: true,
    },
    {
      title: "Projects",
      icon: <IoGridOutline className="text-red-500 w-5 h-5" />,
      active: false,
    },
    {
      title: "Analytics",
      icon: <IoPieChartOutline className="text-red-500 w-5 h-5" />,
      active: false,
    },
    {
      title: "Work Flows",
      icon: <IoPeopleOutline className="text-red-500 w-5 h-5" />,
      active: false,
    },
    {
      title: "Notifications",
      icon: <IoNotificationsOutline className="text-red-500 w-5 h-5" />,
      active: false,
    },
    {
      title: "NewsLetter",
      icon: <IoNewspaperOutline className="text-red-500 w-5 h-5" />,
      active: false,
    },
  ];
  
  return (
    <div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
      <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[69px] bg-[#343434]">
        <span className="text-orange-400 font-semibold text-2xl md:block hidden">
          Logo.
        </span>
        <span className="text-orange-400 font-semibold text-2xl md:block hidden">
          L.
        </span>
      </div>
      <div className="w-full h-[calc(100vh-70px)]  flex flex-col md:items-start items-center gap-2 border-slate-300 bg-[#343434] py-5 px-3 relative">
        {navLinks.map((link) => {
          return (
            <div
              key={link.title}
              className={`flex  text-gray-300 items-center gap-2 w-full rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer ${
                link.active ? "bg-orange-300" : "bg-transparent"
              }`}
            >
              {link.icon}
              <span className="font-medium text-[15px] md:block hidden">
                {link.title}
              </span>
            </div>
          );
        })}

        <div className="flex absolute bottom-4 text-white items-center md:justify-start justify-center gap-2 md:w-[70%] rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer bg-red-400">
          <IoLogOutOutline className="text-gray-500 w-5 h-5" />
          <span className="font-medium text-[15px] md:block hidden">
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
