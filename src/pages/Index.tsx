import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import {
  DollarSign,
  Package,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your business.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$45,231.89"
            description="+20.1% from last month"
            icon={DollarSign}
            trend="up"
          />
          <StatCard
            title="Sales"
            value="2,345"
            description="+15% from last month"
            icon={ShoppingCart}
            trend="up"
          />
          <StatCard
            title="Active Products"
            value="12,234"
            description="23 low stock items"
            icon={Package}
          />
          <StatCard
            title="Profit Margin"
            value="25%"
            description="+2.5% from last month"
            icon={TrendingUp}
            trend="up"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <RecentActivity className="lg:col-span-2" />
        </div>
      </div>
    </Layout>
  );
};

export default Index;