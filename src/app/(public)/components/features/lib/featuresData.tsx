import LearnWithoutFear from "@/components/assets/learn-without-fear";
import MultimediaMaterials from "@/components/assets/multimedia-materials";
import OrganizedCourses from "@/components/assets/organized-courses";
import PersonalizedTutors from "@/components/assets/personalized-tutors";
import { Feature } from "@/lib/types/feature";

export const features: Feature[] = [
  {
    title: "Cursos organizados",
    description:
      "Cada lección cubre las 5 competencias: speaking, writing, listening, writing y grammar.",
    image: <OrganizedCourses />,
  },
  {
    title: "Tutores personalizados",
    description:
      "Configura tus agentes para aprender inglés según tus objetivos: Preparación de exámenes, de negocio, médico, etc...",
    image: <PersonalizedTutors />,
  },
  {
    title: "Materiales multimedia 3.0",
    description:
      "El contenido didáctico de nuestros cursos ha sido generado por nuestros Agentes IA y supervisado por nuestros profesores expertos.",
    image: <MultimediaMaterials />,
  },
  {
    title: "Aprende sin miedo",
    description:
      "La timidez al hablar inglés puede ser uno de los mayores desafíos para muchos aprendices. Rompe esa barrera gracias a la I.A.",
    image: <LearnWithoutFear />,
  },
  {
    title: "Entrénate sin límite",
    description:
      "Prepara FCE con Inteligencia Artificial a través de los múltiples ejercicios evaluados por nuestros «Agentes»",
    image: <OrganizedCourses />,
  },
];
