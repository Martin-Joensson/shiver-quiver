import sharks from "../data/shark-types.json";
import type { SharkData, SharkType } from "../types/shark-types";

interface AttributesRowProps {
  type: SharkType;
}

const sharkData = sharks as SharkData;

export const AttributesRow = ({ type }: AttributesRowProps) => {
  const data = sharkData.types[type];

  const attributes = [
    { label: "Armor", value: data.armor },
    { label: "Speed", value: data.speed },
    { label: "Actions", value: data.actions },
    { label: "Ranged Attack", value: data.ranged_attack },
    { label: "Melee Attack", value: data.melee_attack },
  ];

  return (
    <div className="flex gap-2 ">
      {attributes.map((attribute) => (
        <div className="bg-teal-800 rounded-lg p-2  max-w-20">
          <p key={attribute.label} className="overflow-hidden text-nowrap text-sm">
            {attribute.label}:
          </p>
          <p className="bg-teal-900 rounded-lg p-2 text-3xl">{attribute.value}</p>
        </div>
      ))}
    </div>
  );
};
