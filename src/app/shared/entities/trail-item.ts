export interface TrailItem {
  children?: TrailItem[];
  description?: string;
  route?: string;
  title: string;
}
