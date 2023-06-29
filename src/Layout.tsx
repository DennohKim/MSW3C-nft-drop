// import React from 'react'

import NavBar from "./components/Navbar";

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative h-full bg-space bg-cover bg-center bg-no-repeat">
      <div className="bg-animation z-1">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className="">
        <NavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
