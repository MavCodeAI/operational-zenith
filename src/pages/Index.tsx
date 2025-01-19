import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import {
  DollarSign,
  Package,
  ShoppingCart,
  TrendingUp,
  Box,
  Truck,
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your cap business.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Total Revenue"
            value="PKR 245,231"
            description="+20.1% from last month"
            icon={DollarSign}
            trend="up"
          />
          <StatCard
            title="Total Orders"
            value="345"
            description="+15% from last month"
            icon={ShoppingCart}
            trend="up"
          />
          <StatCard
            title="Active Products"
            value="24"
            description="4 low stock items"
            icon={Package}
          />
          <StatCard
            title="Packaging Stock"
            value="1,234"
            description="Premium boxes: 234"
            icon={Box}
          />
          <StatCard
            title="Pending Deliveries"
            value="45"
            description="23 COD orders"
            icon={Truck}
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