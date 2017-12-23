import { PerkType } from './perk-type';

export interface Perk {

    id: number;
    name: string;
    description: string;
    perk_type: PerkType;

}
