"use client";
import { Task } from "@/app/_utils/types";
import { FeedbackContext } from "@/context/Feedback";
import { addTask } from "@/lib/tasks/tasksSlice";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

export default function CreateTask() {
  const { feedback, setFeedback } = useContext(FeedbackContext);
  const dispatch = useDispatch();
  const [input, setInput] = useState<Task>({
    id: uuid(),
    title: "",
    description: "",
    createdAt: new Date().toDateString(),
    dueDate: "",
    urgency: true,
    done: false,
    tags: [],
  });

  const { id, title, description, createdAt, dueDate, urgency, done, tags } =
    input;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      title.trim().length === 0 ||
      !dueDate ||
      description.trim().length === 0
    ) {
      setFeedback("Please fill in all the input fields");
      return;
    }
    dispatch(addTask(input));
    setInput({
      id: "",
      title: "",
      description: "",
      createdAt: "",
      dueDate: "",
      urgency: false,
      done: false,
      tags: [],
    });
    setFeedback("Task added");
  }

  return (
    <div className="flex flex-col justify-between gap-8">
      <p className="h2">Create Your Task</p>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
        <div className="flex gap-2 w-full flex-col sm:flex-row">
          <input
            required
            id="title"
            type="text"
            placeholder="Title"
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
          <input
            required
            id="dueDate"
            type="date"
            value={input.dueDate}
            onChange={(e) => setInput({ ...input, dueDate: e.target.value })}
          />
        </div>
        <textarea
          required
          id="description"
          placeholder="Description"
          rows={5}
          value={input.description}
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
        <input
          required
          id="tags"
          type="text"
          placeholder="Add tags separated by comma"
          value={tags.join(", ")}
          onChange={(e) =>
            setInput({
              ...input,
              tags: e.target.value.split(",").map((tag) => tag.trim()),
            })
          }
        />
        <div className="flex gap-2 w-full justify-between items-center">
          <label htmlFor="urgency" className="flex gap-2">
            <input
              id="urgency"
              type="checkbox"
              checked={input.urgency}
              onChange={(e) =>
                setInput({ ...input, urgency: e.target.checked })
              }
            />
            Urgent
          </label>
          <button type="submit" className="btn">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
