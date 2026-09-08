import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExperienceSection() {
    const [activeFilter, setActiveFilter] = useState('Semua');
    const [selectedExp, setSelectedExp] = useState(null);
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    const experiences = [
        {
            id: 1,
            category: 'Magang',
            year: '2025',
            title: 'Staff Intern',
            place: 'Sekretariat DPRD Kabupaten Ciamis',
            desc: 'Menganalisis kebutuhan organisasi, merancang dan mengembangkan solusi sistem digital untuk mendukung proses bisnis dan operasional kelembagaan.',
            fullDesc: [
                'Mengidentifikasi kebutuhan pengguna dan proses bisnis untuk mendukung perancangan sistem digital kelembagaan.',
                'Merancang dan mengembangkan DPRD Work Hub dengan 13 modul menggunakan pendekatan SDLC, termasuk penyusunan URS, SRS, UML, flowchart, wireframe, dan Manual Book.',
                'Mengembangkan dashboard Executive Information System (EIS) berbasis Business Intelligence menggunakan React.js, Laravel, dan MySQL untuk mendukung monitoring kinerja kelembagaan.',
                'Melakukan functional testing dan User Acceptance Testing (UAT) dengan tingkat penerimaan pengguna sebesar 95,11%.',
                'Mengelola surat, arsip, laporan, dan kebutuhan administrasi rapat sebagai bagian dari pemahaman proses operasional organisasi.'
            ],
            images: [
                '/images/experiences/dprd-activity-1.jpg',
                '/images/experiences/dprd-certificate.jpeg'
            ]
        },
        {
            id: 2,
            category: 'Magang',
            year: '2024',
            title: 'IT Support Intern',
            place: 'PT Mandom Indonesia Tbk',
            desc: 'Mendukung operasional IT melalui pengelolaan data aset, pengembangan sistem internal, serta pemeliharaan perangkat kerja.',
            fullDesc: [
                'Mengelola dan memperbarui data inventaris serta aset IT menggunakan OCS Inventory untuk mendukung monitoring perangkat.',
                'Mengembangkan fitur Master Data pada sistem internal IT Helpdesk menggunakan CodeIgniter 3 dan SQL Server berdasarkan kebutuhan pengelolaan data.',
                'Menyusun wireframe sebagai bagian dari perancangan fitur sistem sebelum proses pengembangan.',
                'Melakukan pemeliharaan, troubleshooting, dan upgrade perangkat kerja, termasuk SSD upgrade pada 40+ laptop karyawan.',
                'Mendukung operasional IT dan memastikan data serta perangkat kerja tercatat dan terkelola dengan baik.'
            ],
            images: [
                '/images/experiences/mandom-activity-1.png',
                '/images/experiences/mandom-certificate.jpeg'
            ]
        },
        {
            id: 3,
            category: 'Akademik',
            year: '2025',
            title: 'Teaching Assistant — Artificial Intelligence',
            place: 'Universitas Jenderal Soedirman',
            desc: 'Mendampingi pembelajaran AI sekaligus membantu mahasiswa memahami konsep, implementasi, dan penyelesaian masalah teknis.',
            fullDesc: [
                'Mendampingi 50+ mahasiswa pada 3 kelas praktikum Artificial Intelligence.',
                'Membimbing implementasi Expert System, Fuzzy Logic, Genetic Algorithm, dan Neural Network menggunakan MATLAB dan Python.',
                'Membantu mahasiswa melakukan debugging dan menyelesaikan kendala teknis selama praktikum.',
                'Mengelola absensi, penilaian, dan evaluasi praktikum secara terstruktur.',
                'Berkoordinasi dengan dosen dalam pelaksanaan praktikum dan penyampaian kebutuhan pembelajaran.'
            ],
            images: [
                '/images/experiences/ai-lab-activity-1.jpg',
                '/images/experiences/ai-lab-certificate.png'
            ]
        },
        {
            id: 4,
            category: 'Akademik',
            year: '2024',
            title: 'Teaching Assistant — Object-Oriented Programming',
            place: 'Universitas Jenderal Soedirman',
            desc: 'Mendampingi praktikum OOP serta membantu mahasiswa memahami implementasi konsep dan menyelesaikan kendala teknis.',
            fullDesc: [
                'Mendampingi 45 mahasiswa pada 2 kelas praktikum Object-Oriented Programming.',
                'Membimbing implementasi konsep OOP menggunakan Java dan membantu troubleshooting kode.',
                'Membantu mahasiswa memahami struktur program, logika, dan penerapan konsep pemrograman.',
                'Mengelola absensi, penilaian, dan evaluasi praktikum secara terstruktur.',
                'Berkoordinasi dalam pelaksanaan praktikum dan memastikan kegiatan pembelajaran berjalan sesuai kebutuhan.'
            ],
            images: [
                '/images/experiences/pbo-lab-activity-1.jpg',
                '/images/experiences/pbo-lab-certificate.png'
            ]
        }
    ];

    const filters = ['Semua', 'Magang', 'Akademik'];
    const filteredData = activeFilter === 'Semua' ? experiences : experiences.filter(e => e.category === activeFilter);

    const openModal = (exp) => {
        setSelectedExp(exp);
        setActiveImgIndex(0);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setActiveImgIndex(prev => (prev === selectedExp.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setActiveImgIndex(prev => (prev === 0 ? selectedExp.images.length - 1 : prev - 1));
    };

    return (
        <section id="experience" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto py-24 overflow-hidden">
            
            {/* GARIS TIMELINE UTAMA (MENYAMBUNG UTUH DARI ATAS SAMPAI BAWAH) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#a0bdf0] via-[#f1cadc] to-[#a0bdf0] opacity-50"></div>

            {/* Header & Filter Tombol dengan Animasi Masuk */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 relative z-10"
            >
                <div>
                    <span style={{ color: '#a0bdf0' }} className="font-mono text-xs font-black uppercase tracking-[0.25em] block mb-1">
                        02 / PROFESSIONAL & ACADEMIC EXPERIENCE
                    </span>
                    <h2 style={{ color: '#1e1b4b' }} className="font-display text-3xl md:text-4xl font-black tracking-tight">
                        Timeline of impact & roles.
                    </h2>
                </div>

                {/* Tombol Filter */}
                <div className="flex bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-slate-200 shadow-sm self-start md:self-auto">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            style={{
                                backgroundColor: activeFilter === filter ? '#1e1b4b' : 'transparent',
                                color: activeFilter === filter ? '#ffffff' : '#64748b'
                            }}
                            className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer"
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* KARTU PENGALAMAN DENGAN TRANSISI ANIMASI STAGGER */}
            <div className="relative z-10 space-y-8">
                {filteredData.map((exp, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div 
                            key={exp.id}
                            layout
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                            className={`flex flex-col md:flex-row items-center justify-between relative ${isEven ? '' : 'md:flex-row-reverse'}`}
                        >
                            {/* Sisi Kosong untuk Zig-Zag */}
                            <div className="hidden md:block w-[45%]"></div>

                            {/* Titik Tengah Timeline dengan Efek Pulse */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#a0bdf0] shadow-[0_0_15px_rgba(160,189,240,0.8)] z-20 items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#1e1b4b] animate-ping"></div>
                            </div>

                            {/* Kotak Kartu Pengalaman */}
                            <div 
                                onClick={() => openModal(exp)}
                                className="w-full md:w-[45%] bg-white/90 backdrop-blur-xl rounded-[2rem] border border-slate-200 p-6 md:p-7 shadow-lg hover:shadow-2xl hover:border-[#a0bdf0] transition-all duration-300 cursor-pointer group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-28 h-28 bg-[#f1cadc]/30 rounded-full blur-2xl pointer-events-none"></div>

                                <div className="flex items-center justify-between mb-3 relative z-10">
                                    <span style={{ color: '#1e1b4b', backgroundColor: '#d6def5' }} className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-[#a0bdf0]">
                                        {exp.category} · {exp.year}
                                    </span>
                                    <span className="font-mono text-[10px] text-slate-400 font-bold group-hover:text-[#1e1b4b] transition-colors">
                                        CLICK FOR DETAIL ↗
                                    </span>
                                </div>

                                <h3 style={{ color: '#1e1b4b' }} className="font-display font-bold text-base md:text-lg mb-1 group-hover:text-[#a0bdf0] transition-colors relative z-10">
                                    {exp.title}
                                </h3>
                                <h4 style={{ color: '#64748b' }} className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 relative z-10">
                                    {exp.place}
                                </h4>
                                <p style={{ color: '#334155' }} className="font-sans text-[11px] md:text-xs leading-relaxed font-medium line-clamp-2 relative z-10">
                                    {exp.desc}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* MODAL DETAIL */}
            <AnimatePresence>
                {selectedExp && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedExp(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2.5rem] border border-slate-200 max-w-4xl w-full p-6 md:p-10 shadow-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-h-[90vh] overflow-y-auto"
                        >
                            <button 
                                onClick={() => setSelectedExp(null)}
                                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#1e1b4b] hover:text-white transition-colors z-20 font-bold cursor-pointer"
                            >
                                ✕
                            </button>

                            {/* Sisi Kiri: Gambar Slider 16:9 dengan Tombol <> */}
                            <div className="md:col-span-6 relative">
                                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner relative">
                                    <img 
                                        src={selectedExp.images[activeImgIndex]} 
                                        alt="Activity Proof" 
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />
                                    {selectedExp.images.length > 1 && (
                                        <>
                                            <button 
                                                onClick={prevImage}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10 cursor-pointer"
                                            >
                                                ‹
                                            </button>
                                            <button 
                                                onClick={nextImage}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10 cursor-pointer"
                                            >
                                                ›
                                            </button>
                                        </>
                                    )}
                                </div>
                                
                                {/* Indikator Slide di Bawah Gambar */}
                                <div className="flex items-center justify-center gap-2 mt-3">
                                    <span className="font-mono text-[10px] text-slate-500 font-bold">
                                        {activeImgIndex + 1} / {selectedExp.images.length}
                                    </span>
                                    <div className="flex gap-1.5">
                                        {selectedExp.images.map((_, i) => (
                                            <span 
                                                key={i} 
                                                className={`h-1.5 rounded-full transition-all ${activeImgIndex === i ? 'w-6 bg-[#1e1b4b]' : 'w-2 bg-slate-300'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sisi Kanan: Teks Penjelasan */}
                            <div className="md:col-span-6 flex flex-col justify-center">
                                <span style={{ color: '#a0bdf0' }} className="font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                                    {selectedExp.category} · {selectedExp.year}
                                </span>
                                <h3 style={{ color: '#1e1b4b' }} className="font-display font-black text-xl md:text-2xl mb-2">
                                    {selectedExp.title}
                                </h3>
                                <h4 style={{ color: '#64748b' }} className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4">
                                    {selectedExp.place}
                                </h4>
                                
                                <ul className="space-y-2 mb-6">
                                    {selectedExp.fullDesc.map((item, idx) => (
                                        <li key={idx} style={{ color: '#334155' }} className="font-sans text-[11px] md:text-xs leading-relaxed font-medium flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#1e1b4b] mt-1.5 shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span className="font-mono text-xs text-slate-500 font-bold">Verified Role & Documentation</span>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}