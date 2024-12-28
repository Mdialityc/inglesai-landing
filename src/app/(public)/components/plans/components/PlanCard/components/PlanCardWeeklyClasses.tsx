import React from "react";
import { WeeklyClass } from "../../../lib/number-classes-week";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
interface Props {
  weeklyClasses: WeeklyClass[];
  isRecommended: boolean;
}

export default function PlanCardWeeklyClasses({
  isRecommended,
  weeklyClasses,
}: Props) {
  return (
    <div className="mb-6">
      <p className="mb-2">Número de clases por semana:</p>
      <div className="w-full">
        <Select>
          <SelectTrigger className="w-full text-sm xs:text-lg">
            <SelectValue placeholder="Selecciona un plan de clases" />
          </SelectTrigger>
          <SelectContent
            className={cn(
              "w-full rounded-lg p-2",
              isRecommended
                ? "bg-white text-secondary"
                : "bg-blue-50 text-gray-900"
            )}
          >
            <SelectGroup>
              <SelectLabel className="text-sm xs:text-lg">
                Número de clases por semana
              </SelectLabel>
              {weeklyClasses.map((weeklyClass, index) => (
                <SelectItem
                  className="text-sm xs:text-lg"
                  key={index}
                  value={weeklyClass.value.toString()}
                >
                  {weeklyClass.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
