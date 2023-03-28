import { ReactNode } from 'react';

export interface Product {
  id?: number;
  product?: {
    symbol: string;
    icon: ReactNode;
  };
  settling?: {
    symbol: string;
    icon: ReactNode;
  };
  liquidity: {};
  address?: string;
}
