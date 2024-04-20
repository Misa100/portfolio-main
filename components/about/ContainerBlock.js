import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  return (
    <div>
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
}
