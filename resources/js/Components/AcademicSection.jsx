import { motion } from 'framer-motion';

export default function AcademicSection() {
    return (
        <section id="academic" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto py-24">
            
            {/* Header Section Compact */}
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <span style={{ color: '#a0bdf0' }} className="font-mono text-xs font-black uppercase tracking-[0.25em] block mb-1">
                    01 / ABOUT ME & ACADEMIC
                </span>
                <h2 style={{ color: '#1e1b4b' }} className="font-display text-3xl md:text-4xl font-black tracking-tight">
                    Rooted in academics, driven by building.
                </h2>
            </motion.div>

            {/* Grid Utama Seimbang (6:6) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* KOTAK KIRI: ABOUT ME & GOALS */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="lg:col-span-6 bg-white rounded-[2rem] border border-slate-200 p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#f1cadc]/30 rounded-full blur-2xl pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <span style={{ color: '#f1cadc' }} className="font-mono text-[11px] uppercase tracking-widest font-black mb-2 block">
                            ✦ WHO I AM & GOALS
                        </span>
                        <h3 style={{ color: '#1e1b4b' }} className="font-display font-bold text-xl mb-3">
                            Informatics Graduate <br /> System Analysis & Design
                        </h3>
                        <p style={{ color: '#334155' }} className="font-sans text-xs md:text-sm leading-relaxed font-medium mb-4">
                            Lulusan Informatika Unsoed dengan pengalaman dalam analisis kebutuhan, perancangan sistem, dokumentasi teknis, web development, dan data management. Terbiasa menerapkan pendekatan yang terstruktur dalam menyelesaikan masalah, bekerja secara kolaboratif, serta menjembatani kebutuhan teknis dan operasional. Memiliki ketertarikan untuk berkembang sebagai System Analyst dan Technical Writer.
                        </p>
                        <div className="space-y-2 font-sans text-xs font-semibold" style={{ color: '#1e1b4b' }}>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#a0bdf0]"></span>
                                <span>Aspirasi: System Analysis | Business Process | Technical Documentation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#f1cadc]"></span>
                                <span>Fokus: Requirements Analysis | System Design | UML | Technical Documentation</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="flex items-center gap-2 font-mono text-[11px]" style={{ color: '#334155' }}>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            AVAILABLE FOR OPPORTUNITIES
                        </span>
                        <span className="font-mono text-[10px] text-slate-400">Ciamis, Jawa Barat</span>
                    </div>
                </motion.div>

                {/* KOTAK KANAN: ACADEMIC & THESIS */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-6 bg-white rounded-[2rem] border border-slate-200 p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
                >
                    <div className="absolute bottom-0 right-0 w-36 h-36 bg-[#a0bdf0]/20 rounded-full blur-2xl pointer-events-none"></div>

                    <div>
                        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-5 pb-5 border-b border-slate-100">
                            <div>
                                <span style={{ color: '#64748b' }} className="font-mono text-[10px] font-bold block mb-0.5">DEGREE & HONORS</span>
                                <div style={{ color: '#1e1b4b' }} className="font-display font-black text-3xl md:text-4xl">
                                    3.91 <span style={{ color: '#64748b' }} className="text-base font-normal">/ 4.00</span>
                                </div>
                                <div style={{ color: '#1e1b4b' }} className="font-sans font-bold text-xs mt-1">Informatika (S.Kom) | Universitas Jenderal Soedirman (Unsoed)</div>
                            </div>
                            <span style={{ color: '#1e1b4b', backgroundColor: '#d6def5' }} className="font-mono text-xs font-bold px-3.5 py-1 rounded-full border border-[#a0bdf0] self-start xl:self-auto shrink-0">
                                Graduated in 3.5 Years
                            </span>
                        </div>

                        <div className="relative z-10 mb-4">
                            <span style={{ color: '#a0bdf0' }} className="font-mono text-[10px] uppercase tracking-wider block mb-1 font-black">
                                ✦ UNDERGRADUATE THESIS
                            </span>
                            {/* Judul Skripsi Lengkap Tanpa Line Clamp / Terpotong */}
                            <h4 style={{ color: '#1e1b4b' }} className="font-display font-bold text-sm md:text-base leading-snug">
                                Pengembangan Executive Information System (EIS) Berbasis Business Intelligence untuk Monitoring Kinerja Kelembagaan pada DPRD Kabupaten Ciamis
                            </h4>
                        </div>
                    </div>

                    {/* KEY RESULTS & METRICS (Menonjolkan Hasil & Teknologi) */}
                    <div className="relative z-10 pt-4 border-t border-slate-100">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-2">
                            ✦ SYSTEM METRICS & TECH STACK
                        </span>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl font-mono text-[11px] font-bold text-[#1e1b4b]">
                                13 System Modules
                            </span>
                            <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-xl font-mono text-[11px] font-bold text-emerald-700">
                                95.11% UAT Acceptance
                            </span>
                            <span className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-xl font-mono text-[11px] font-bold text-blue-700">
                                100% Functional Testing
                            </span>
                            <span className="px-3 py-1 bg-purple-50 border border-purple-200 rounded-xl font-mono text-[11px] font-bold text-purple-700">
                                URS · SRS · UML · Laravel · React.js
                            </span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}