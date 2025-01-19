import { Product, Sale, Expense } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Prayer Cap (White)",
    category: "prayer-caps",
    price: 499,
    stock: 150,
    minStock: 50,
    description: "High-quality white prayer cap",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Classic Black Cap",
    category: "prayer-caps",
    price: 399,
    stock: 100,
    minStock: 30,
    description: "Classic black prayer cap",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const sales: Sale[] = [
  {
    id: "1",
    productId: "1",
    quantity: 50,
    totalAmount: 24950,
    customerName: "Ahmed Khan",
    status: "completed",
    paymentMethod: "cod",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    productId: "2",
    quantity: 30,
    totalAmount: 11970,
    customerName: "Muhammad Ali",
    status: "pending",
    paymentMethod: "cash",
    createdAt: new Date().toISOString(),
  },
];

export const expenses: Expense[] = [
  {
    id: "1",
    amount: 25000,
    category: "overhead",
    description: "Office Rent",
    date: new Date().toISOString(),
    status: "approved",
  },
  {
    id: "2",
    amount: 15000,
    category: "marketing",
    description: "Facebook Ads",
    date: new Date().toISOString(),
    status: "pending",
  },
];