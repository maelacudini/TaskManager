"use client";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { store } from "../lib/store";
import { ThemeProvider } from "next-themes";
import { FeedbackProvider } from "@/context/Feedback";
import { ChildrenType } from "./_utils/types";

export default function StoreProvider({ children }: ChildrenType) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Provider store={store}>
        <FeedbackProvider>{children}</FeedbackProvider>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <ThemeProvider>
        <FeedbackProvider>{children}</FeedbackProvider>
      </ThemeProvider>
    </Provider>
  );
}
