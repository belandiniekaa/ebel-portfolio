import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkSection() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    // 3 Proyek Utama (Selected Projects dengan Multi-Gambar & Role)
const featuredProjects = [
    {
        id: 1,
        title: 'DPRD Work Hub',
        category: 'WEB DEVELOPMENT & SYSTEM',
        role: 'System Analyst & Full-Stack Web Developer',
        shortDesc: 'Platform digital terintegrasi untuk mengotomatisasi 13 modul operasional kedewanan Sekretariat DPRD Kabupaten Ciamis.',
        tags: ['Laravel', 'React.js', 'Inertia.js', 'MySQL', 'Business Intelligence'],
        metrics: '100% Functional Validity · 95.11% UAT Acceptance',
        images: [
            '/images/projects/proj1_1.png',
            '/images/projects/proj1_2.png',
            '/images/projects/proj1_3.png',
            '/images/projects/proj1_4.png',
            '/images/projects/proj1_5.png'
        ],
        fullDetails: 'Platform sistem operasional terintegrasi yang dirancang khusus untuk Sekretariat DPRD Kabupaten Ciamis. Proses pengembangan mencakup identifikasi kebutuhan organisasi, analisis proses bisnis, perancangan sistem, pengembangan, hingga pengujian. Sistem memusatkan 13 modul kelembagaan mulai dari manajemen agenda, persuratan & disposisi, laporan reses, hingga tracking realisasi anggaran. Dilengkapi modul Executive Information System (EIS) berbasis Business Intelligence untuk mentransformasi data operasional menjadi dashboard performa KPI secara real-time.'
    },
    {
        id: 2,
        title: 'Sign Wave — BISINDO Learning Platform',
        category: 'EDTECH & WEB APP',
        role: 'System Analyst, Full-Stack Developer & Lead Concept Creator',
        shortDesc: 'Aplikasi web pembelajaran interaktif Bahasa Isyarat Indonesia (BISINDO) yang dirancang berdasarkan kebutuhan pengguna dan resmi terdaftar HKI.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Agile', 'HKI Certified'],
        metrics: 'Official HKI Copyright Registered · Responsive Dashboard',
        images: [
            '/images/projects/proj2_1.png',
            '/images/projects/proj2_2.png',
            '/images/projects/proj2_3.png',
            '/images/projects/proj2_4.png'
        ],
        fullDetails: 'Platform pembelajaran interaktif Bahasa Isyarat Indonesia (BISINDO) berbasis web yang dikembangkan menggunakan Laravel, PHP, dan MySQL. Proses pengembangan mencakup perancangan kebutuhan dan alur sistem, pengembangan fitur, serta pengujian aplikasi. Menghadirkan kamus interaktif, kuis real-time, artikel edukasi, serta fitur feedback anonim. Dibangun dengan metode Agile dan telah resmi terdaftar Hak Kekayaan Intelektual (HKI) pada Direktorat Jenderal Kekayaan Intelektual (DJKI).'
    },
    {
        id: 3,
        title: 'Expert System for Diagnosing ISPA',
        category: 'EXPERT SYSTEM & HEALTH',
        role: 'Lead Web Developer & System Analyst',
        shortDesc: 'Sistem pakar berbasis web untuk membantu diagnosis awal gejala ISPA menggunakan metode Forward Chaining.',
        tags: ['PHP', 'MySQL', 'Forward Chaining', 'Healthcare Web'],
        metrics: 'Multi-role Interface (User, Expert, Admin) · Black-Box Verified',
        images: [
            '/images/projects/proj3_1.png',
            '/images/projects/proj3_2.png',
            '/images/projects/proj3_3.png',
            '/images/projects/proj3_4.png'
        ],
        fullDetails: 'Sistem pakar berbasis web yang dirancang untuk membantu diagnosis awal Infeksi Saluran Pernapasan Akut (ISPA) menggunakan metode Forward Chaining. Sebagai System Analyst, berkontribusi dalam perancangan alur sistem dan kebutuhan fitur untuk berbagai peran pengguna. Sistem memungkinkan pengguna menginput gejala, memperoleh hasil diagnosis dan saran, serta menyimpan histori diagnosis. Dilengkapi panel multi-peran untuk pengguna, pakar medis, dan admin serta direktori fasilitas kesehatan.'
    }
];


// Daftar Other Projects (Masing-masing 1 gambar & memiliki informasi role)
const moreProjects = [
    {
        id: 101,
        title: 'HMIF Inventory System',
        projectType: 'WEB',
        role: 'System Analyst & Full-Stack Developer',
        tech: 'Laravel / PHP',
        desc: 'Sistem manajemen inventaris dan peminjaman alat berbasis web di HMIF Unsoed.',
        fullDesc: 'Merancang dan mengembangkan sistem dengan akses multi-peran (Admin, Editor, Peminjam, Visitor) untuk mendukung tracking peminjaman alat, manajemen status, denda, hingga dashboard real-time. Proses perancangan didukung dengan analisis kebutuhan dan dokumentasi sistem seperti URS, SRS, DFD, dan ERD.',
        images: ['/images/projects/proj4.png']
    },
    {
        id: 102,
        title: 'Champion Memory Game',
        projectType: 'WEB',
        role: 'Frontend Developer',
        tech: 'React.js',
        desc: 'Game edukasi interaktif warna-warni untuk mendukung pertumbuhan kognitif anak usia dini.',
        fullDesc: 'Menghadirkan visual ramah anak, efek suara, navigasi intuitif, serta umpan balik instan guna melatih daya ingat anak secara menyenangkan.',
        images: ['/images/projects/proj5.png']
    },
    {
        id: 103,
        title: 'Promotion Video – Hutan Pinus',
        projectType: 'MULTIMEDIA',
        role: 'Video Editor & Concept Writer',
        tech: 'Cinematic Editing',
        desc: 'Video promosi pariwisata alam Hutan Pinus Limpakuwus dengan pendekatan sinematik.',
        fullDesc: 'Memanfaatkan teknik wide shot, close-up, narasi puitis, color grading hangat, serta musik menenangkan untuk menyampaikan keindahan wisata.',
        images: ['/images/projects/proj6.png']
    },
    {
        id: 104,
        title: 'ALADDIN Storytelling App',
        projectType: 'WEB',
        role: 'Backend Developer',
        tech: 'PHP Native',
        desc: 'Aplikasi web cerita interaktif berbasis pilihan alur (branching logic) kisah klasik Aladdin.',
        fullDesc: 'Menuntun pembaca dari dalam gua hingga menemukan lampu ajaib dengan alur keputusan yang membentuk hasil akhir cerita.',
        images: ['/images/projects/proj7.png']
    },
    {
        id: 105,
        title: 'DSS for Student Association (SAW)',
        projectType: 'DECISION SYSTEM',
        role: 'System Analyst & Programmer',
        tech: 'PHP / MySQL',
        desc: 'Sistem Pendukung Keputusan pemilihan Hima terbaik Teknik Unsoed menggunakan metode SAW.',
        fullDesc: 'Berperan dalam analisis dan perancangan sistem serta pengembangan modul kriteria, alternatif, dan pembobotan otomatis untuk menghasilkan penilaian yang objektif dan transparan.',
        images: ['/images/projects/proj8.png']
    },
    {
        id: 106,
        title: 'Rainy Rainbow IoT Prototype',
        projectType: 'IoT',
        role: 'IoT & Embedded Programmer',
        tech: 'ESP8266 / C++',
        desc: 'Prototipe rumah pintar penjemur pakaian otomatis berbasis kondisi cuaca dan gerbang pemicu.',
        fullDesc: 'Menggabungkan sensor hujan, motor servo, kontrol berbasis web, display LCD, serta notifikasi real-time via Telegram.',
        images: ['/images/projects/proj9.png']
    },
    {
        id: 107,
        title: 'Mandom IT Helpdesk & Assets',
        projectType: 'MAGANG',
        role: 'IT Support & Admin Intern',
        tech: 'IT Support / Database',
        desc: 'Pengembangan fitur employee, inventaris, dan manajemen aset IT di PT Mandom Indonesia.',
        fullDesc: 'Mendukung pengelolaan inventaris aset IT perusahaan, pemeliharaan perangkat kerja, serta pengembangan fitur Master Data untuk mendukung pengelolaan data internal.',
        images: ['/images/projects/proj10.png']
    },
    {
        id: 108,
        title: 'MoonCycle Menstrual Tracker',
        projectType: 'MOBILE',
        role: 'Mobile Developer',
        tech: 'Ionic / Vue.js',
        desc: 'Aplikasi seluler pelacak siklus dan panduan nutrisi berbasis fase bulanan.',
        fullDesc: 'Dibangun dengan Firebase dan Firestore untuk menyediakan pencatatan siklus, prediksi periode, tips gaya hidup, serta informasi pendukung pengguna.',
        images: ['/images/projects/proj11.png']
    },
    {
        id: 109,
        title: 'Student Performance Classification',
        projectType: 'RESEARCH',
        role: 'Data Scientist & Researcher',
        tech: 'Python / ML',
        desc: 'Penelitian klasifikasi performa akademik menggunakan pendekatan machine learning dan ensemble learning.',
        fullDesc: 'Membandingkan beberapa metode klasifikasi, termasuk Naive Bayes, Bayesian Boosting, dan Deep Learning dengan Bagging, dengan hasil akurasi tertinggi sebesar 93.67%.',
        images: ['/images/projects/proj12.png']
    },
    {
        id: 110,
        title: 'Sentiment Analysis – Pemilu ID',
        projectType: 'RESEARCH',
        role: 'Data Analyst & Researcher',
        tech: 'Python / SVM',
        desc: 'Analisis sentimen pemilu presiden Indonesia menggunakan machine learning dan teknik penanganan data tidak seimbang.',
        fullDesc: 'Melakukan penelitian perbandingan metode klasifikasi sentimen menggunakan Naive Bayes dan SVM, termasuk penerapan SMOTE dan optimasi hyperparameter pada data teks media sosial.',
        images: ['/images/projects/proj13.png']
    },
    {
        id: 111,
        title: 'HMIF Profile Portal',
        projectType: 'WEB',
        role: 'Full-Stack Developer & Sekretaris Umum',
        tech: 'PHP / JavaScript',
        desc: 'Portal web profil dinamis Himpunan Mahasiswa Informatika Unsoed dan modul feedback (LVI).',
        fullDesc: 'Mendukung struktur multi-kabinet, data dosen, galeri divisi, profil fungsionaris, serta sistem masukan aspirasi publik.',
        images: ['/images/projects/proj14.png']
    }
];

    const openModal = (project) => {
        setSelectedProject(project);
        setActiveImgIndex(0);
    };

    const currentProject = featuredProjects[activeIndex] || featuredProjects[0];

    const half = Math.ceil(moreProjects.length / 2);
    const row1Projects = moreProjects.slice(0, half);
    const row2Projects = moreProjects.slice(half);

    const nextImage = (e, imagesLength) => {
        e.stopPropagation();
        setActiveImgIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
    };

    const prevImage = (e, imagesLength) => {
        e.stopPropagation();
        setActiveImgIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
    };

    const MarqueeCard = ({ item }) => (
        <div 
            onClick={() => openModal(item)}
            className="w-[260px] md:w-[300px] shrink-0 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200 p-3.5 shadow-xs hover:shadow-md hover:border-[#a0bdf0] transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between"
        >
            <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="font-display font-bold text-xs text-[#1e1b4b] truncate">
                        {item.title}
                    </h4>
                    <span className="font-mono text-[8px] font-bold px-2 py-0.5 rounded-full bg-[#d6def5]/60 text-[#1e1b4b] border border-[#a0bdf0]/40 uppercase shrink-0">
                        {item.projectType}
                    </span>
                </div>

                <div className="w-full aspect-video rounded-xl bg-slate-100 overflow-hidden mb-2 border border-slate-100 flex items-center justify-center text-slate-400 font-mono text-[9px] relative group">
                    <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <p className="font-sans text-[11px] text-slate-500 font-medium line-clamp-1 mb-1">
                    {item.desc}
                </p>
                <div className="font-mono text-[9px] text-[#a0bdf0] font-bold mb-2">
                    Role: {item.role}
                </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-[#fbf3ff] text-[#1e1b4b] border border-slate-200 truncate">
                    #{item.tech}
                </span>
                <span className="font-mono text-[9px] text-[#1e1b4b] font-bold">DETAIL ↗</span>
            </div>
        </div>
    );

    return (
        <section id="work" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto py-24 overflow-hidden">
            
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 relative z-10"
            >
                <span style={{ color: '#a0bdf0' }} className="font-mono text-xs font-black uppercase tracking-[0.25em] block mb-1">
                    03 / PORTFOLIO
                </span>
                <h2 style={{ color: '#1e1b4b' }} className="font-display text-3xl md:text-4xl font-black tracking-tight">
                    Selected Projects.
                </h2>
            </motion.div>

            {/* 1. KARTU UTAMA PROYEK TERPILIH */}
            <motion.div 
                key={currentProject.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => openModal(currentProject)}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group grid grid-cols-1 lg:grid-cols-12 mb-5 relative z-10 max-w-5xl mx-auto w-full"
            >
                {/* Sisi Kiri: Preview Gambar */}
                <div className="lg:col-span-6 bg-slate-100 relative aspect-video flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200">
                    <img 
                        src={currentProject.images[activeImgIndex]} 
                        alt={currentProject.title} 
                        className="w-full h-full object-cover transition-all duration-500" 
                    />

                    {currentProject.images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => prevImage(e, currentProject.images.length)}
                                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/85 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10 cursor-pointer"
                                aria-label="Previous Image"
                            >
                                ‹
                            </button>
                            <button
                                onClick={(e) => nextImage(e, currentProject.images.length)}
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/85 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10 cursor-pointer"
                                aria-label="Next Image"
                            >
                                ›
                            </button>

                            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full z-10">
                                <span className="font-mono text-[9px] text-white font-bold">
                                    {activeImgIndex + 1} / {currentProject.images.length}
                                </span>
                                <div className="flex gap-1">
                                    {currentProject.images.map((_, i) => (
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

                {/* Sisi Kanan: Teks & Role */}
                <div className="lg:col-span-6 p-6 md:p-7 flex flex-col justify-between bg-white">
                    <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                            <span style={{ color: '#a0bdf0' }} className="font-mono text-[10px] uppercase tracking-wider font-bold">
                                {currentProject.category}
                            </span>
                        </div>
                        <h3 style={{ color: '#1e1b4b' }} className="font-display font-bold text-xl md:text-2xl mb-1.5 group-hover:text-[#a0bdf0] transition-colors">
                            {currentProject.title}
                        </h3>
                        
                        {/* Indikator Role Kamu */}
                        <div className="inline-block px-2.5 py-1 bg-[#fbf3ff] border border-slate-200 rounded-lg font-mono text-[10px] font-bold text-[#1e1b4b] mb-2.5">
                            Role: {currentProject.role}
                        </div>

                        <p style={{ color: '#334155' }} className="font-sans text-xs md:text-sm leading-relaxed mb-4 font-medium">
                            {currentProject.shortDesc}
                        </p>
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {currentProject.tags?.map(tag => (
                                <span key={tag} style={{ color: '#334155', backgroundColor: '#fbf3ff' }} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md border border-slate-200">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-end pt-3 border-t border-slate-100">
                            <span style={{ color: '#1e1b4b' }} className="font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                                View Detail 
                                <span className="w-6 h-6 rounded-full bg-[#1e1b4b] text-white flex items-center justify-center font-mono text-[10px] group-hover:bg-[#a0bdf0] group-hover:text-[#1e1b4b] transition-colors">
                                    →
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* THUMBNAIL PILIHAN UTAMA */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 relative z-10">
                {featuredProjects.map((proj, idx) => (
                    <button
                        key={proj.id}
                        onClick={() => {
                            setActiveIndex(idx);
                            setActiveImgIndex(0);
                        }}
                        style={{
                            borderColor: activeIndex === idx ? '#1e1b4b' : '#cbd5e1',
                            backgroundColor: activeIndex === idx ? '#fbf3ff' : '#ffffff'
                        }}
                        className="px-4 py-2 rounded-xl border text-left transition-all shadow-xs flex items-center gap-2.5 cursor-pointer"
                    >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeIndex === idx ? '#1e1b4b' : '#cbd5e1' }}></span>
                        <span style={{ color: '#1e1b4b' }} className="font-display font-bold text-[11px] uppercase">
                            {proj.title}
                        </span>
                    </button>
                ))}
            </div>

            {/* 2. OTHER PROJECTS */}
            <div className="relative z-10 space-y-3.5">
                <div className="flex items-center justify-between mb-1">
                    <h3 style={{ color: '#1e1b4b' }} className="font-display font-bold text-base md:text-lg">
                        Other Archives & Experiments
                    </h3>
                    <span className="font-mono text-[10px] text-slate-400 font-bold tracking-wider uppercase bg-slate-100 px-3 py-1 rounded-full">
                        Showing archive stream [ {moreProjects.length} projects total ]
                    </span>
                </div>

                {/* BARIS ATAS */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 85, ease: "linear", repeat: Infinity }}
                        className="flex gap-4 w-max"
                    >
                        {[...row1Projects, ...row1Projects, ...row1Projects, ...row1Projects].map((item, index) => (
                            <MarqueeCard key={`row1-${index}`} item={item} />
                        ))}
                    </motion.div>
                </div>

                {/* BARIS BAWAH */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ duration: 80, ease: "linear", repeat: Infinity }}
                        className="flex gap-4 w-max"
                    >
                        {[...row2Projects, ...row2Projects, ...row2Projects, ...row2Projects].map((item, index) => (
                            <MarqueeCard key={`row2-${index}`} item={item} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* MODAL DETAIL PROYEK */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] border border-slate-200 max-w-2xl w-full p-6 md:p-8 shadow-2xl relative overflow-hidden max-h-[85vh] overflow-y-auto"
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-5 right-5 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#1e1b4b] hover:text-white transition-colors z-20 font-bold cursor-pointer text-xs"
                            >
                                ✕
                            </button>

                            {/* Gambar Header Modal */}
                            <div className="w-full aspect-video rounded-xl overflow-hidden mb-5 border border-slate-200 bg-slate-100 shadow-inner relative">
                                <img 
                                    src={selectedProject.images[activeImgIndex]} 
                                    alt={selectedProject.title} 
                                    className="w-full h-full object-cover transition-all duration-500" 
                                />

                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => prevImage(e, selectedProject.images.length)}
                                            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/85 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10 cursor-pointer"
                                            aria-label="Previous Image"
                                        >
                                            ‹
                                        </button>
                                        <button
                                            onClick={(e) => nextImage(e, selectedProject.images.length)}
                                            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/85 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10 cursor-pointer"
                                            aria-label="Next Image"
                                        >
                                            ›
                                        </button>

                                        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full z-10">
                                            <span className="font-mono text-[9px] text-white font-bold">
                                                {activeImgIndex + 1} / {selectedProject.images.length}
                                            </span>
                                            <div className="flex gap-1">
                                                {selectedProject.images.map((_, i) => (
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

                            <span style={{ color: '#a0bdf0' }} className="font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">
                                {selectedProject.category || selectedProject.projectType || 'Project Archive'}
                            </span>
                            <h3 style={{ color: '#1e1b4b' }} className="font-display font-black text-xl md:text-2xl mb-2">
                                {selectedProject.title}
                            </h3>

                            {/* Role di dalam Modal */}
                            <div className="inline-block px-3 py-1 bg-[#fbf3ff] border border-slate-200 rounded-lg font-mono text-xs font-bold text-[#1e1b4b] mb-3">
                                Role: {selectedProject.role}
                            </div>

                            <p style={{ color: '#334155' }} className="font-sans text-xs md:text-sm leading-relaxed font-medium mb-5">
                                {selectedProject.fullDetails || selectedProject.fullDesc || selectedProject.desc}
                            </p>

                            {selectedProject.metrics && (
                                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl mb-5 font-mono text-[11px] font-bold text-[#1e1b4b]">
                                    {selectedProject.metrics}
                                </div>
                            )}

                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {selectedProject.tags ? (
                                    selectedProject.tags.map(t => (
                                        <span key={t} className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-[#1e1b4b]">
                                            #{t}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-[#1e1b4b]">
                                        #{selectedProject.tech}
                                    </span>
                                )}
                            </div>

                            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                                <span className="font-mono text-[10px] text-slate-500 font-bold">Verified Portfolio Archive</span>
                                <button 
                                    onClick={() => setSelectedProject(null)}
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