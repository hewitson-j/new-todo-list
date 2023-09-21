export interface Task {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  dueDate?: Date;
  priority?: string;
  reminderDateTime?: Date;
  location?: string;
  tags?: string[];
  projectId?: string;
}

export type Tasks = Task[];
