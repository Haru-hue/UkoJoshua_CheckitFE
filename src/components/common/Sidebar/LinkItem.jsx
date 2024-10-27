import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const LinkItem = (props) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const pathname = usePathname()

  return (
    <Link
      className={cn(`group relative flex items-center rounded-lg px-3 py-2 text-gray-3 duration-300 ease-in-out`, {
        "bg-white text-stone-800": pathname === props.href,
        "hover:text-stone-600": pathname!== props.href,
        'justify-center': isSidebarOpen
      })}
      href={props.href}
    >
      {props.icon}
    </Link>
  );
};

export default LinkItem;
