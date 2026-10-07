import React from "react";
import { motion } from "framer-motion";

function Testimony() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4"
    >
      <h1 className="font-semibold text-md">Testimony</h1>
      <h1 className="font-extrabold text-5xl">Our Testimony</h1>
      <h1 className="font-semibold text-md text-gray-400 -mt-1">
        Testimoni dari seluruh pengguna BukuKu di seluruh dunia
      </h1>
    </motion.div>
  );
}

export default Testimony;
