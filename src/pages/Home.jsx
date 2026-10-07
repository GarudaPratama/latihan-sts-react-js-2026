import React from "react";
import { motion } from "framer-motion";

export const books = [
  { id: 1, name: "Nibanme" },
  { id: 2, name: "Windbreaker" },
  { id: 3, name: "Witch Watch" },
];

function Home() {
  return (
    <div className="flex flex-col gap-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <h1 className="font-semibold text-md">BukuKU</h1>
        <h1 className="font-extrabold text-5xl">List Buku-mu</h1>
        <h1 className="font-semibold text-md text-gray-400 -mt-1">
          Kumpulan buku favorit kamu
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-12"
      >
        <ul className="divide-y divide-[#1f1f23]">
          {books.map((book) => (
            <li key={book.id} className="group">
              <a
                href={`/books/${book.id}`}
                className="flex items-center justify-between py-3.5 text-xs text-[#a1a1aa] hover:text-[#f4f4f2] hover:pl-2 transition-all duration-150 uppercase tracking-widest"
              >
                <span>{book.name}</span>
                <span className="text-[#52525b] group-hover:text-[#f4f4f2] transition-colors">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Home;
