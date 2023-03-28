import { ReactNode } from 'react';

export interface Product {
  id?: number;
  product?: {
    symbol: string;
    icon: ReactNode;
    reserve: string;
  };
  settling?: {
    symbol: string;
    icon: ReactNode;
    reserve: string;
  };
  liquidity: {};
  address?: string;
}
