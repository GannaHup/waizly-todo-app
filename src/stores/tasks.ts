import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Task {
  id: number;
  is_done?: boolean;
  title: string;
  description: string;
  created_date: Date;
  updated_date?: Date;
}

interface TaskStoreProps {
  tasks: Task[];
  selectedTask?: Task;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  setSelectedTask: (task: Task) => void;
}

export const useTasksStore = create<TaskStoreProps>()(
  persist(
    (set) => ({
      tasks: [],
      selectedTask: undefined,

      addTask: (task: Task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      updateTask: (task: Task) =>
        set((state) => ({
          tasks: state.tasks.map((item) => {
            if (item.id === task.id) return task;
            return item;
          }),
        })),

      deleteTask: (id: number) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
          selectedTask: undefined,
        })),

      setSelectedTask: (selectedTask: Task) => set(() => ({ selectedTask })),
    }),
    {
      name: "task",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
