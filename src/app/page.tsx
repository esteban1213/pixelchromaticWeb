"use client"; // This is a client component 👈🏽

import Home from "./index"; // Make sure this is the correct import path
import { usePathname } from "next/navigation";

// ...

export default function App() {
  const path = usePathname();
  return (
    <main>
      <Home />
    </main>
  );
}
