"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getIsNeededFooter } from "../context/commonJs";
import LinkContactList from "./listComponent/LinkContactList";

const Footer = (props) => {
  const { setPage, isMobile } = props;
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [isNeededFooter, setIsNeededFooter] = useState(getIsNeededFooter(router.pathname));

  useEffect(() => {
    setMounted(true);

  }, []);

  if(!mounted) return null;
  else if (mounted && !isNeededFooter) return null;
  return (mounted && isNeededFooter &&
    <>
      <footer className="absolute sticky inset-x-0 top-0 z-10 h-20 min-w-full text-white bg-primary mb-2">
        <div className="container flex flex-col items-center mx-auto max-w-7xl justify-around h-full text-lg ">
            <LinkContactList />  
        </div>
      </footer>
    </>
  );
};

export default Footer;
