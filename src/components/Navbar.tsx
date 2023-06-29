import {
  contractConst,
  primaryColorConst,
  themeConst,
} from "../consts/parameters";
import { links } from "../lib/navLink";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Link, NavLink } from "react-router-dom";

const urlParams = new URL(window.location.toString()).searchParams;

let activeLink = "text-[#22D3EE] font-bold hover:opacity-50";
let normalLink = "hover:opacity-50";

export default function NavBar() {
  const theme = (urlParams.get("theme") || themeConst || "light") as
    | "light"
    | "dark";

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="pt-2 mx-auto">
            <div className="flex h-16 justify-between">
              <div className=" lg:ml-4 lg:flex lg:space-x-8">
                <div className="flex items-center justify-between">
                  <div>
                    <ul className="flex items-center justify-center dark:text-white lg:text-sm xl:text-base">
                      {links.map((link) => {
                        return (
                          <li
                            key={link.name}
                            className="group relative px-3 py-2"
                          >
                            <NavLink
                              to={`${link.link}`}
                              className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                              }
                            >
                              {link.name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end px-2 sm:flex lg:ml-6 lg:justify-end">
                <ConnectWallet className="" theme={theme} />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
