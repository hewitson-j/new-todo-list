import { ReactNode, createContext, useContext, useState } from "react";
import { TaskType, Tasks } from "./Task";

const TaskContext = createContext<{
  tasks?: Tasks;
  addTask?: (newTask: TaskType) => void;
  removeTaskById?: (taskId: TaskType["id"]) => void;
  updateTaskById?: (taskId: TaskType["id"], updatedTask: TaskType) => void;
  filterCompletedTasks?: () => number;
}>({});

// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
  return useContext(TaskContext);
}

function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Tasks>([]);

  function addTask(newTask: TaskType) {
    setTasks([...tasks, newTask]);
  }

  function filterCompletedTasks() {
    const completedTasks = [...tasks].filter((task) => {
      return task.isCompleted == true;
    });
    return completedTasks.length;
  }

  function removeTaskById(taskId: TaskType["id"]) {
    // Filter out item by id
    const tasksToKeep = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(tasksToKeep);
  }

  function updateTaskById(taskId: TaskType["id"], updatedTask: TaskType) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return updatedTask;
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTaskById,
        updateTaskById,
        filterCompletedTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TasksProvider;
