"use client";
import { IdTypeTask } from "@/app/_utils/types";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Task({ id, setOpen }: IdTypeTask) {
  const tasks = useSelector((state: RootState) => state.tasks.tasksSlice);
  let actualTask = tasks.find((task) => task.id === id);
  console.log(actualTask);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[30] flex justify-center items-center py-[5lvh] px-5">
      <div className="card max-w-3xl flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <p className="h2">{actualTask?.title}</p>
          <button className="btn" onClick={() => setOpen(false)}>
            close
          </button>
        </div>
        <div>
          <p>Title</p>
          <p>{actualTask?.title}</p>
        </div>
        <div>
          <p>Created</p>
          <p>{actualTask?.createdAt}</p>
        </div>
        <div>
          <p>Due Date</p>
          <p>{actualTask?.dueDate}</p>
        </div>
        <div>
          <p>Is Urgent</p>
          <p>{actualTask?.urgency ? "Yes" : "No"}</p>
        </div>
        <div>
          <p>Description</p>
          <p>{actualTask?.description}</p>
        </div>
      </div>
    </div>
  );
}
