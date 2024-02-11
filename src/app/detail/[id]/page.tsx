"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import EmptyState from "@/components/EmptyState";
import Icon from "@/components/Icons";
import Text from "@/components/Text";
import { useTasksStore } from "@/stores/tasks";
import { dateTime } from "@/utils/dateTime";

const DetailTask: React.FC = () => {
  const { id } = useParams();
  const { tasks } = useTasksStore();

  const detailTask = tasks.find((task) => task.id === Number(id));

  if (!detailTask) {
    return (
      <div className="flex justify-center items-center h-screen">
        <EmptyState
          title="Task Not Found"
          description="Sorry, your task was not found. Maybe your task has been deleted or not created yet"
        />
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] flex flex-col gap-5 justify-center mx-auto py-10">
      <Link
        href="/"
        className="cursor-pointer max-w-max flex flex-row gap-2 items-center hover:bg-blue-300/30 px-4 py-1 rounded-full"
      >
        <Icon name="arrowLeft" />
        <Text variant="regular">Back</Text>
      </Link>
      <Text variant="heading-1">{detailTask?.title}</Text>
      <div className="flex flex-col items-end">
        <div className="flex justify-between gap-1">
          <Text variant="xsmall" className="text-gray-500">
            Created at
          </Text>
          <Text variant="xsmall" className="text-gray-500">
            {dateTime.getTime(detailTask?.created_date) || "-"}{" "}
            {dateTime.getDate(detailTask?.created_date) || "-"}
          </Text>
        </div>
        {detailTask?.updated_date && (
          <div className="flex justify-between gap-1">
            <Text variant="xsmall" className="text-gray-500">
              Updated at
            </Text>
            <Text variant="xsmall" className="text-gray-500">
              {dateTime.getTime(detailTask?.updated_date) || "-"}{" "}
              {dateTime.getDate(detailTask?.updated_date) || "-"}
            </Text>
          </div>
        )}
      </div>

      <Text className="whitespace-pre-line">{detailTask?.description}</Text>
    </div>
  );
};

export default DetailTask;
