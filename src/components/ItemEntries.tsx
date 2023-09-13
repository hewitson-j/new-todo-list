interface TodoItem {
  title: string;
  description?: string;
  isCompleted: boolean;
  dueDate?: Date;
  priority?: "low" | "normal" | "high";
  reminderDateTime?: Date;
  location?: string;
  tags?: string[];
  projectId?: string;
}

const itemEntries: TodoItem[] = [
  {
    title: "Item 1",
    description: "This is a default item.",
    isCompleted: false,
    dueDate: new Date(Date.now()),
    priority: undefined,
    reminderDateTime: undefined,
    location: undefined,
    tags: [],
    projectId: undefined,
  },
  {
    title: "Item 2",
    description: "This is a default item.",
    isCompleted: false,
    dueDate: new Date(Date.now()),
    priority: undefined,
    reminderDateTime: undefined,
    location: undefined,
    tags: [],
    projectId: undefined,
  },
  {
    title: "Item 3",
    description: "This is a default item.",
    isCompleted: false,
    dueDate: new Date(Date.now()),
    priority: undefined,
    reminderDateTime: undefined,
    location: undefined,
    tags: [],
    projectId: undefined,
  },
  {
    title: "Item 4",
    description: "This is a default item.",
    isCompleted: false,
    dueDate: new Date(Date.now()),
    priority: undefined,
    reminderDateTime: undefined,
    location: undefined,
    tags: [],
    projectId: undefined,
  },
];

export default itemEntries;
