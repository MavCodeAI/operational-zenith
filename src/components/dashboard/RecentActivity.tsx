import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RecentActivityProps {
  className?: string;
}

const activities = [
  {
    id: 1,
    type: "sale",
    description: "New sale: Order #1234",
    timestamp: "2 minutes ago",
  },
  {
    id: 2,
    type: "inventory",
    description: "Low stock alert: Product XYZ",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    type: "expense",
    description: "New expense recorded: Office supplies",
    timestamp: "3 hours ago",
  },
];

export function RecentActivity({ className }: RecentActivityProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates from your business</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div>
                <p className="font-medium">{activity.description}</p>
                <p className="text-sm text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}