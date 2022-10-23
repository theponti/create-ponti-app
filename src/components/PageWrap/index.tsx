import cx from "classnames";
import { ReactNode } from "react";

function PageWrap({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx("container mx-auto flex-col px-4 pt-14", {
        [className || ""]: className,
      })}
    >
      {children}
    </div>
  );
}

export default PageWrap;
