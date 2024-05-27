import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 py-[5lvh] px-5 h-[100lvh]">
      <p className="h2">Not Found</p>
      <p className="h4 text-gray-400">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </section>
  );
}
