import React, { use, useMemo } from "react";
import MerilLanding from "./Pages/MerilLanding";
import TableOfContents from "./Pages/TableOfContent";

/**
 * Accepts either a React node **or** a plain HTML string.
 * Add as many entries as you like; undefined keys fall back to Blank Page.
 */
const pageContent: Record<number, React.ReactNode | { __html: string }> = {
  // JSX components
  1: <MerilLanding />,
  2: <TableOfContents />,
  3: <div>Page 3 (JSX)</div>,
  4: { __html: "<h1>Page 4</h1><p>This came from HTML.</p>" },
};

// One page = one React node; forwardRef is required by the library
const Page = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ number: number }>
>(({ number }, ref) => {
  const body = React.useMemo(() => {
    const entry = pageContent[number];

    // HTML object ⇒ render via dangerouslySetInnerHTML
    if (entry && typeof entry === "object" && "__html" in entry) {
      return <div dangerouslySetInnerHTML={entry} />;
    }

    // ReactNode or undefined
    return entry ?? <div>Blank Page</div>;
  }, [number]);

  return (
    <div
      ref={ref}
      className="flex h-full w-full items-center justify-center bg-white text-2xl font-semibold"
    >
      {body}
    </div>
  );
});

export default Page;
