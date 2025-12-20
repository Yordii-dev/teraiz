export interface ProjectCategory {
  id: number;
  name: string;
}
export interface Project {
  id: number;
  title: string;
  category_id: number;
  cover: ImageMetadata; // para la card
  images: ImageMetadata[]; // SOLO para el modal
  description: string;
}
