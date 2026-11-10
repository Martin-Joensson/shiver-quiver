import { useState } from "react";
import type { SharkType } from "../types/sharks";

type Conditions = {
  burning: boolean;
  poisoned: boolean;
  stunned: boolean;
  stationary: boolean;
  crippled: boolean;
};

interface ConditionsRowProps {
  type: SharkType;
}

export const ConditionsRow = ({ type }: ConditionsRowProps) => {
  const [conditions, setConditions] = useState<Conditions>({
    burning: false,
    poisoned: false,
    stunned: false,
    stationary: false,
    crippled: false,
  });

  const attributes = [
    { label: "Burning", key: "burning" },
    { label: "Poisoned", key: "poisoned" },
    { label: "Stunned", key: "stunned" },
    { label: "Stationary", key: "stationary" },
    { label: "Crippled", key: "crippled" },
  ] as const;

  const hiddenConditions: Record<SharkType, (keyof Conditions)[]> = {
    pup: ["crippled"],
    bull: ["crippled"],
    veteran: ["crippled"],
    mech: ["poisoned", "stationary"],
  };

  const visibleAttributes = attributes.filter(
    (attribute) => !hiddenConditions[type].includes(attribute.key),
  );

  const toggleCondition = (key: keyof Conditions) => {
    setConditions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex gap-2">
      {visibleAttributes.map((attribute) => {
        const isActive = conditions[attribute.key];

        return (
          <div
            key={attribute.key}
            onClick={() => toggleCondition(attribute.key)}
            className={`rounded-lg p-2 max-w-20 transition-colors cursor-pointer ${
              isActive ? "bg-teal-800" : "bg-gray-700"
            }`}
          >
            <p className="overflow-hidden text-nowrap text-sm">
              {attribute.label}:
            </p>

            <p
              className={`text-3xl rounded-lg p-2 max-w-20 transition-colors ${
                isActive ? "bg-amber-400" : "bg-gray-700"
              }`}
            >
              {isActive ? "X" : "-"}
            </p>
          </div>
        );
      })}
    </div>
  );
};
