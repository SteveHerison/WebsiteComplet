import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen bg-zinc-800 text-orange-500">
      {children}
    </div>
  );
};

export default Layout;
