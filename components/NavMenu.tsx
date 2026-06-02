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
      <div className="md:hidden fixed top-4 left-4 right-4 z-50 flex justify-between items-center px-5 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.3)]">
        <h1 className="text-lg font-bold text-[#FAFAFA] truncate">My Portfolio</h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-[#2D7FF9] hover:text-[#FAFAFA] transition flex-shrink-0"
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
        className={`flex flex-col md:flex md:flex-col gap-4 md:w-48 bg-white/5 backdrop-blur-xl border border-white/20 md:border-none md:backdrop-blur-none md:bg-transparent rounded-2xl md:rounded-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.3)] md:shadow-none
          fixed md:static top-20 right-4 left-4 md:top-auto md:right-auto md:left-auto
          p-6 md:p-0 transition-all duration-500 ease-in-out z-40
          md:translate-x-0 md:opacity-100
          ${open ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none md:pointer-events-auto md:translate-y-0"}
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
                  ${isActive ? "opacity-100 scale-100 bg-[#2D7FF9]" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 bg-[#3B82F6]"}
                `}
              ></span>

              <span
                className={`relative transition-transform duration-700 ease-out ${isActive ? "translate-x-6" : "group-hover:translate-x-6"}`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-500 
                    ${isActive ? "w-full bg-[#2D7FF9] shadow-[0_0_12px_rgba(165,140,244,0.75)]" : "w-0 group-hover:w-full bg-[#3B82F6]"}
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
