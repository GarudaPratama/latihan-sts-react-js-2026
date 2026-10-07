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
        <motion.ul className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {books.map((book) => (
            <li
              key={book.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
            >
              <a
                href={`/detail/${book.id}`}
                className="flex flex-col justify-between h-32 text-slate-900 no-underline"
              >
                <span className="font-bold text-base md:text-lg text-slate-900 group-hover:text-black transition-colors">
                  {book.name}
                </span>
                <span className="text-xs font-semibold text-slate-900 flex items-center before:content-['Lihat_detail'] before:mr-1.5 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default Home;
