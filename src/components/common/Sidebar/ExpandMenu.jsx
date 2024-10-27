"use client";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
import { useState } from "react";
import cn from "classnames";

import s from './style/item.module.css'
import { useAppSelector } from "@/store";


const ExpandMenu = (props) => {
  const { children, icon, name } = props;
  const [open, setOpen] = useState(false);
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="">
      <CollapsibleTrigger asChild className="group rounded-sm px-3 py-2  ">
        {isSidebarOpen ? (
          <div className="flex w-full items-center text-gray-2 ">
            {icon}
            <div
              className={cn(
                "flex w-full transform items-center justify-between duration-300 ease-in",
              )}
            >
              <p
                className={cn(
                  "ml-2 text-lg text-gray-2 group-hover:text-white ",
                  {},
                )}
              >
                {name}
              </p>
            </div>
          </div>
        ) : <div>{icon}</div>}
      </CollapsibleTrigger>
      <CollapsibleContent className={s.CollapsibleContent}>
        <div className="px-3">{isSidebarOpen && children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ExpandMenu;
