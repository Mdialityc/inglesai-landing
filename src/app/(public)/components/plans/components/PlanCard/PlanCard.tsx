import RecommendedLabel from "@/components/assets/recommended-label";
import { WeeklyClass } from "../../lib/number-classes-week";
import InglesaiButton from "@/components/ui/inglesai-button";
import FeaturesList from "./components/FeaturesList";
import PlanCardHeader from "./components/PlanCardHeader";
import PlanCardWeeklyClasses from "./components/PlanCardWeeklyClasses";
import { PlanType } from "../../lib/plans";

interface Props {
  title: string;
  price?: number;
  features: string[];
  variant?: PlanType;
  icon?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  weeklyClasses?: WeeklyClass[];
}

export default function PlanCard({
  title,
  price,
  features,
  variant,
  icon,
  buttonText = "SELECCIONAR PLAN",
  onButtonClick,
  weeklyClasses,
}: Props) {
  const isRecommended = variant === PlanType.RECOMMENDED;

  return (
    <div
      className={` flex flex-col gap-6 relative rounded-3xl ${
        isRecommended ? "bg-secondary text-white" : "bg-white"
      }  p-8 shadow-lg transition-all overflow-hidden`}
    >
      {isRecommended && (
        <div className="absolute -right-1 -top-1 z-10">
          <RecommendedLabel />
        </div>
      )}
      <PlanCardHeader
        title={title}
        price={price}
        isRecommended={isRecommended}
        icon={icon}
      />
      <div className="flex flex-col gap-5 text-sm xs:text-lg">
        <FeaturesList features={features} isRecommended={isRecommended} />
        {weeklyClasses && (
          <PlanCardWeeklyClasses
            weeklyClasses={weeklyClasses}
            isRecommended={isRecommended}
          />
        )}
      </div>

      <InglesaiButton
        variant={isRecommended ? "tertiary" : "secondary"}
        className="w-full h-[44px] xs:h-[54px]  text-sm xs:text-xl"
        action={onButtonClick}
      >
        {" "}
        {buttonText}
      </InglesaiButton>
    </div>
  );
}
