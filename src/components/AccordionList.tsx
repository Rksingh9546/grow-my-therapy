"use client";

import { useState } from "react";
import type { AccordionItem } from "@/content/types";

export default function AccordionList({
  items,
}: {
  items: AccordionItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const open = openIndex === index;
        const triggerId = `accordion-trigger-${index}`;
        const panelId = `accordion-panel-${index}`;

        return (
          <div key={item.title} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              aria-controls={panelId}
              id={triggerId}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-ink">
                {item.title}
              </span>

              <span
                aria-hidden="true"
                className={`shrink-0 transition-transform duration-300 ${
                  open ? "rotate-45" : ""
                }`}
              >
                <span className="relative block h-3 w-3">
                  <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-ink" />
                  <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-ink" />
                </span>
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!open}
            >
              <p className="pb-6 pr-10 text-sm leading-7 text-ink/80">
                {item.body}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}