"use client";
import { Task } from "@/app/_utils/types";
import { FeedbackContext, useFeedbackContext } from "@/context/Feedback";
import { addTask } from "@/lib/tasks/tasksSlice";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

export default function CreateTask() {
  //set up input fields
  const [input, setInput] = useState<Task>({
    id: uuid(),
    title: "",
    description: "",
    createdAt: new Date().toDateString().toString(),
    dueDate: "",
    urgency: true,
    done: false,
    tags: [],
  });

  const { id, title, description, createdAt, dueDate, urgency, done, tags } =
    input;

  //get dispatch to use task methods and context to set feesback
  const dispatch = useDispatch();
  const context = useFeedbackContext();
  if (!context) {
    throw new Error("FeedbackContext must be used within a FeedbackProvider");
  }
  const { feedback, setFeedback } = context;

  //handle submit
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

    const trimmedTags = tags
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
    const actualInput: Task = {
      ...input,
      tags: trimmedTags,
    };

    dispatch(addTask(actualInput));
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2 w-full flex-col sm:flex-row">
          <input
            required
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
          <input
            required
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setInput({ ...input, dueDate: e.target.value })}
          />
        </div>
        <textarea
          required
          className="resize-none"
          id="description"
          placeholder="Description"
          rows={5}
          value={description}
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
        <input
          required
          id="tags"
          type="text"
          placeholder="Add tags separated by comma"
          value={tags}
          onChange={(e) =>
            setInput({
              ...input,
              tags: e.target.value.split(","),
            })
          }
        />
        <div className="flex gap-2 w-full justify-between items-center">
          <div className="flex items-baseline gap-2">
            <input
              id="urgency"
              type="checkbox"
              className="w-auto"
              checked={urgency}
              onChange={(e) =>
                setInput({ ...input, urgency: e.target.checked })
              }
            />
            <p>Urgent</p>
          </div>
          <button type="submit" className="btn">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
