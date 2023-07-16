"use client";

import { SessionProvider } from "next-auth/react";

interface Providers {
    children: JSX.Element,
    session?: any
}

const Provider: React.FC<Providers> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
