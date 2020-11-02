import React, { createContext, ReactNode } from 'react';
import DATA from '../data.json'

export interface SalonProps {
  id: number;
  time: string;
  name: string;
  price: number;
  rating: number;
  noOfReviews: number;
  distance: string;
  openUntil: string;
  website: string;
  description: string;
  isFavorite: boolean;
  image: string;
  address: string;
  postal: string;
  phone: string;
}

export const SalonContext = createContext(DATA);

export default function SalonProvider({ children }: { children: ReactNode }) {
  return <SalonContext.Provider value={DATA}>{children}</SalonContext.Provider>;
}
