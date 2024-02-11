"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import EmptyState from "@/components/EmptyState";
import Icon from "@/components/Icons";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Text from "@/components/Text";
import Textarea from "@/components/Textarea";
import useDisclosure from "@/hooks/useDisclosure";
import { useTasksStore } from "@/stores/tasks";

const EditTask: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure({ open: false });
  const { tasks, updateTask } = useTasksStore();

  const detailTask = tasks.find((task) => task.id === Number(id));

  const [error, setError] = useState({
    title: false,
    description: false,
  });
  const [form, setForm] = useState({
    title: "",
    description: "",
    is_done: false,
  });

  const handleChangeInput = (key: "title" | "description", value: string) => {
    setForm((prevState) => ({ ...prevState, [key]: value }));
    setError((prevState) => ({ ...prevState, [key]: !value }));
  };

  const handleConfirmUpdate = () => {
    if (!form.title) setError((prevState) => ({ ...prevState, title: true }));
    if (!form.description)
      setError((prevState) => ({ ...prevState, description: true }));

    if (detailTask && form.title && form.description) {
      onOpen();
    }
  };

  const handleUpdateTask = () => {
    if (detailTask) {
      updateTask({
        ...detailTask,
        ...form,
        id: Number(id),
        updated_date: new Date(),
      });
      router.push("/");
    }
  };

  useEffect(() => {
    setForm(() => ({
      title: detailTask?.title || "",
      description: detailTask?.description || "",
      is_done: detailTask?.is_done || false,
    }));
  }, [detailTask]);

  if (!detailTask) {
    return (
      <div className="flex justify-center items-center h-screen px-4">
        <EmptyState
          title="Task Not Found"
          description="Sorry, your task was not found. Maybe your task has been deleted or not created yet"
        />
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] flex flex-col gap-7 justify-center mx-auto p-10 max-md:p-4 max-md:gap-4">
      <Modal
        isVisible={isOpen}
        title="Update Confirmation"
        description="Are you sure want to update this task?"
        textButtonPrimary="Update"
        textButtonSecondary="Cancel"
        onClose={onClose}
        onAction={handleUpdateTask}
      />

      <Link
        href="/"
        className="cursor-pointer max-w-max flex flex-row gap-2 items-center hover:bg-blue-300/30 px-3 py-1 rounded-full"
      >
        <Icon name="arrowLeft" />
        <Text variant="regular">Back</Text>
      </Link>
      <Text variant="heading-2">Edit Task</Text>
      <div className="flex flex-col gap-4">
        <Input
          label="Title"
          required
          value={form.title}
          isError={error.title}
          onChange={(e) => handleChangeInput("title", e.currentTarget.value)}
        />
        <Textarea
          label="Description"
          required
          value={form.description}
          isError={error.description}
          onChange={(e) =>
            handleChangeInput("description", e.currentTarget.value)
          }
        />
        <Checkbox
          label="Selesai"
          checked={form.is_done}
          onChecked={(val: boolean) =>
            setForm((prevState) => ({ ...prevState, is_done: val }))
          }
        />

        <Button
          size="regular"
          className="w-full mt-4 max-md:mt-0"
          onClick={handleConfirmUpdate}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditTask;
