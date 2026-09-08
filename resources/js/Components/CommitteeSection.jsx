import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommitteeSection() {
    const [selectedYear, setSelectedYear] = useState('Semua');
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    // Data 12 Kegiatan (Kepanitiaan, Pengabdian Masyarakat, & KKN)
    const activities = [
        { 
            id: 1, 
            name: "Secretary & PDD – KKN Unsoed Desa Jatilawang", 
            role: "Sekretaris & PDD", 
            year: "Jan 2025 – Feb 2025", 
            yearFilter: "2025",
            desc: "Mengelola administrasi posko, korespondensi desa, serta publikasi, desain, dan dokumentasi visual program pengabdian." 
        },
        { 
            id: 2, 
            name: "Secretary & Public Relations Coordinator – Upgrading HMIF 2025", 
            role: "Koordinator", 
            year: "Apr 2025 – Mei 2025", 
            yearFilter: "2025",
            desc: "Memimpin manajemen administrasi dan komunikasi eksternal selama kegiatan upgrading pengurus harian." 
        },
        { 
            id: 3, 
            name: "Public Relations Coordinator – Maskrab Makrab Informatika 2024", 
            role: "Koordinator", 
            year: "Mei 2024 – Feb 2025", 
            yearFilter: "2024",
            desc: "Mengarahkan strategi komunikasi dan menjadi narahubung utama untuk 200+ mahasiswa baru." 
        },
        { 
            id: 4, 
            name: "Secretary Coordinator – 16th Informatics Anniversary (Dies Natalis)", 
            role: "Koordinator", 
            year: "Mei 2024 – Nov 2024", 
            yearFilter: "2024",
            desc: "Mengelola administrasi acara skala besar (350+ peserta) serta mengawasi 90+ korespondensi formal." 
        },
        { 
            id: 5, 
            name: "Event Coordinator – Training Center", 
            role: "Koordinator", 
            year: "Sep 2024 – Nov 2024", 
            yearFilter: "2024",
            desc: "Merancang dan mengeksekusi program pelatihan kepemimpinan untuk 90+ peserta." 
        },
        { 
            id: 6, 
            name: "Volunteer Educator – Informatika Mengajar HMIF Unsoed", 
            role: "Volunteer", 
            year: "Jun 2024", 
            yearFilter: "2024",
            desc: "Mengedukasi siswa sekolah dasar mengenai pengenalan dasar komputer dan komponen perangkat keras (hardware)." 
        },
        { 
            id: 7, 
            name: "Secretary Coordinator – Maskrab Makrab Informatika 2023", 
            role: "Koordinator", 
            year: "Mei 2023 – Feb 2024", 
            yearFilter: "2023",
            desc: "Menangani operasional administrasi penuh dan manajemen data peserta untuk 120 mahasiswa baru." 
        },
        { 
            id: 8, 
            name: "Public Relations Staff – 3rd Informatics Lustrum", 
            role: "Staf", 
            year: "Mei 2023 – Nov 2023", 
            yearFilter: "2023",
            desc: "Mendukung komunikasi publik dan strategi media sosial untuk mempererat keterlibatan mahasiswa dan alumni." 
        },
        { 
            id: 9, 
            name: "Event Staff – Informatics Workshop", 
            role: "Staf", 
            year: "Agu 2023 – Sep 2023", 
            yearFilter: "2023",
            desc: "Mengoordinasikan eksekusi teknis dan komunikasi pembicara untuk workshop akademik UI/UX." 
        },
        { 
            id: 10, 
            name: "Presidium III – Informatics General Assembly", 
            role: "Presidium", 
            year: "Nov 2022 – Feb 2023", 
            yearFilter: "2022",
            desc: "Memimpin sesi sidang formal dan mendokumentasikan keputusan organisasi secara terstruktur." 
        },
        { 
            id: 11, 
            name: "Public Relations Staff – 14th Informatics Anniversary", 
            role: "Staf", 
            year: "Okt 2022 – Nov 2022", 
            yearFilter: "2022",
            desc: "Membantu pengembangan konten publikasi serta distribusi informasi eksternal." 
        },
        { 
            id: 12, 
            name: "Event Staff – Soedirman Technoporia", 
            role: "Staf", 
            year: "Okt 2022 – Nov 2022", 
            yearFilter: "2022",
            desc: "Bertugas sebagai Master of Ceremony dan mendukung pelaksanaan webinar nasional (150+ peserta)." 
        }
    ];

    // Koleksi 6 Foto Dokumentasi Gabungan
    const galleryImages = [
        "/images/committees/committee-activity-1.jpg",
        "/images/committees/committee-activity-2.jpg",
        "/images/committees/committee-activity-3.jpg",
        "/images/committees/committee-activity-4.jpg",
        "/images/committees/committee-activity-5.jpg",
        "/images/committees/committee-activity-6.jpg",
        "/images/committees/committee-activity-7.jpg"
    ];

    const years = ['Semua', '2025', '2024', '2023', '2022'];
    const filteredActivities = selectedYear === 'Semua' ? activities : activities.filter(a => a.yearFilter === selectedYear);

    const nextImage = () => {
        setActiveImgIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setActiveImgIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    return (
        <section id="activities" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto py-24">
            
            {/* Header & Tombol Lihat Dokumentasi Gabungan */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <span style={{ color: '#a0bdf0' }} className="font-mono text-xs font-black uppercase tracking-[0.25em] block mb-1">
                        05 / ACTIVITIES & COMMITTEES
                    </span>
                    <h2 style={{ color: '#1e1b4b' }} className="font-display text-3xl md:text-4xl font-black tracking-tight">
                        Committees & Event Experiences.
                    </h2>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <span style={{ color: '#1e1b4b', backgroundColor: '#d6def5', borderColor: '#a0bdf0' }} className="font-mono text-[10px] font-bold px-3 py-2 rounded-full border shadow-xs">
                        12 Roles & Contributions
                    </span>
                    <button
                        onClick={() => { setIsGalleryOpen(true); setActiveImgIndex(0); }}
                        className="px-5 py-2.5 rounded-full bg-[#1e1b4b] text-white font-mono text-xs font-bold tracking-wider hover:bg-black transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                        <span>📂 Lihat Dokumentasi Gabungan</span>
                    </button>
                </div>
            </div>

            {/* Filter Tahun */}
            <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
                <span className="font-mono text-xs text-slate-400 mr-2 font-bold uppercase">Filter Tahun:</span>
                {years.map(year => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        style={{
                            backgroundColor: selectedYear === year ? '#1e1b4b' : '#ffffff',
                            color: selectedYear === year ? '#ffffff' : '#64748b',
                            borderColor: selectedYear === year ? '#1e1b4b' : '#cbd5e1'
                        }}
                        className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer shadow-xs"
                    >
                        {year}
                    </button>
                ))}
            </div>

            {/* LIST ARSIP KEGIATAN */}
            <div className="bg-white rounded-[2rem] border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-lg">
                {filteredActivities.map((item, index) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        className="flex flex-col md:flex-row md:items-center justify-between px-6 md:px-8 py-5 hover:bg-slate-50 transition-colors gap-3"
                    >
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-xs text-slate-400 font-bold w-6">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div>
                                <h4 style={{ color: '#1e1b4b' }} className="font-display font-bold text-base md:text-lg mb-0.5">
                                    {item.name}
                                </h4>
                                <p className="font-sans text-xs text-slate-500 font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                            {/* Tag Role dengan warna berbeda untuk Koordinator, Volunteer, Sekretaris & PDD, dll */}
                            <span 
                                style={{
                                    backgroundColor: item.role === 'Koordinator' ? '#d6def5' : item.role === 'Presidium' ? '#fbf3ff' : item.role === 'Volunteer' ? '#ccfbf1' : item.role.includes('Sekretaris') ? '#f1cadc' : '#f1f5f9',
                                    color: item.role === 'Koordinator' ? '#1e1b4b' : item.role === 'Presidium' ? '#6b21a8' : item.role === 'Volunteer' ? '#115e59' : item.role.includes('Sekretaris') ? '#831843' : '#475569',
                                    borderColor: item.role === 'Koordinator' ? '#a0bdf0' : item.role === 'Presidium' ? '#d8b4fe' : item.role === 'Volunteer' ? '#5eead4' : item.role.includes('Sekretaris') ? '#f472b6' : '#cbd5e1'
                                }} 
                                className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border shadow-xs"
                            >
                                {item.role}
                            </span>
                            <span className="font-mono text-[11px] font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg whitespace-nowrap">
                                {item.year}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* MODAL DOKUMENTASI GABUNGAN */}
            <AnimatePresence>
                {isGalleryOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsGalleryOpen(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] border border-slate-200 max-w-xl w-full p-6 shadow-2xl relative overflow-hidden"
                        >
                            <button 
                                onClick={() => setIsGalleryOpen(false)}
                                className="absolute top-5 right-5 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#1e1b4b] hover:text-white transition-colors z-20 font-bold cursor-pointer text-xs"
                            >
                                ✕
                            </button>

                            <span style={{ color: '#a0bdf0' }} className="font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">
                                ARSIP KEPANITIAAN & PENGABDIAN MASYARAKAT
                            </span>
                            <h3 style={{ color: '#1e1b4b' }} className="font-display font-black text-xl mb-4">
                                Dokumentasi Gabungan (2022 - 2025)
                            </h3>

                            {/* Viewer Gambar Utama 16:9 */}
                            <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative mb-4 shadow-inner">
                                <img 
                                    src={galleryImages[activeImgIndex]} 
                                    alt="Gallery Preview" 
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                                <button 
                                    onClick={prevImage}
                                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10 cursor-pointer"
                                >
                                    ‹
                                </button>
                                <button 
                                    onClick={nextImage}
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10 cursor-pointer"
                                >
                                    ›
                                </button>

                                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full z-10">
                                    <span className="font-mono text-[9px] text-white font-bold">
                                        {activeImgIndex + 1} / {galleryImages.length}
                                    </span>
                                    <div className="flex gap-1">
                                        {galleryImages.map((_, i) => (
                                            <span 
                                                key={i} 
                                                className={`h-1 rounded-full transition-all ${activeImgIndex === i ? 'w-3 bg-white' : 'w-1 bg-white/50'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-3 border-t border-slate-100">
                                <button 
                                    onClick={() => setIsGalleryOpen(false)}
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