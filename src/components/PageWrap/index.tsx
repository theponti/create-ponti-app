import { ReactNode } from "react";

function PageWrap({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto min-h-screen flex-col pt-14 px-4">
      {children}
    </div>
  );
}

export default PageWrap;
