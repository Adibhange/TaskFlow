import { CalendarIcon, LayoutDashboardIcon, UsersIcon } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const features: Feature[] = [
  {
    title: "Unified Dashboard with Multiple Views",
    description:
      "Manage your tasks your way with TaskFlow's Dashboard. Switch seamlessly between Kanban, Table, and Calendar views to organize, prioritize, and track your workflow.",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Seamless Team Collaboration",
    description:
      "Work together effortlessly with TaskFlow. Assign tasks, leave comments, and track progress in real-time. Keep your team aligned and productive, no matter where they are.",
    icon: UsersIcon,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively with TaskFlow. Break down projects into manageable tasks, set deadlines, and ensure your team stays focused on delivering value.",
    icon: CalendarIcon,
  },
];
