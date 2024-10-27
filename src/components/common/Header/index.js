import { toggleSidebar } from "@/store/features/sidebarSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { useTheme } from "next-themes";

const Header = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();

  return (
    <header className="top-0 flex w-full drop-shadow-1 border-b dark:border-b-slate-500">
      <div className="flex flex-grow items-center justify-between p-4 shadow-2 md:px-6 2xl:px-11">
        <Link href="https://checkitprocure.com/">
          <Image
            src={"/logo_cropped.png"}
            className=""
            width={100}
            height={100}
          />
        </Link>
        <div className="flex items-center gap-6 w-full justify-end 2xsm:gap-7">
          <div
            className="text-3xl cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? (
              <Icon icon="tabler:moon" />
            ) : (
              <Icon icon="tabler:sun" />
            )}
          </div>
          <DropdownUser />

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
