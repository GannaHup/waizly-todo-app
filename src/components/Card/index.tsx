import { useRouter } from "next/navigation";

import Icon from "@/components/Icons";
import Text from "@/components/Text";
import { Task, useTasksStore } from "@/stores/tasks";
import { dateTime } from "@/utils/dateTime";

interface CardProps extends Task {
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ onDelete, ...props }) => {
  const router = useRouter();
  const { setSelectedTask } = useTasksStore();
  const date = props.created_date && dateTime.getDate(props.created_date);

  const handleDeleteTask = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSelectedTask(props);
    onDelete();
  };

  const handleSeeDetail = () => {
    router.push(`/detail/${props.id}`);
  };

  const handleEditTask = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    router.push(`/edit/${props.id}`);
  };

  return (
    <div
      className="relative h-[180px] flex flex-col justify-between p-4 rounded-lg transform hover:scale-105 duration-700 shadow-md hover:shadow-blue-300/40 cursor-pointer"
      onClick={handleSeeDetail}
    >
      {props.is_done && (
        <div className="bg-pure-cyan px-3 py-1 rounded-l-full max-w-max absolute top-0 right-0">
          <Text variant="xsmall" className="text-white">
            Done
          </Text>
        </div>
      )}

      <div className="flex flex-col gap-2 ">
        <Text variant="title">{props.title}</Text>
        <Text
          variant="xsmall"
          className="text-thunder overflow-hidden line-clamp-3 whitespace-pre-line"
        >
          {props.description}
        </Text>
      </div>
      <div className="flex justify-between items-center">
        <Text variant="xsmall" className="mt-3 text-lighthouse">
          {date}
        </Text>
        <div className="flex gap-2">
          <div
            className="p-2 cursor-pointer hover:bg-red-300/20 max-w-max rounded-full"
            onClick={handleDeleteTask}
          >
            <Icon name="trash" color="#DD6464" />
          </div>
          <div
            className="p-2 cursor-pointer hover:bg-green-300/20 max-w-max rounded-full"
            onClick={handleEditTask}
          >
            <Icon name="pencil" color="#37AE97" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
