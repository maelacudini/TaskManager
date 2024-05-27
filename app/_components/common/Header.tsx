"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="py-[5lvh] px-5 flex justify-between items-center">
      <p className="h4">TasksManager</p>
      <button className="btn" style={{ padding: "1rem" }} onClick={toggleTheme}>
        <Image
          alt="toggle switch"
          src={theme === "light" ? "/icons/sun.svg" : "/icons/moon.svg"}
          height={20}
          width={20}
        />
      </button>
    </header>
  );
}
