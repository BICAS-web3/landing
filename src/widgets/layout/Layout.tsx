import { FC, PropsWithChildren } from "react";

import { Footer } from "../footer";
import { Header } from "../header";

export interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
