import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  // close on click outside
  useEffect(() => {
    const clickHandler = (target) => {
      if (!dropdown?.current) return;
      if (
        !dropdownOpen ||
        dropdown?.current?.contains(target) ||
        trigger?.current?.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (keyCode) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });



  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
       <span className="h-12 w-12 rounded-full">
          <Image
            className="h-12 w-12 object-cover rounded-full"
            width={112}
            height={112}
            src={'/elon.jpg'}
            alt="User"
          />
        </span>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex z-[999] flex-col rounded-sm border bg-white ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-0 w-full">
          <li className="border-b border-stroke p-5">
            <Link
              href="/profile"
              className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-violet-500 lg:text-base"
            >
              <Icon className="text-black" icon="ph:user" />
              <p className="whitespace-nowrap">My Profile</p>
            </Link>
          </li>
        </ul>
        
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
