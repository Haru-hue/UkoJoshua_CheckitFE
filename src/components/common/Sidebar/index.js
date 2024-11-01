import cn from "classnames";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/features/sidebarSlice";
import { NavItems } from "@/constants/navItems";
import LinkItem from "./LinkItem";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <aside
      className={cn(
        `absolute left-0 top-0 z-50 border-r dark:border-none bg-stone-400 text-white flex h-screen flex-col overflow-y-hidden transition-all duration-300 ease-linear lg:static lg:translate-x-0 `,
        {
          "w-40": isSidebarOpen,
          "w-20 max-lg:w-0": !isSidebarOpen,
        }
      )}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="relative flex w-full items-center justify-center gap-2 px-6 py-5 cursor-pointer bg-stone-800">
        <Icon
          icon={`akar-icons:chevron-${isSidebarOpen ? "left" : "right"}`}
          className="text-3xl"
          onClick={() => dispatch(toggleSidebar())}
        />
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="p-4 lg:px-6">
          <div>
            <ul
              className={cn("mb-6 flex flex-col gap-1.5", {
                "items-center justify-center": !isSidebarOpen,
              })}
            >
              {NavItems.map((linkItem, index) => (
                <li key={index}>
                  <LinkItem
                    title={linkItem.label}
                    href={linkItem.link}
                    icon={linkItem.icon}
                  />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
