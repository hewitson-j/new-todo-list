import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { TaskType, Tasks } from "./Task";

const defaultState = {
  showCompletedTasks: false,
};

const TaskContext = createContext<{
  tasks?: Tasks;
  addTask?: (newTask: TaskType) => void;
  removeTaskById?: (taskId: TaskType["id"]) => void;
  updateTaskById?: (taskId: TaskType["id"], updatedTask: TaskType) => void;
  findTaskById?: (taskId: TaskType["id"]) => TaskType | undefined;
  completedTasks?: number;
  showCompletedTasks: boolean;
  toggleShowCompletedTasks?: () => void;
}>(defaultState);

// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
  return useContext(TaskContext);
}

function TasksProvider({ children }: { children: ReactNode }) {
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  // Tasks is retrieved from local storage.
  const [tasks, setTasks] = useState<Tasks>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Upon task addition or update, the new entry is also saved to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  function addTask(newTask: TaskType) {
    setTasks([...tasks, newTask]);
  }

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;

  function removeTaskById(taskId: TaskType["id"]) {
    // Filter out item by id
    const tasksToKeep = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksToKeep);
  }

  function findTaskById(taskId: TaskType["id"]) {
    const task = tasks.find((task) => task.id === taskId);
    return task;
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

  function toggleShowCompletedTasks() {
    setShowCompletedTasks(!showCompletedTasks);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTaskById,
        updateTaskById,
        completedTasks: completedTasksCount,
        findTaskById,
        showCompletedTasks,
        toggleShowCompletedTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TasksProvider;
