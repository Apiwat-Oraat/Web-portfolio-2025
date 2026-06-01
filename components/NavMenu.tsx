"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import type { SectionName } from "@/types/sections";

export type { SectionName };

interface NavMenuProps {
  active: SectionName;
  onSelect: (section: SectionName) => void;
}

export default function NavMenu({ active, onSelect }: NavMenuProps) {
  const [open, setOpen] = useState(false);
  const items: SectionName[] = ["About", "Education", "Experience", "Skills", "Projects"];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-3 bg-[#0D0D0D]/95 backdrop-blur-sm shadow-[0_0_30px_rgba(67,48,117,0.35)] max-w-[100vw]">
        <h1 className="text-lg font-bold text-[#A58CF4] truncate">My Portfolio</h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-[#A58CF4] hover:text-[#FAFAFA] transition flex-shrink-0"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Backdrop สำหรับคลิกนอกเมนู */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Navigation Menu */}
      <nav
        className={`flex flex-col md:flex md:flex-col gap-4 md:w-48 bg-[#0D0D0D]/95 md:bg-transparent
          fixed md:static top-16 right-5 md:top-auto md:right-auto
          p-6 md:p-0 transition-all duration-500 ease-in-out z-40
          md:translate-x-0 md:opacity-100
          max-w-[100vw] md:max-w-none
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        {items.map((label) => {
          const id = label;
          const isActive = active === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(id);
                setOpen(false);
              }}
              className={`group relative flex items-center gap-2 text-sm font-semibold tracking-widest transition-all duration-700 ease-out 
                ${isActive ? "text-[#FAFAFA]" : "text-zinc-400 hover:text-[#FAFAFA]"}
              `}
            >
              <span
                className={`h-2 w-2 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(165,140,244,0.8)]
                  ${isActive ? "opacity-100 scale-100 bg-[#A58CF4]" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 bg-[#433075]"}
                `}
              ></span>

              <span
                className={`relative transition-transform duration-700 ease-out ${isActive ? "translate-x-6" : "group-hover:translate-x-6"}`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-500 
                    ${isActive ? "w-full bg-[#A58CF4] shadow-[0_0_12px_rgba(165,140,244,0.75)]" : "w-0 group-hover:w-full bg-[#433075]"}
                  `}
                ></span>
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
