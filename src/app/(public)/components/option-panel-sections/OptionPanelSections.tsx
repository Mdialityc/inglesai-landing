import React, { ReactNode } from "react";
import InglesaiButton from "../../../../components/ui/inglesai-button";

interface Props {
  sectionTitle?: string;
  title?: string;
  subtitle?: string;
  titleButton?: string;
  children: ReactNode;
}

export default function OptionPanelSections({
  sectionTitle,
  title,
  subtitle,
  titleButton,
  children,
}: Props) {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-12 mb-16">
      {sectionTitle && (
        <div className="inline-flex px-6 py-2 bg-[#BFCAF8] text-[#1B2A5D] text-3xl font-medium self-start">
          {sectionTitle}
        </div>
      )}

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          {title && (
            <h1 className="text-4xl md:text-6xl font-bold text-[#1B2A5D]">
              {title}
            </h1>
          )}
          {subtitle && (
            <h2 className="text-2xl md:text-4xl font-semibold text-[#1B2A5D]">
              {subtitle}
            </h2>
          )}
        </div>

        {children}
      </div>
      {titleButton && (
        <InglesaiButton
          className="mt-8 w-full sm:w-[276px] h-[62px]"
          variant="primary"
        >
          {titleButton}
        </InglesaiButton>
      )}
    </div>
  );
}
