import React from "react";
import { motion } from "framer-motion";

function FAQ() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4"
    >
      <h1 className="font-semibold text-md">FAQ</h1>
      <h1 className="font-extrabold text-5xl">Pertanyaan yang sering muncul</h1>
      <h1 className="font-semibold text-md text-gray-400 -mt-1">
        Temukan jawaban dari pertanyaan yang sering ditanyakan kepada kami.
      </h1>
    </motion.div>
  );
}

export default FAQ;
