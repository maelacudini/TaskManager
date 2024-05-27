"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col justify-center items-center gap-4 py-[5lvh] px-5 h-[100lvh]">
      <p className="h2">Something went wrong!</p>
      <button className="btn" onClick={() => reset()}>
        Try again
      </button>
    </section>
  );
}
