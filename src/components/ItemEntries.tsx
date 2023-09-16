interface TodoItem {
  id: number;
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
    id: 0,
    title: "Item 1",
    description: "This is a default item.",
    isCompleted: false,
    dueDate: new Date(Date.now()),
    priority: "high",
    reminderDateTime: undefined,
    location: "Office",
    tags: ["Tag 1", "Tag 2"],
    projectId: "Project 1",
  },
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
