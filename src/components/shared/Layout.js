import React from "react";
import { LinksNav } from "./navbar/LinksNav";
import { UpperNav } from "./navbar/UpperNav";

export const Layout = ({ children }) => {
  return (
    <div>
      <UpperNav />
      <LinksNav />
      {children}
    </div>
  );
};
