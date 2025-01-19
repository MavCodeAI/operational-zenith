import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ExpenseForm } from "@/components/expenses/ExpenseForm";
import { ExpenseList } from "@/components/expenses/ExpenseList";
import { DollarSign, TrendingDown, Receipt, PieChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Expense } from "@/types";

const mockExpenses: Expense[] = [
  {
    id: "1",
    date: "2024-03-15",
    category: "overhead",
    description: "Office Rent",
    amount: 25000,
    status: "approved"
  },
  {
    id: "2",
    date: "2024-03-14",
    category: "marketing",
    description: "Facebook Ads",
    amount: 15000,
    status: "pending"
  },
  {
    id: "3",
    date: "2024-03-13",
    category: "salary",
    description: "Staff Salaries",
    amount: 45000,
    status: "pending"
  },
];

const Expenses = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Expense Tracking</h1>
          <p className="text-muted-foreground">
            Monitor and manage your business expenses.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Expenses"
            value="PKR 85,231"
            description="This month"
            icon={DollarSign}
          />
          <StatCard
            title="Monthly Change"
            value="-5.2%"
            description="Compared to last month"
            icon={TrendingDown}
            trend="down"
          />
          <StatCard
            title="Pending Bills"
            value="12"
            description="Need attention"
            icon={Receipt}
          />
          <StatCard
            title="Top Category"
            value="Overhead"
            description="35% of expenses"
            icon={PieChart}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Add New Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <ExpenseForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <ExpenseList expenses={mockExpenses} />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Expenses;