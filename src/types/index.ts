export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  minStock: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Sale {
  id: string;
  productId: string;
  quantity: number;
  totalAmount: number;
  customerName: string;
  status: 'pending' | 'completed' | 'cancelled';
  paymentMethod: 'cash' | 'card' | 'cod';
  createdAt: string;
}

export interface Expense {
  id: string;
  amount: number;
  category: string;
  description?: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

export type ExpenseCategory = 'overhead' | 'salary' | 'marketing' | 'packaging' | 'delivery' | 'other';