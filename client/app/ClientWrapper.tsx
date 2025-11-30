"use client";

import { Providers } from "./Provider";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
