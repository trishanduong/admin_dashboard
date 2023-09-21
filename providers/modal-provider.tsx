"use client";

import { StoreModal } from "@/components/modals/store-modal";

import { useEffect, useState } from "react";

/* 
ModalProvider: Add to layout.tsx of App folder so that it can be accessible through out the application-- layout is a server component.
*/

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  //ensures that the client component is added to the server component so theres no hydration errors in modals -- keeps everything in sync on the client side and server side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    //if we are on server side - return null
    return null;
  }
  //if we are on the client side, render store modal (all the modals we want globally accessible)
  return (
    <>
      <StoreModal />
    </>
  );
};
