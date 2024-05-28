"use client";
import { IdTypeTask } from "@/app/_utils/types";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { taskAnimation } from "@/app/_utils/animations";
import {
  deleteTask,
  toggleTaskDone,
  toggleTaskUrgency,
  updateTaskDescription,
  updateTaskDueDate,
  updateTaskTitle,
} from "@/lib/tasks/tasksSlice";

export default function Task({ id, setOpen }: IdTypeTask) {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasksSlice);
  let actualTask = tasks.find((task) => task.id === id);

  return (
    <motion.div
      variants={taskAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-0 left-0 right-0 bottom-0 z-[30] flex justify-center items-center py-[5lvh] px-5"
    >
      <div className="card max-w-3xl flex flex-col gap-8">
        <input
          type="text"
          name="title"
          id="title"
          className="p-0 rounded-none h2"
          style={{ backgroundColor: "transparent" }}
          value={actualTask?.title}
          onChange={(e) =>
            dispatch(
              updateTaskTitle({
                id: actualTask?.id,
                title: e.target.value,
              })
            )
          }
        />
        <textarea
          rows={3}
          name="description"
          id="description"
          placeholder={actualTask?.description}
          className="p-0 rounded-none resize-none"
          style={{ backgroundColor: "transparent" }}
          value={actualTask?.description}
          onChange={(e) =>
            dispatch(
              updateTaskDescription({
                id: actualTask?.id,
                description: e.target.value,
              })
            )
          }
        />
        <div className="flex gap-2">
          {actualTask?.tags?.map((tag, i) => (
            <p key={i} className="text-gray-400">
              #{tag}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-baseline gap-2">
            <p>Created</p>
            <p className="text-gray-400">{actualTask?.createdAt}</p>
          </div>
          <div className="flex justify-between items-baseline gap-2">
            <p>Due Date</p>
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              className="w-auto p-0 rounded-none"
              style={{ backgroundColor: "transparent" }}
              value={actualTask?.dueDate}
              onChange={(e) =>
                dispatch(
                  updateTaskDueDate({
                    id: actualTask?.id,
                    dueDate: e.target.value,
                  })
                )
              }
            />
          </div>
          <div className="flex justify-between items-baseline">
            <p>Is Urgent</p>
            <input
              id="done"
              type="checkbox"
              className="w-auto"
              checked={actualTask?.urgency || false}
              onChange={() => dispatch(toggleTaskUrgency(actualTask?.id))}
            />
          </div>
          <div className="flex justify-between items-baseline">
            <p>Done</p>
            <input
              id="done"
              type="checkbox"
              className="w-auto"
              checked={actualTask?.done || false}
              onChange={() => dispatch(toggleTaskDone(actualTask?.id))}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button className="btn" onClick={() => setOpen(false)}>
            Close
          </button>
          <button
            onClick={() => {
              dispatch(deleteTask(actualTask?.id)), setOpen(false);
            }}
            className="btn"
          >
            Delete Task
          </button>
        </div>
      </div>
    </motion.div>
  );
}
