"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Contacts() {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <div>
      <h1>Contacts</h1>
    </div>
  );
}
