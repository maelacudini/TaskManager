"use client";
import { useFeedbackContext } from "@/context/Feedback";

export default function Feedback() {
  const context = useFeedbackContext();

  if (!context) {
    throw new Error("FeedbackContext must be used within a FeedbackProvider");
  }

  const { feedback, setFeedback } = context;

  if (!feedback) {
    return null;
  }

  return (
    <section className="absolute top-0 left-0 right-0 flex justify-center">
      <p>{feedback}</p>
    </section>
  );
}
