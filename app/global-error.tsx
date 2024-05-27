"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <section className="flex flex-col justify-center items-center gap-4 py-[5lvh] px-5 h-[100lvh]">
          <h2>Something went wrong!</h2>
          <button className="btn" onClick={() => reset()}>
            Try again
          </button>
        </section>
      </body>
    </html>
  );
}
