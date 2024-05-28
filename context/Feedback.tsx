"use client";
import { ChildrenType, FeedbackContextType } from "@/app/_utils/types";
import { ReactNode, createContext, useEffect, useState } from "react";

export const FeedbackContext = createContext<FeedbackContextType | null>(null);

export function FeedbackProvider({ children }: ChildrenType) {
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFeedback(null);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [feedback]);

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}
