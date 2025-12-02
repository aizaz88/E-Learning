"use client";

import { ProviderWrapper } from "./Provider";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProviderWrapper>{children}</ProviderWrapper>;
}
