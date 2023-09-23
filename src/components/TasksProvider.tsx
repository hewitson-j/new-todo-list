import { ReactNode, createContext, useContext, useState } from "react";
import { Task, Tasks } from "./TaskEntries";

const TaskContext = createContext<{
  tasks?: Tasks;
  addTask?: (newTask: Task) => void;
  removeTaskById?: (taskId: Task["id"]) => void;
}>({});

// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
  return useContext(TaskContext);
}

function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Tasks>([]);

  function addTask(newTask: Task) {
    setTasks([...tasks, newTask]);
  }

  function removeTaskById(taskId: Task["id"]) {
    // Filter out item by id
    const tasksToKeep = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(tasksToKeep);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTaskById,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TasksProvider;
