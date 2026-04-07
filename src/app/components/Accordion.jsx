"use client";

import { useState, useEffect, useRef } from "react";

export default function Accordion({ id, title, children, isOpen}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
      setTimeout(() => {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [isOpen]);

  return (
    <div id={id} ref={ref} className="border border-white/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-4  hover:bg-white/10 transition"
      >
        <span className="text-sm font-bold">{title}</span>
        <span className="text-lg">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-4 py-4 bg-white/5">
          {children}
        </div>
      )}
    </div>
  );
}
