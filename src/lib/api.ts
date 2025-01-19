import { Product, Sale, Expense } from "@/types";
import { products, sales, expenses } from "./mockData";

// Helper to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Products API
export const getProducts = async () => {
  await delay(1000);
  return [...products];
};

export const getProduct = async (id: string) => {
  await delay(500);
  return products.find(p => p.id === id);
};

export const createProduct = async (product: Omit<Product, "id" | "createdAt" | "updatedAt">) => {
  await delay(1000);
  const newProduct: Product = {
    ...product,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  products.push(newProduct);
  return newProduct;
};

// Sales API
export const getSales = async () => {
  await delay(1000);
  return [...sales];
};

export const createSale = async (sale: Omit<Sale, "id" | "createdAt">) => {
  await delay(1000);
  const newSale: Sale = {
    ...sale,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
  };
  sales.push(newSale);
  return newSale;
};

// Expenses API
export const getExpenses = async () => {
  await delay(1000);
  return [...expenses];
};

export const createExpense = async (expense: Omit<Expense, "id">) => {
  await delay(1000);
  const newExpense: Expense = {
    ...expense,
    id: Math.random().toString(36).substr(2, 9),
  };
  expenses.push(newExpense);
  return newExpense;
};

export const updateExpenseStatus = async (id: string, status: Expense["status"]) => {
  await delay(500);
  const expense = expenses.find(e => e.id === id);
  if (expense) {
    expense.status = status;
    return expense;
  }
  throw new Error("Expense not found");
};