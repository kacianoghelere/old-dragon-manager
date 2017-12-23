export interface Weapon {
  id: number;
  name: string;
  description: string;
  initiative: number;
  ranged: boolean;
  range: number;
  damage: number;
  weight: number;
  price: number;
  alignment_id: number;
  dice_id: number;
  material_type_id: number;
  origin_id: number;
  user_id: number;
  weapon_type_id: number;
}
