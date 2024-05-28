"use client";
import { FeedbackContext } from "@/context/Feedback";
import { useContext } from "react";

export default function Feedback() {
  const { feedback, setFeedback } = useContext(FeedbackContext);

  if (!feedback) {
    return null;
  }

  return (
    <section className="fixed top-[15lvh] left-0 right-0 flex justify-center">
      <p>{feedback}</p>
    </section>
  );
}
