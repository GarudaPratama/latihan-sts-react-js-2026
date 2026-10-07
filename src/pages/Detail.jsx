import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { books } from "./Home";
import { motion } from "framer-motion";
import NotFound from "./NotFound";

function Detail() {
  const { id } = useParams();

  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    if (id) {
      const data = books.find((santri) => santri.id == id);
      setCurrentData(data);
    }
  }, [id]);

  if (!currentData) {
    return <NotFound />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 max-w-sm w-full font-sans"
    >
      <a
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 px-4 py-2.5 rounded-xl transition-all duration-200 w-fit"
      >
        ← Back to Home
      </a>

      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-4 w-full">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3">
          Buku dengan ID :{" "}
          <span className="text-slate-900 font-bold">{currentData?.id}</span>
        </p>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 pt-1">
          Nama Buku:{" "}
          <span className="text-slate-900 font-bold text-base block mt-1 normal-case">
            {currentData?.name}
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export default Detail;
