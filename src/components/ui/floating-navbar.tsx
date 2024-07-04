/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-full    fixed top-10 inset-x-0 mx-4 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-between space-x-4",
          className
        )}
      >
        <h1 className="text-2xl font-bold uppercase tracking-wider">
          <span className="text-[#7F6EFC]">N</span>
          av
          <span className="text-[#7F6EFC]">b</span>ar
        </h1>
        <div className="hidden sm:flex font-bold items-center gap-6">
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex gap-2 space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className=" text-sm">{navItem.name}</span>
              <span className="">{navItem.icon}</span>
            </a>
          ))}
        </div>
        <button className="sm:hidden px-3">
          <MenuIcon />
        </button>
        <div className="hidden sm:flex gap-3">
          <button className=" border mr-auto  text-sm font-medium relative border-[#E9D7FE] text-[#6941C6] bg-[#F9F5FF] dark:border-white/[0.2]  dark:text-white px-4 py-2 rounded-full">
            <span>Login</span>
          </button>
          <button className="border mr-auto text-sm font-medium relative border-[#7F56D9]  bg-[#7F56D9] dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full">
            <span>Sign up</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
