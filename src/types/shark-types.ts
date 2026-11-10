export type SharkAttributes = {
  speed: number;
  armor: number;
  actions: number;
  ranged_attack: number;
  melee_attack: number;
};

export type SharkType = "pup" | "bull" | "veteran" | "mech";

export type SharkData = {
  types: Record<SharkType, SharkAttributes>;
};
