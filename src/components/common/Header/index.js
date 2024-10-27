// import DropdownUser from "./DropdownUser";
import { toggleSidebar } from "@/store/features/sidebarSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <header className="top-0 flex w-fulldrop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between p-4 shadow-2 md:px-6 2xl:px-11">
        <Link href="/">
          <Icon className="text-5xl" icon="fluent-emoji:movie-camera" />
        </Link>
        <div className="flex items-center gap-6 w-full max-w-md 2xsm:gap-7">
          {/* <DropdownUser /> */}
          {!isSidebarOpen && (
            <span
              className="text-3xl lg:hidden"
              onClick={() => dispatch(toggleSidebar())}
            >
              <Icon icon="material-symbols-light:menu" />
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
