import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { typesPlans } from "./lib/typesPlans";

export default function Plans() {
  return (
    <div className="flex flex-col gap-16 items-center p-8">
      <p className="text-[#1B2A5D] text-5xl font-bold">Planes</p>

      <Tabs
        defaultValue={typesPlans[0].value}
        className="w-full flex flex-col gap-6 mb-16"
      >
        <TabsList className="flex gap-5 items-center bg-background justify-center w-full">
          {typesPlans.map((typePlan, index) => (
            <TabsTrigger
              key={index}
              value={typePlan.value}
              className="px-4 py-2 text-lg text-gray-500 data-[state=active]:text-button-foreground data-[state=active]:bg-secondary hover:bg-[#EDF4FF] rounded-md transition-colors"
            >
              {typePlan.tabName}
            </TabsTrigger>
          ))}
        </TabsList>
        {typesPlans.map((typePlan, index) => (
          <TabsContent key={index} value={typePlan.value}>
            {typePlan.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
