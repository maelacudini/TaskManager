"use client";
import { Provider } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { store } from "../lib/store";
import { ThemeProvider } from "next-themes";

type ChildrenType = {
  children: ReactNode;
};

export default function StoreProvider({ children }: ChildrenType) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Provider store={store}>{children}</Provider>;
  }

  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}
