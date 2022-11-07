import cx from "classnames";
import { ReactNode } from "react";

type PageWrapProps = {
  className?: string;
  children: ReactNode;
};
function PageWrap({ className, children }: PageWrapProps) {
  return (
    <div
      className={cx(
        "container mx-auto my-20 flex-col px-4",
        className && className
      )}
    >
      {children}
    </div>
  );
}

export default PageWrap;
