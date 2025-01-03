"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import InglesaiButton from "@/components/ui/inglesai-button";
import { Ghost } from "lucide-react";
export default function NotFoundContent() {
  return (
    <div className="max-w-md w-full space-y-8 text-center">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex justify-center"
      >
        <Ghost size={100} className="text-secondary" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mt-6 text-9xl font-extrabold text-button">404</h2>
        <h2 className="mt-6 text-3xl font-extrabold">
          ¡Ups! Página no encontrada
        </h2>
      </motion.div>
      <motion.p
        className="mt-2 text-md text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        La página que estás buscando no existe o ha sido movida.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link href="/">
          <InglesaiButton variant="secondary">
            Volver a la Página Principal
          </InglesaiButton>
        </Link>
      </motion.div>
    </div>
  );
}
