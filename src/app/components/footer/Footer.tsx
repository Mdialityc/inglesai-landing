import Link from "next/link";
import { Facebook, Twitter, Youtube } from "lucide-react";
import InglesaiLogoFooter from "@/components/assets/inglesai-logo-footer";
import { guarantees } from "./lib/guarantees";
import { navegations } from "./lib/nagetations";
import { services } from "./lib/services";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Logo and Tagline */}
        <div className="flex flex-col gap-3 mb-12">
          <InglesaiLogoFooter />
          <p className="text-lg">Academia de inglés inteligente.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Guarantees Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Garantías</h3>
            <ul className="space-y-3 text-lg">
              {guarantees.map((guarante, index) => (
                <li key={index}>{guarante}</li>
              ))}
            </ul>
          </div>

          {/* Navegation Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-lg">
              {navegations.map((navegation, index) => (
                <li key={index}>
                  <Link href={navegation.path} className="hover:underline">
                    {navegation.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-lg">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="/" className="hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-200">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-blue-400 flex flex-col md:flex-row justify-between items-center space-y-4 font-bold md:space-y-0">
          <div>
            <p>
              You are not logged in.{" "}
              <Link href="/login" className="underline">
                Log in
              </Link>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p>©inglesai.ai</p>
            <p>inglesai.ai</p>
            <p>info@inglesai.ai</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
