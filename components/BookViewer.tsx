// src/components/BookViewer.tsx
import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import type { PageFlip } from "page-flip";
import Page from "./Page";

export default function BookViewer() {
  const flipRef = useRef<PageFlip | null>(null);

  const next = () => flipRef.current?.flipNext();
  const prev = () => flipRef.current?.flipPrev();

  return (
    <div className="flex flex-col items-center">
      <HTMLFlipBook
        width={420}
        height={600}
        /* props TS claims are required — give them harmless defaults */
        style={{}} // empty style object
        startPage={0}
        minWidth={0}
        maxWidth={9999}
        minHeight={0}
        maxHeight={9999}
        drawShadow /* true by default */
        flippingTime={1000} /* default 1 s */
        swipeDistance={40} // ← tweak sensitivity if needed (default 30 px)
        useMouseEvents // ← true by default; leave it or set explicitly
        mobileScrollSupport={false} // let the finger drag ONLY flip pages
        disableFlipByClick // optional: rely on gestures/buttons only
        /* your real config */
        usePortrait
        size="fixed"
        className="shadow-xl rounded-lg"
        ref={flipRef} // keeps ref type from cascading errors
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Page key={i} number={i + 1} />
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
