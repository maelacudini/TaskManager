import { ChildrenType } from "@/app/_utils/types";

export default function Card({ children }: ChildrenType) {
  return <section className="card">{children}</section>;
}
