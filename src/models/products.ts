import { Factory } from "./factories";

export interface Product {
  id: number;
  name: string;
  price: number;
  amout: number;
  factory: Factory;
}