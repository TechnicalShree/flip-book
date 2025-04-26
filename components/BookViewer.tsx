// src/components/BookViewer.tsx
import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import type { PageFlip } from "page-flip";

// One page = one React node; forwardRef is required by the library
const Page = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ number: number }>
>((props, ref) => (
  <div
    ref={ref}
    className="flex h-full w-full items-center justify-center bg-white text-2xl font-semibold"
  >
    {props.children}
  </div>
));

export default function BookViewer() {
  const flipRef = useRef<PageFlip | null>(null);

  const next = () => flipRef.current?.flipNext();
  const prev = () => flipRef.current?.flipPrev();

  return (
    <div className="flex flex-col items-center">
      <HTMLFlipBook
        /* portrait forces single-page mode */
        width={420}
        height={600}
        usePortrait // single page no matter the screen width
        size="fixed" // keeps aspect ratio
        mobileScrollSupport
        className="shadow-xl rounded-lg"
        ref={flipRef}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Page key={i} number={i + 1}>
            Page {i + 1}
          </Page>
        ))}
      </HTMLFlipBook>

      {/* simple nav controls */}
      <div className="mt-4 space-x-4">
        <button onClick={prev} className="rounded px-4 py-2 border">
          ‹ Prev
        </button>
        <button onClick={next} className="rounded px-4 py-2 border">
          Next ›
        </button>
      </div>
    </div>
  );
}
