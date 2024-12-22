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
import InglesaiLogo from "../assets/inglesai-logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <InglesaiLogo />
          </Link>

          {/* Navigation Links - Desktop */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="hidden md:flex gap-6 text-xl">
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

          {/* Mobile Menu Button */}
          <div className="flex gap-2">
            <Button asChild className="bg-secondary text-lg" size={"lg"}>
              <Link href="/login">Login</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-secondary"
            >
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
