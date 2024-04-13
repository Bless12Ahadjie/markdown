
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

  export interface CustomCodeProps {
    node: React.ReactNode;
    className: string;
    children: React.ReactNode;
    inline: React.ReactNode;
  }