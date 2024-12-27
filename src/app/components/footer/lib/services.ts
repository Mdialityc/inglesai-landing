interface Service {
  name: string;
  path: string;
}

export const services: Service[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contacto",
    path: "/contact",
  },
  {
    name: "Cursos",
    path: "/courses",
  },
];
