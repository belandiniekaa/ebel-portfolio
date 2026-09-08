import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OrganizationSection() {
    // Set index awal ke 1 supaya Sekretaris Umum otomatis tampil di tengah (center card) saat pertama kali dimuat
    const [currentIndex, setCurrentIndex] = useState(1); 
    const [selectedOrg, setSelectedOrg] = useState(null);
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    // Urutan array kronologis: 0 = Staf Sekretaris, 1 = Sekretaris Umum, 2 = DPO
    const organizations = [
        {
            id: 1,
            year: '2023 – 2024',
            role: 'Staf Sekretaris',
            org: 'HMIF Universitas Jenderal Soedirman',
            skills: ['Administrasi', 'Arsip Surat', 'Notulensi Rapat'],
            fullDesc: 'Mengelola 293 surat keluar dan 38 surat masuk, termasuk pencatatan, distribusi, serta pengarsipan dokumen secara sistematis. Mengelola administrasi rapat organisasi (Rapat Pleno) mulai dari undangan, absensi, notulensi, hingga dokumentasi untuk memastikan koordinasi berjalan efektif.',
            images: [
                '/images/organization/hmif-staff-activity-1.jpg',
                '/images/organization/hmif-staff-certificate.jpeg'
            ]
        },
        {
            id: 2,
            year: '2024 – 2025',
            role: 'Sekretaris Umum',
            org: 'HMIF Universitas Jenderal Soedirman',
            skills: ['Leadership', 'Korespondensi Birokrasi', 'Manajemen Anggaran'],
            fullDesc: 'Mengelola administrasi, dokumentasi, dan pengarsipan 44 program kerja dari 8 divisi mencakup proposal, RAB, LPJ, dan surat resmi. Mengoordinasikan komunikasi lintas divisi serta kelengkapan dokumen persyaratan pencairan anggaran ke birokrat fakultas. Memimpin 2 staf sekretariat dalam pengelolaan dokumen, surat-menyurat, dan agenda rapat.',
            images: [
                '/images/organization/hmif-sekum-activity-1.jpg',
                '/images/organization/hmif-sekum-certificate.jpeg'
            ]
        },
        {
            id: 3,
            year: '2025 – 2026',
            role: 'Dewan Pengawas Organisasi',
            org: 'HMIF Universitas Jenderal Soedirman',
            skills: ['Strategic Planning', 'Evaluasi Program', 'Akuntabilitas'],
            fullDesc: 'Melakukan pengawasan terhadap kinerja pengurus harian (ketua, sekretaris, dan bendahara) guna memastikan akuntabilitas, kepatuhan administrasi, serta keselarasan pelaksanaan program kerja. Melakukan evaluasi program kerja dan memberikan rekomendasi dalam proses pengambilan keputusan untuk meningkatkan efektivitas operasional organisasi.',
            images: [
                '/images/organization/hmif-dpo-activity-1.jpg',
                '/images/organization/hmif-dpo-certificate.png'
            ]
        }
    ];

    const handleCardClick = (index) => {
        setCurrentIndex(index);
        setActiveImgIndex(0);
    };

    const handlePrev = (e, imagesLength) => {
        e.stopPropagation();
        setActiveImgIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
    };

    const handleNext = (e, imagesLength) => {
        e.stopPropagation();
        setActiveImgIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
    };

    const openModal = (org, e) => {
        if (e) e.stopPropagation();
        setSelectedOrg(org);
        setActiveImgIndex(0);
    };

    return (
        <section id="organization" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto py-24 overflow-hidden">
            
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10 text-center md:text-left"
            >
                <span style={{ color: '#a0bdf0' }} className="font-mono text-xs font-black uppercase tracking-[0.25em] block mb-1">
                    04 / LEADERSHIP & ORGANIZATION
                </span>
                <h2 style={{ color: '#1e1b4b' }} className="font-display text-3xl md:text-4xl font-black tracking-tight">
                    Organizational evolution in HMIF.
                </h2>
            </motion.div>

            {/* STACKED CARDS / ROTATING CAROUSEL CONTAINER */}
            <div className="relative w-full max-w-3xl mx-auto h-[350px] md:h-[330px] flex items-center justify-center mb-12">
                {organizations.map((org, index) => {
                    const isCenter = index === currentIndex;
                    const isLeft = index === (currentIndex - 1 + organizations.length) % organizations.length;
                    const isRight = index === (currentIndex + 1) % organizations.length;

                    if (!isCenter && !isLeft && !isRight) return null;

                    let positionStyle = "opacity-0 pointer-events-none scale-75 translate-x-0";
                    if (isCenter) {
                        positionStyle = "z-30 opacity-100 scale-100 translate-x-0 cursor-pointer shadow-xl";
                    } else if (isLeft) {
                        positionStyle = "z-20 opacity-50 scale-90 -translate-x-[60%] md:-translate-x-[75%] cursor-pointer hover:opacity-90";
                    } else if (isRight) {
                        positionStyle = "z-20 opacity-50 scale-90 translate-x-[60%] md:translate-x-[75%] cursor-pointer hover:opacity-90";
                    }

                    return (
                        <div
                            key={org.id}
                            onClick={() => {
                                if (isCenter) openModal(org);
                                else handleCardClick(index);
                            }}
                            className={`absolute w-[280px] md:w-[380px] bg-white rounded-[2rem] border border-slate-200 p-5 shadow-lg transition-all duration-500 ease-in-out overflow-hidden flex flex-col justify-between ${positionStyle}`}
                        >
                            <div>
                                {/* Gambar Kegiatan Landscape 16:9 dengan Navigasi < > dan Indikator */}
                                <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-100 mb-3 border border-slate-100 relative group">
                                    <img 
                                        src={isCenter ? org.images[activeImgIndex] : org.images[0]} 
                                        alt={org.role} 
                                        className="w-full h-full object-cover transition-all duration-500" 
                                    />

                                    {isCenter && org.images.length > 1 && (
                                        <>
                                            <button 
                                                onClick={(e) => handlePrev(e, org.images.length)}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10"
                                            >
                                                ‹
                                            </button>
                                            <button 
                                                onClick={(e) => handleNext(e, org.images.length)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs transition-all shadow-md z-10"
                                            >
                                                ›
                                            </button>

                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full z-10">
                                                <span className="font-mono text-[8px] text-white font-bold">
                                                    {activeImgIndex + 1} / {org.images.length}
                                                </span>
                                                <div className="flex gap-1">
                                                    {org.images.map((_, i) => (
                                                        <span
                                                            key={i}
                                                            className={`h-1 rounded-full transition-all ${activeImgIndex === i ? 'w-2.5 bg-white' : 'w-1 bg-white/50'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Tahun & Indikator Detail */}
                                <div className="flex items-center justify-between mb-1.5">
                                    <span style={{ color: '#1e1b4b', backgroundColor: '#d6def5' }} className="font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full border border-[#a0bdf0]">
                                        {org.year}
                                    </span>
                                    {isCenter && (
                                        <span className="font-mono text-[9px] text-[#a0bdf0] font-bold">
                                            KLIK DETAIL ↗
                                        </span>
                                    )}
                                </div>

                                <h3 style={{ color: '#1e1b4b' }} className="font-display font-bold text-base md:text-lg mb-0.5">
                                    {org.role}
                                </h3>
                                <h4 style={{ color: '#64748b' }} className="font-mono text-[11px] font-bold uppercase tracking-wider mb-3">
                                    {org.org}
                                </h4>
                            </div>

                            {/* Tag Skill Berbeda di Setiap Organisasi */}
                            <div className="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1">
                                {org.skills.map(skill => (
                                    <span key={skill} className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#fbf3ff] text-[#1e1b4b] border border-slate-200">
                                        #{skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* TIMELINE HORIZONTAL DI BAWAHNYA - SELALU HORIZONTAL MESKIPUN DI HP */}
            <div className="max-w-2xl mx-auto w-full px-2 md:px-4 mt-6 md:mt-2">
                <div className="flex flex-row items-start justify-between relative">
                    {/* Garis background timeline - tampil di HP & posisinya dipaskan ke tengah bulatannya */}
                    <div className="absolute top-[16px] left-[15%] right-[15%] -translate-y-1/2 h-[2px] bg-slate-200 z-0"></div>

                    {organizations.map((org, idx) => (
                        <div 
                            key={org.id}
                            onClick={() => handleCardClick(idx)}
                            className={`relative z-10 flex flex-col items-center cursor-pointer group text-center transition-all flex-1 px-1 ${currentIndex === idx ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                        >
                            <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-mono text-[10px] font-bold mb-2 transition-all shadow-xs ${currentIndex === idx ? 'bg-[#1e1b4b] text-white shadow-md' : 'bg-white border-2 border-slate-300 text-slate-600'}`}>
                                {idx + 1}
                            </div>
                            <span style={{ color: '#1e1b4b' }} className="font-display font-bold text-[9px] md:text-[11px] max-w-[90px] md:max-w-[120px] leading-tight">
                                {org.role}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL DETAIL ORGANISASI */}
            <AnimatePresence>
                {selectedOrg && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedOrg(null)}
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
                                onClick={() => setSelectedOrg(null)}
                                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#1e1b4b] hover:text-white transition-colors z-20 font-bold cursor-pointer"
                            >
                                ✕
                            </button>

                            {/* Sisi Kiri: Gambar Slider Modal 16:9 dengan Tombol Panah <> */}
                            <div className="md:col-span-6 relative">
                                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner relative">
                                    <img 
                                        src={selectedOrg.images[activeImgIndex]} 
                                        alt="Organization Proof" 
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />
                                    {selectedOrg.images.length > 1 && (
                                        <>
                                            <button 
                                                onClick={(e) => handlePrev(e, selectedOrg.images.length)}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs font-bold transition-all shadow-md z-10"
                                            >
                                                ‹
                                            </button>
                                            <button 
                                                onClick={(e) => handleNext(e, selectedOrg.images.length)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center font-mono text-xs font-bold transition-all shadow-md z-10"
                                            >
                                                ›
                                            </button>
                                        </>
                                    )}
                                </div>
                                <div className="flex items-center justify-center gap-2 mt-3">
                                    <span className="font-mono text-[10px] text-slate-500 font-bold">
                                        {activeImgIndex + 1} / {selectedOrg.images.length}
                                    </span>
                                    <div className="flex gap-1.5">
                                        {selectedOrg.images.map((_, i) => (
                                            <span 
                                                key={i} 
                                                className={`h-1.5 rounded-full transition-all ${activeImgIndex === i ? 'w-6 bg-[#1e1b4b]' : 'w-2 bg-slate-300'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sisi Kanan: Penjelasan Lengkap */}
                            <div className="md:col-span-6 flex flex-col justify-center">
                                <span style={{ color: '#a0bdf0' }} className="font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                                    {selectedOrg.org} · {selectedOrg.year}
                                </span>
                                <h3 style={{ color: '#1e1b4b' }} className="font-display font-black text-2xl md:text-3xl mb-2">
                                    {selectedOrg.role}
                                </h3>
                                <p style={{ color: '#334155' }} className="font-sans text-sm md:text-base leading-relaxed font-medium mb-6">
                                    {selectedOrg.fullDesc}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {selectedOrg.skills.map(skill => (
                                        <span key={skill} className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-[#fbf3ff] text-[#1e1b4b] border border-slate-200">
                                            #{skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span className="font-mono text-xs text-slate-500 font-bold">Verified Leadership Track Record</span>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}