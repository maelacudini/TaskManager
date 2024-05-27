"use client";
import { RootState } from "@/lib/store";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import Card from "../common/Card";

export default function Tasks() {
  const tasks = useSelector((state: RootState) => state.tasks.tasksSlice);
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState<string | null>(null);

  return (
    <>
      <Card>
        <div className="flex flex-col gap-8 h-full">
          <p className="h2">All Your Tasks</p>
          <div className="flex gap-4 items-start">
            <Image
              alt="urgent"
              src="/icons/urgent.svg"
              height={25}
              width={25}
              className="mix-blend-difference invert"
            />
            <p>urgent</p>
          </div>
          {tasks.length > 0 ? (
            <div className="flex flex-col gap-4 overflow-scroll max-h-80">
              {[...tasks].reverse().map((task, i) => (
                <div
                  onClick={() => {
                    setTask(task?.id?.toString()), setOpen(!open);
                  }}
                  className="flex flex-col gap-2 pl-2"
                  style={{
                    borderLeft: `0.25rem solid ${
                      task?.done ? "#499849" : "#cf2222"
                    }`,
                    opacity: task?.done ? "0.5" : "1",
                  }}
                  key={i}
                >
                  <div className="flex gap-2 justify-between items-end">
                    <p>{task?.title}</p>
                    {task?.urgency && (
                      <Image
                        alt="urgent"
                        src="/icons/urgent.svg"
                        height={25}
                        width={25}
                        className="mix-blend-difference invert"
                      />
                    )}
                  </div>
                  <div className="flex gap-2 justify-between items-end text-gray-400 uppercase">
                    <p>Due {task?.dueDate}</p>
                    <p>{task?.done ? "Done" : "To do"}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-end h-full">
              <p className="h4 text-gray-400">No tasks yet.</p>
            </div>
          )}
        </div>
      </Card>

      {open && (
        <AnimatePresence mode="wait">
          <Task id={task} key="task" setOpen={setOpen} />
        </AnimatePresence>
      )}

      {open && (
        <AnimatePresence mode="wait">
          <div
            key="overlay"
            className="fixed top-0 left-0 right-0 bottom-0 z-[25] backdrop-blur-sm bg-[#21222d90]"
          />
        </AnimatePresence>
      )}
    </>
  );
}
