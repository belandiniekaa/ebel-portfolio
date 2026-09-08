import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TechnicalWritingSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedDocModal, setSelectedDocModal] = useState(null);
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    // Data dokumentasi teknis menggunakan foto dari folder public/images/projects/
const techDocs = [
    {
        id: 1,
        title: "HMIF Inventory System",
        project: "HMIF Inventory",
        category: "Inventory & Loan Management",
        desc: "Perancangan DFD Level 0–2, ERD, dokumen SRS & URS, serta modul penggunaan aplikasi.",
        fullDesc: "Dokumentasi analisis dan perancangan sistem manajemen inventaris HMIF Unsoed. Mencakup pemodelan aliran data, perancangan struktur basis data, dokumentasi kebutuhan sistem melalui SRS dan URS, serta panduan penggunaan aplikasi.",
        tags: ["DFD Level 0–2", "ERD", "SRS", "URS", "Modul Penggunaan"],
        images: [
            "/images/projects/proj4_1.png",
            "/images/projects/proj4_2.png",
            "/images/projects/proj4_3.png",
            "/images/projects/proj4_4.png",
            "/images/projects/proj4_5.png"
        ]
    },
    {
        id: 2,
        title: "Sign Wave (BISINDO App)",
        project: "Sign Wave",
        category: "EdTech Platform",
        desc: "Perancangan flowchart, use case, sequence diagram, activity diagram, serta modul penggunaan.",
        fullDesc: "Dokumentasi analisis dan perancangan untuk platform pembelajaran Bahasa Isyarat Indonesia (BISINDO). Mencakup pemodelan alur proses dan interaksi pengguna melalui flowchart serta UML untuk mendukung perancangan fitur dan struktur sistem.",
        tags: ["Flowchart", "Use Case", "Sequence Diagram", "Activity Diagram", "Modul Penggunaan"],
        images: [
            "/images/projects/proj2_1.png",
            "/images/projects/proj2_2.png",
            "/images/projects/proj2_4.png"
        ]
    },
    {
        id: 3,
        title: "DPRD Work Hub Platform",
        project: "DPRD Work Hub",
        category: "Executive & Legislative Hub",
        desc: "Dokumentasi analisis dan perancangan sistem meliputi flowchart, use case, activity, model data konseptual, class diagram, wireframe, dan modul penggunaan.",
        fullDesc: "Dokumentasi analisis dan perancangan platform operasional Sekretariat DPRD Ciamis. Mencakup pemodelan proses dan struktur sistem, perancangan data, desain antarmuka melalui wireframe, serta dokumentasi operasional untuk mendukung pengembangan dan penggunaan sistem.",
        tags: [
            "Flowchart",
            "Use Case",
            "Activity Diagram",
            "Model Data Konseptual",
            "Class Diagram",
            "Wireframe",
            "Modul Penggunaan"
        ],
        images: [
            "/images/projects/proj1_1.png",
            "/images/projects/proj1_4.png",
            "/images/projects/proj1_5.png"
        ]
    }
];

    const currentDoc = techDocs[activeIndex];

    const getTagStyle = (tag) => {
        if (tag.includes('Diagram') || tag.includes('Use Case') || tag.includes('Activity') || tag.includes('Class') || tag.includes('Sequence')) {
            return { bg: '#fbf3ff', text: '#6b21a8', border: '#d8b4fe' };
        } else if (tag.includes('SRS') || tag.includes('URS') || tag.includes('DFD') || tag.includes('ERD') || tag.includes('Flowchart') || tag.includes('Model')) {
            return { bg: '#d6def5', text: '#1e1b4b', border: '#a0bdf0' };
        } else {
            return { bg: '#f1cadc', text: '#831843', border: '#f472b6' };
        }
    };

    const openModal = (doc) => {
        setSelectedDocModal(doc);
        setActiveImgIndex(0);
    };

    const nextModalImage = () => {
        if (selectedDocModal) {
            setActiveImgIndex(prev => (prev === selectedDocModal.images.length - 1 ? 0 : prev + 1));
        }
    };

    const prevModalImage = () => {
        if (selectedDocModal) {
            setActiveImgIndex(prev => (prev === 0 ? selectedDocModal.images.length - 1 : prev - 1));
        }
    };

    return (
        <section id="technical-writing" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto py-24">
            
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
            >
                <span style={{ color: '#a0bdf0' }} className="font-mono text-xs font-black uppercase tracking-[0.25em] block mb-1">
                    07 / TECHNICAL WRITING & SYSTEM DESIGN
                </span>
                <h2 style={{ color: '#1e1b4b' }} className="font-display text-3xl md:text-4xl font-black tracking-tight">
                    Software engineering documentation.
                </h2>
            </motion.div>

            {/* SPLIT LAYOUT: KIRI 3 CARD KECIL, KANAN CARD BESAR */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* SISI KIRI: 3 CARD KECIL PILIHAN */}
                <div className="lg:col-span-4 flex flex-col justify-between gap-3">
                    {techDocs.map((doc, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <motion.div
                                key={doc.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                onClick={() => setActiveIndex(index)}
                                style={{
                                    borderColor: isActive ? '#1e1b4b' : '#e2e8f0',
                                    backgroundColor: isActive ? '#fbf3ff' : '#ffffff'
                                }}
                                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer shadow-xs hover:border-[#1e1b4b] flex items-center justify-between group flex-1 ${isActive ? 'ring-2 ring-[#1e1b4b]/20 shadow-md' : ''}`}
                            >
                                <div className="pr-3">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="font-mono text-[9px] font-bold text-slate-400">
                                            0{index + 1}
                                        </span>
                                        <span style={{ color: '#1e1b4b' }} className="font-mono text-[9px] font-bold uppercase tracking-wider">
                                            {doc.project}
                                        </span>
                                    </div>
                                    <h4 style={{ color: '#1e1b4b' }} className="font-display font-bold text-sm md:text-base group-hover:text-[#a0bdf0] transition-colors line-clamp-1">
                                        {doc.title}
                                    </h4>
                                    <p className="font-sans text-[11px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                                        {doc.desc}
                                    </p>
                                </div>

                                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs transition-colors shrink-0 ${isActive ? 'bg-[#1e1b4b] text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-[#1e1b4b] group-hover:text-white'}`}>
                                    {isActive ? '●' : '>'}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* SISI KANAN: CARD BESAR UTAMA */}
                <div className="lg:col-span-8 bg-white rounded-[2.5rem] border border-slate-200 p-6 md:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#f1cadc]/20 rounded-full blur-2xl pointer-events-none"></div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentDoc.id}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full"
                        >
                            {/* Sisi Kiri Card Besar: Foto Preview Cuplikan */}
                            <div className="md:col-span-5 w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner relative">
                                <img 
                                    src={currentDoc.images[0]} 
                                    alt={currentDoc.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2.5 left-2.5">
                                    <span style={{ color: '#1e1b4b', backgroundColor: '#d6def5' }} className="font-mono text-[8px] font-bold px-2.5 py-1 rounded-full border border-[#a0bdf0] shadow-sm">
                                        {currentDoc.category}
                                    </span>
                                </div>
                            </div>

                            {/* Sisi Kanan Card Besar: Teks, Tag Berwarna, & Tombol Modal */}
                            <div className="md:col-span-7 flex flex-col justify-between h-full">
                                <div>
                                    <span style={{ color: '#a0bdf0' }} className="font-mono text-[10px] font-bold uppercase tracking-widest block mb-0.5">
                                        Project: {currentDoc.project}
                                    </span>
                                    <h3 style={{ color: '#1e1b4b' }} className="font-display font-bold text-xl md:text-2xl mb-2">
                                        {currentDoc.title}
                                    </h3>
                                    <p style={{ color: '#334155' }} className="font-sans text-xs md:text-sm leading-relaxed font-medium mb-4 line-clamp-3">
                                        {currentDoc.fullDesc}
                                    </p>

                                    {/* Tag Jenis Diagram & Dokumen dengan Warna Berbeda */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {currentDoc.tags.map(tag => {
                                            const style = getTagStyle(tag);
                                            return (
                                                <span 
                                                    key={tag}
                                                    style={{ backgroundColor: style.bg, color: style.text, borderColor: style.border }}
                                                    className="text-[9px] font-mono font-bold px-2.5 py-1 rounded-md border shadow-xs"
                                                >
                                                    #{tag}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                    <span className="font-mono text-[10px] text-slate-500 font-bold">Secure Internal Preview</span>
                                    <button 
                                        onClick={() => openModal(currentDoc)}
                                        className="px-5 py-2.5 bg-[#1e1b4b] text-white rounded-full font-display font-bold text-xs uppercase tracking-wider hover:bg-black transition-all shadow-md cursor-pointer inline-flex items-center gap-1.5"
                                    >
                                        <span>Lihat Cuplikan Diagram ↗</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            {/* MODAL PREVIEW SCREENSHOT DIAGRAM */}
            <AnimatePresence>
                {selectedDocModal && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedDocModal(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] border border-slate-200 max-w-2xl w-full p-6 md:p-8 shadow-2xl relative overflow-hidden"
                        >
                            <button 
                                onClick={() => setSelectedDocModal(null)}
                                className="absolute top-5 right-5 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#1e1b4b] hover:text-white transition-colors z-20 font-bold cursor-pointer text-xs"
                            >
                                ✕
                            </button>

                            <span style={{ color: '#a0bdf0' }} className="font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">
                                {selectedDocModal.project} · ARSIP DIAGRAM & DOKUMEN
                            </span>
                            <h3 style={{ color: '#1e1b4b' }} className="font-display font-black text-xl mb-4">
                                {selectedDocModal.title}
                            </h3>

                            {/* Viewer Gambar Utama dengan Tombol Panah <> */}
                            <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative mb-4 shadow-inner">
                                <img 
                                    src={selectedDocModal.images[activeImgIndex]} 
                                    alt="Diagram Preview" 
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                                {selectedDocModal.images.length > 1 && (
                                    <>
                                        <button 
                                            onClick={prevModalImage}
                                            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10 cursor-pointer"
                                        >
                                            ‹
                                        </button>
                                        <button 
                                            onClick={nextModalImage}
                                            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10 cursor-pointer"
                                        >
                                            ›
                                        </button>

                                        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full z-10">
                                            <span className="font-mono text-[9px] text-white font-bold">
                                                {activeImgIndex + 1} / {selectedDocModal.images.length}
                                            </span>
                                            <div className="flex gap-1">
                                                {selectedDocModal.images.map((_, i) => (
                                                    <span 
                                                        key={i} 
                                                        className={`h-1 rounded-full transition-all ${activeImgIndex === i ? 'w-3 bg-white' : 'w-1 bg-white/50'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            <p className="font-sans text-xs text-slate-500 font-medium mb-5">
                                Cuplikan visualisasi perancangan sistem dan arsitektur untuk menjaga kerahasiaan dokumen penuh instansi.
                            </p>

                            <div className="flex justify-end pt-3 border-t border-slate-100">
                                <button 
                                    onClick={() => setSelectedDocModal(null)}
                                    className="px-5 py-2 bg-[#1e1b4b] text-white rounded-full font-display font-bold text-xs uppercase tracking-wider hover:bg-black transition-all shadow-sm cursor-pointer"
                                >
                                    Tutup
                                </button>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}