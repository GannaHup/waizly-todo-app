"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/Button";
import Icon from "@/components/Icons";
import Input from "@/components/Input";
import Text from "@/components/Text";
import Textarea from "@/components/Textarea";
import { useTasksStore } from "@/stores/tasks";

const AddTask: React.FC = () => {
  const { addTask } = useTasksStore();
  const router = useRouter();
  const [error, setError] = useState({
    title: false,
    description: false,
  });
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleChangeInput = (key: "title" | "description", value: string) => {
    setForm((prevState) => ({ ...prevState, [key]: value }));
    setError((prevState) => ({ ...prevState, [key]: !value }));
  };

  const handleCreateTask = () => {
    if (!form.title) setError((prevState) => ({ ...prevState, title: true }));
    if (!form.description)
      setError((prevState) => ({ ...prevState, description: true }));

    if (form.title && form.description) {
      const id = Date.now();

      addTask({ ...form, id: id, created_date: new Date() });
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col gap-7  justify-center mx-auto p-10 max-md:p-4 max-md:gap-4">
      <Link
        href="/"
        className="cursor-pointer max-w-max flex flex-row gap-2 items-center hover:bg-blue-300/30 px-4 py-1 rounded-full"
      >
        <Icon name="arrowLeft" />
        <Text variant="regular">Back</Text>
      </Link>

      <Text variant="heading-2">Add Task</Text>

      <div className="flex flex-col gap-4">
        <Input
          label="Title"
          isError={error.title}
          required
          onChange={(e) => handleChangeInput("title", e.currentTarget.value)}
        />
        <Textarea
          label="Description"
          isError={error.description}
          required
          onChange={(e) =>
            handleChangeInput("description", e.currentTarget.value)
          }
        />

        <Button
          size="regular"
          className="w-full mt-4 max-md:mt-0"
          onClick={handleCreateTask}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
