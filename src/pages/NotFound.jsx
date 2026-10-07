import React from 'react'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] font-sans p-4">
      <div className="bg-white border border-slate-200/90 rounded-3xl p-8 md:p-12 shadow-sm max-w-md w-full flex flex-col items-center text-center gap-5">
        
        <span className="text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
          404
        </span>

        <div className="space-y-1.5">
          <h1 className="text-lg md:text-xl font-bold text-slate-900">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-xs md:text-sm font-medium text-slate-500">
            Maaf, halaman yang kamu cari tidak ada atau telah dipindahkan.
          </p>
        </div>

        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 px-5 py-2.5 rounded-xl transition-all duration-200 mt-2"
        >
          ← Kembali ke Home
        </a>

      </div>
    </div>
  )
}

export default NotFound