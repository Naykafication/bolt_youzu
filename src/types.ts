export type Room = 'living-room' | 'bedroom' | 'kitchen' | 'home-office' | 'kids-room';

export type Style =
  | 'minimalist'
  | 'modern'
  | 'japanese'
  | 'industrial'
  | 'scandinavian'
  | 'bohemian'
  | 'art-deco'
  | 'mediterranean'
  | 'retro'
  | 'coastal';

export interface RoomData {
  id: Room;
  name: string;
  description: string;
  preview: string;
}

export interface StyleData {
  id: Style;
  name: string;
  description: string;
  image: string;
  features: string[];
}