export const Priorities = {
  High: 1,
  Mid: 2,
  Low: 3
} as const;

type Priority = typeof Priorities[keyof typeof Priorities];

export const PriorityNames = {
  [Priorities.High]: "高",
  [Priorities.Mid]: "中",
  [Priorities.Low]: "低"
} as const;

export interface TodoItem {
  id: number,
  title: string,
  priority: Priority
}