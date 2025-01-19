import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  trend?: "up" | "down";
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="flex items-center gap-1 text-xs">
            {trend && (
              <>
                {trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-600" />
                )}
              </>
            )}
            <span
              className={cn("text-muted-foreground", {
                "text-green-600": trend === "up",
                "text-red-600": trend === "down",
              })}
            >
              {description}
            </span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}