import { BaseAttribute } from './base-attribute';

export class AttributeModifier {
  id?: number;
  value: number;
  armor_class_mod?: number;
  climb_mod?: number;
  damage_mod?: number;
  followers_mod?: number;
  hitpoints_mod?: number;
  extra_languages_mod?: number;
  learn_magic_mod?: number;
  lockpick_mod?: number;
  extra_spells_1_mod?: number;
  extra_spells_2_mod?: number;
  extra_spells_3_mod?: number;
  extra_spells_4_mod?: number;
  extra_spells_5_mod?: number;
  extra_spells_6_mod?: number;
  extra_spells_7_mod?: number;
  extra_spells_8_mod?: number;
  extra_spells_9_mod?: number;
  melee_attack_mod?: number;
  perception_mod?: number;
  pickpocket_mod?: number;
  protection_mod?: number;
  ranged_attack_mod?: number;
  reaction_mod?: number;
  resurrection_mod?: number;
  sneak_attack_mod?: number;
  stealth_mod?: number;
  surprise_mod?: number;
  traps_mod?: number;
  turn_undead_mod?: string;
  base_attribute?: BaseAttribute;
}
