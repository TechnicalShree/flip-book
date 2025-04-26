import React, { use, useMemo } from "react";
import MerilLanding from "./Pages/MerilLanding";
import TableOfContents from "./Pages/TableOfContent";

// One page = one React node; forwardRef is required by the library
const Page = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ number: number }>
>((props, ref) => {
  const ComponentBody = useMemo(() => {
    switch (props.number) {
      case 1:
        return <MerilLanding />;
      case 2:
        return <TableOfContents />;
      case 3:
        return <div>Page 3</div>;
      case 4:
        return <div>Page 4</div>;
      case 5:
        return <div>Page 5</div>;
      case 6:
        return <div>Page 6</div>;
      case 7:
        return <div>Page 7</div>;
      case 8:
        return <div>Page 8</div>;
      case 9:
        return <div>Page 9</div>;
      case 10:
        return <div>Page 10</div>;
      case 11:
        return <div>Page 11</div>;
      default:
        return <div>Blank Page</div>;
    }
  }, []);

  return (
    <div
      ref={ref}
      className="flex h-full w-full items-center justify-center bg-white text-2xl font-semibold"
    >
      {ComponentBody}
    </div>
  );
});

export default Page;
