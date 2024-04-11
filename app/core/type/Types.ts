import { ReactElement, ReactSVGElement } from "react";

export type btns = {
    name?: string;
    style?: React.CSSProperties;
    className?: string;
    
}
export interface Document {
    id: number;
    createdAt: string;
    name: string;
    content: string;
  }