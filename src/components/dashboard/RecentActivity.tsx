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
    description: "New order: 50x Premium Prayer Caps (White)",
    timestamp: "2 minutes ago",
  },
  {
    id: 2,
    type: "inventory",
    description: "Low stock alert: Classic Black Caps (Size L)",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    type: "delivery",
    description: "COD Payment received: Order #1234",
    timestamp: "3 hours ago",
  },
  {
    id: 4,
    type: "packaging",
    description: "Premium gift boxes running low",
    timestamp: "5 hours ago",
  },
];

export function RecentActivity({ className }: RecentActivityProps) {
  return (
    <Card className={cn("", className)}>
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