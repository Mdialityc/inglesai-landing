import FeatureCard from "./components/FeatureCard";
import { features } from "./lib/featuresData";

export default function Features() {
  return (
    <section className="py-16 px-4 flex flex-col">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl  mb-4">
          La metodología de siempre, con la innovación de la
        </h2>
        <p className="text-3xl md:text-4xl font-bold">
          Inteligencia Artificial.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </section>
  );
}
