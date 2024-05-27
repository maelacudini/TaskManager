import { ReactNode } from "react";

type ChildrenType = {
  children: ReactNode;
};

export default function Card({ children }: ChildrenType) {
  return <section className="card">{children}</section>;
}
