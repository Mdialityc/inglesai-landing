import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import CourseNavigation from "./courses-navigation/CourseNavigation";
import { courses } from "./courses-navigation/lib/courses";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-button text-2xl font-bold">ingles</span>
            <span className="text-secondary text-2xl">ai</span>
            <span className="text-secondary ml-1">✚</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6 text-xl">
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink>Sobre Nosotros</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink>Contáctanos</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl">
                  Cursos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {courses.map((course) => (
                      <CourseNavigation
                        key={course.title}
                        title={course.title}
                        href={course.href}
                      >
                        {course.description}
                      </CourseNavigation>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Login Button */}
          <div>
            <Button asChild className="bg-secondary">
              <Link href="/login">Login</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-background">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
