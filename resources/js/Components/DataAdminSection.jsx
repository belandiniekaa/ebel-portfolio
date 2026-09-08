import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DataAdminSection() {
    const [selectedItem, setSelectedItem] = useState(null);
    const scrollRef = useRef(null);

    // 10 Studi Kasus Excel Workbook & Administrative Systems lengkap dengan link drive spesifik per file
    const excelProjects = [
        {
            id: 1,
            title: 'Academic Student Database',
            case: 'Database Akademik',
            desc: 'Database manajemen mahasiswa lengkap dengan validasi data dan rekapitulasi otomatis.',
            fullDetails: 'Workbook manajemen data akademik mahasiswa yang terstruktur secara komprehensif. Menggunakan formula pencarian canggih dan validasi ketat untuk menjaga integritas data status kemahasiswaan.',
            formulas: 'XLOOKUP, INDEX/MATCH, Data Validation, COUNTIF',
            rows: '150+ Baris Data Utama',
            features: 'Validasi data mahasiswa, XLOOKUP dinamis, Pivot Table rekapitulasi, dan Interactive KPI Dashboard.',
            tagBg: '#d6def5', tagText: '#1e1b4b', tagBorder: '#a0bdf0',
            img: '/images/excel/ex1.jpg',
            driveUrl: 'https://docs.google.com/spreadsheets/d/11MLQyRh0p_83JURvNUMS4Jd2U_4p_xFZ/edit?usp=drive_link&ouid=110996546682819261369&rtpof=true&sd=true' // Ganti dengan link spesifik file 1
        },
        {
            id: 2,
            title: 'Tracker Beban Mengajar Dosen',
            case: 'Manajemen Fakultas',
            desc: 'Sistem pelacakan dan kalkulasi beban SKS mengajar dosen secara otomatis.',
            fullDetails: 'Workbook monitoring beban kerja dosen (BKD) untuk memastikan kesesuaian distribusi SKS mengajar dengan pemanfaatan formula agregasi multi-kondisi.',
            formulas: 'SUMIFS, COUNTIFS, XLOOKUP, Data Validation',
            rows: '150+ Baris Data',
            features: 'Kalkulasi otomatis beban SKS, rekapitulasi berbasis Pivot, dan visualisasi kapasitas mengajar.',
            tagBg: '#fbf3ff', tagText: '#6b21a8', tagBorder: '#d8b4fe',
            img: '/images/excel/ex2.jpg',
            driveUrl: 'https://docs.google.com/spreadsheets/d/1jkEskXOeBW8WftIX4bzM20lEGmPJ4kCU/edit?usp=drive_link&ouid=110996546682819261369&rtpof=true&sd=true' // Ganti dengan link spesifik file 2
        },
        {
            id: 3,
            title: 'Monitoring Kontrak Kerja Sama',
            case: 'Administrasi Hukum/MoU',
            desc: 'Pencatatan masa berlaku, status, dan evaluasi dokumen kontrak kerja sama instansi.',
            fullDetails: 'Sistem administrasi untuk memonitoring dokumen MoU dan kontrak kerja sama institusi dengan formula pengecekan tanggal otomatis serta peringatan masa aktif berbasis warna.',
            formulas: 'DATEDIF, IF, AND, Conditional Formatting',
            rows: '50+ Dokumen Kontrak',
            features: 'Notifikasi otomatis masa aktif kontrak, lookup kategori mitra, dan dashboard rekrutmen kerja sama.',
            tagBg: '#f1cadc', tagText: '#831843', tagBorder: '#f472b6',
            img: '/images/excel/ex3.jpg',
            driveUrl: 'https://docs.google.com/spreadsheets/d/1vWQLGKThBmhPTpzkNFXAEAzOdfanTcSC/edit?usp=drive_link&ouid=110996546682819261369&rtpof=true&sd=true' // Ganti dengan link spesifik file 3
        },
        {
            id: 4,
            title: 'RAB Kegiatan Kampus',
            case: 'Financial Budgeting',
            desc: 'Rencana Anggaran Biaya (RAB) terstruktur dengan alokasi pos dana dan kalkulasi otomatis.',
            fullDetails: 'Workbook pengelolaan keuangan kegiatan instansi/organisasi yang mencakup estimasi biaya operasional dan honorarium berbasis kalkulasi matriks perkalian jumlah dan harga satuan.',
            formulas: 'SUM, SUMPRODUCT, ROUND, Data Validation',
            rows: '120+ Baris Anggaran',
            features: 'Formula dinamis perhitungan total sub-pos, validasi batas anggaran, dan ringkasan eksekutif.',
            tagBg: '#d6def5', tagText: '#1e1b4b', tagBorder: '#a0bdf0',
            img: '/images/excel/ex4.jpg',
            driveUrl: 'https://docs.google.com/spreadsheets/d/17CTWP6QnNgF4A3BeN3fN3fmv2NzoJKX4/edit?usp=drive_link&ouid=110996546682819261369&rtpof=true&sd=true' // Ganti dengan link spesifik file 4
        },
        {
            id: 5,
            title: 'Kalkulator Honor Dosen & Pajak',
            case: 'Payroll & Tax Automation',
            desc: 'Kalkulator otomatis perhitungan honorarium dosen tamu beserta potongan pajak PPh 21.',
            fullDetails: 'Sistem hitung finansial cepat untuk honorarium pengajar eksternal/tamu yang secara otomatis mengalkulasikan tarif progresif dan besaran netto setelah pajak.',
            formulas: 'IFS, ROUND, SUM, Percentage Multiplier',
            rows: '60+ Data Pengajar',
            features: 'Automated tax deduction formulas, slip honorarium generator, dan rekapitulasi pengeluaran.',
            tagBg: '#fbf3ff', tagText: '#6b21a8', tagBorder: '#d8b4fe',
            img: '/images/excel/ex5.jpg',
            driveUrl: 'https://docs.google.com/spreadsheets/d/1vIIlSZmqtL2dYc_--bPc5VBQjPZt2453/edit?usp=drive_link&ouid=110996546682819261369&rtpof=true&sd=true' // Ganti dengan link spesifik file 5
        },
        {
            id: 6,
            title: 'Generator Nomor Surat Keluar Resmi',
            case: 'Correspondence Hub',
            desc: 'Sistem penomoran dan arsip digital surat keluar resmi sekretariat secara otomatis.',
            fullDetails: 'Workbook untuk menghindari duplikasi nomor surat keluar instansi, menggunakan penggabungan teks otomatis dan counter baris untuk penomoran urut.',
            formulas: 'CONCATENATE, TEXT, COUNTA, IF',
            rows: '120+ Arsip Surat',
            features: 'Auto-increment numbering logic, validasi kategori surat, dan pencarian cepat berbasis XLOOKUP.',
            tagBg: '#f1cadc', tagText: '#831843', tagBorder: '#f472b6',
            img: '/images/excel/ex6.jpg',
            driveUrl: 'https://docs.google.com/spreadsheets/d/1GNSqMsID549RXC1pmFopH0OAzlIyJFnr/edit?usp=drive_link&ouid=110996546682819261369&rtpof=true&sd=true' // Ganti dengan link spesifik file 6
        },
        {
            id: 7,
            title: 'Dashboard Monev Kegiatan',
            case: 'Monitoring & Evaluation',
            desc: 'Dashboard pemantauan dan evaluasi progres pelaksanaan program kerja instansi.',
            fullDetails: 'Workbook monitoring evaluasi (Monev) untuk melacak persentase penyelesaian program kerja dan realisasi anggaran dengan ringkasan kalkulasi kondisi majemuk.',
            formulas: 'AVERAGEIFS, COUNTIFS, SUMIFS, Pivot Tables',
            rows: '150+ Program Kerja',
            features: 'Progress bar dinamis, Pivot Table analitik capaian, dan Executive Monitoring Dashboard.',
            tagBg: '#d6def5', tagText: '#1e1b4b', tagBorder: '#a0bdf0',
            img: '/images/excel/ex7.jpg',
            driveUrl: 'https://docs.google.com/spreadsheets/d/1-j2_PGC4cHCk_ISUY1ttiP0VnGt4Bh0q/edit?usp=drive_link&ouid=110996546682819261369&rtpof=true&sd=true' // Ganti dengan link spesifik file 7
        },
        {
            id: 8,
            title: 'Tracker Penagihan & Invoice',
            case: 'Financial Ledger',
            desc: 'Pelacakan status pembayaran, jatuh tempo, dan rekapitulasi tagihan invoice.',
            fullDetails: 'Workbook administratif keuangan untuk memantau status tagihan dengan pembanding tanggal real-time terhadap batas tempo pembayaran.',
            formulas: 'TODAY, IF, VLOOKUP, Conditional Formatting',
            rows: '155+ Data Invoice',
            features: 'Status tracking otomatis, formula pengecekan jatuh tempo, dan rekapitulasi piutang.',
            tagBg: '#fbf3ff', tagText: '#6b21a8', tagBorder: '#d8b4fe',
            img: '/images/excel/ex8.jpg',
            driveUrl: 'https://docs.google.com/spreadsheets/d/1NB75P_xK0DOJNQjnPr0Cz-XLkRVNrw9X/edit?usp=drive_link&ouid=110996546682819261369&rtpof=true&sd=true' // Ganti dengan link spesifik file 8
        },
        {
            id: 9,
            title: 'Rekap Kehadiran Dosen & Mahasiswa',
            case: 'Attendance Management',
            desc: 'Rekapitulasi presensi kelas dari puluhan partisipan secara terstruktur.',
            fullDetails: 'Workbook rekapitulasi data absensi perkuliahan untuk menghitung akumulasi kehadiran, izin, dan alpha secara otomatis per sesi pertemuan.',
            formulas: 'COUNTIF, SUM, AVERAGE, Pivot Tables',
            rows: '480+ Data Input (30 Orang)',
            features: 'Analisis tingkat kehadiran, rekap per-sesi, dan visualisasi tren kehadiran.',
            tagBg: '#f1cadc', tagText: '#831843', tagBorder: '#f472b6',
            img: '/images/excel/ex9.jpg',
            driveUrl: 'https://docs.google.com/spreadsheets/d/17IyepCA_fCHeOg0Ig_riaW-Zs5WxRoXl/edit?usp=drive_link&ouid=110996546682819261369&rtpof=true&sd=true' // Ganti dengan link spesifik file 9
        },
        {
            id: 10,
            title: 'Academic Correspondence System',
            case: 'Official Document Management',
            desc: 'Sistem manajemen surat-menyurat akademik dan arsip persuratan resmi.',
            fullDetails: 'Workbook khusus penataan arsip surat masuk dan keluar departemen akademik untuk memastikan kemudahan temu kembali dokumen dengan fungsi pencarian berbasis kriteria.',
            formulas: 'XLOOKUP, INDEX/MATCH, COUNTA, FILTER',
            rows: '80+ Dokumen Resmi',
            features: 'Pencatatan disposisi surat, indeks arsip digital, dan pelaporan berkala.',
            tagBg: '#ccfbf1', tagText: '#115e59', tagBorder: '#5eead4',
            img: '/images/excel/ex10.jpg',
            driveUrl: 'https://docs.google.com/spreadsheets/d/1TWtpyZbD_qeo6AikvM8iaC0v07TZ4xLr/edit?usp=drive_link&ouid=110996546682819261369&rtpof=true&sd=true' // Ganti dengan link spesifik file 10
        }
    ];

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.75;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="data-admin" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto py-24 overflow-hidden">
            
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
            >
                <div>
                    <span style={{ color: '#a0bdf0' }} className="font-mono text-xs font-black uppercase tracking-[0.25em] block mb-1">
                        06 / DATA & ADMINISTRATION
                    </span>
                    <h2 style={{ color: '#1e1b4b' }} className="font-display text-3xl md:text-4xl font-black tracking-tight">
                        Excel Workbooks & Admin Cases.
                    </h2>
                    <p style={{ color: '#64748b' }} className="font-sans text-sm md:text-base font-medium mt-2">
                        Structured Excels, data validation, and automated workflows for administrative management.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-slate-400 font-bold uppercase bg-slate-100 px-3 py-1.5 rounded-full">
                        [ {excelProjects.length} excel cases ]
                    </span>
                    {/* Tombol ke Folder Keseluruhan di Drive */}
                    <a 
                        href="https://drive.google.com/drive/folders/1Bm2cpBgahf8jdQGh6V0XifUoSo41s6HU?usp=sharing" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-5 py-2.5 bg-white border border-slate-200 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#1e1b4b] hover:border-[#1e1b4b] hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                    >
                        Explore Drive Folder ↗
                    </a>
                </div>
            </motion.div>

            {/* CONTAINER CAROUSEL DENGAN PADDING AMAN */}
            <div className="relative w-full flex items-center px-2 md:px-8">
                
                {/* Tombol Panah Kiri */}
                <button 
                    onClick={() => scroll('left')}
                    className="hidden md:flex absolute left-0 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-xl items-center justify-center font-mono font-bold text-lg text-[#1e1b4b] hover:bg-[#1e1b4b] hover:text-white transition-all cursor-pointer"
                >
                    &lt;
                </button>

                {/* Horizontal Scroll Container */}
                <div 
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory w-full px-4 md:px-12"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {excelProjects.map((item, idx) => (
                        <motion.div 
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            onClick={() => openModal(item)}
                            className="w-[280px] md:w-[320px] shrink-0 snap-start bg-white/90 backdrop-blur-xl p-5 rounded-[2rem] border border-slate-200 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-[#a0bdf0] transition-all duration-300 cursor-pointer group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-28 h-28 bg-[#f1cadc]/20 rounded-full blur-2xl pointer-events-none"></div>

                            <div>
                                {/* Gambar Preview Rasio 16:9 */}
                                <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-100 mb-3 border border-slate-100 relative">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-mono text-white">
                                        Excel Sheet
                                    </div>
                                </div>

                                <span 
                                    style={{ color: item.tagText, backgroundColor: item.tagBg, borderColor: item.tagBorder }} 
                                    className="font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border inline-block mb-2 shadow-xs"
                                >
                                    {item.case}
                                </span>
                                <h4 style={{ color: '#1e1b4b' }} className="font-display font-bold text-base mb-1.5 group-hover:text-[#a0bdf0] transition-colors truncate">
                                    {item.title}
                                </h4>
                                <p style={{ color: '#334155' }} className="font-sans text-xs leading-relaxed font-medium line-clamp-2">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-bold">
                                <span>Case Study 0{idx + 1}</span>
                                <span style={{ color: '#1e1b4b' }} className="group-hover:translate-x-1 transition-transform">
                                    View Detail ↗
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tombol Panah Kanan */}
                <button 
                    onClick={() => scroll('right')}
                    className="hidden md:flex absolute right-0 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-xl items-center justify-center font-mono font-bold text-lg text-[#1e1b4b] hover:bg-[#1e1b4b] hover:text-white transition-all cursor-pointer"
                >
                    &gt;
                </button>

            </div>

            {/* Tombol Navigasi Alternatif Khusus Mobile */}
            <div className="flex md:hidden justify-center gap-4 mt-4">
                <button 
                    onClick={() => scroll('left')}
                    className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center font-mono font-bold text-[#1e1b4b]"
                >
                    &lt;
                </button>
                <button 
                    onClick={() => scroll('right')}
                    className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center font-mono font-bold text-[#1e1b4b]"
                >
                    &gt;
                </button>
            </div>

            {/* MODAL DETAIL EXCEL WORKBOOK (MENGGUNAKAN `driveUrl` SPESIFIK FILE) */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] border border-slate-200 max-w-xl w-full p-5 md:p-6 shadow-2xl relative overflow-hidden max-h-[85vh] overflow-y-auto"
                        >
                            <button 
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#1e1b4b] hover:text-white transition-colors z-20 font-bold cursor-pointer text-xs"
                            >
                                ✕
                            </button>

                            {/* Gambar Header Modal (Kompak 16:9) */}
                            <div className="w-full aspect-video rounded-xl overflow-hidden mb-3.5 border border-slate-200 bg-slate-100 shadow-inner relative">
                                <img src={selectedItem.img} alt={selectedItem.title} className="w-full h-full object-cover" />
                            </div>

                            <span 
                                style={{ color: selectedItem.tagText, backgroundColor: selectedItem.tagBg, borderColor: selectedItem.tagBorder }} 
                                className="font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border inline-block mb-1 shadow-xs"
                            >
                                {selectedItem.case} · {selectedItem.rows}
                            </span>
                            <h3 style={{ color: '#1e1b4b' }} className="font-display font-black text-lg md:text-xl mb-2">
                                {selectedItem.title}
                            </h3>

                            <p style={{ color: '#334155' }} className="font-sans text-xs md:text-sm leading-relaxed font-medium mb-3.5">
                                {selectedItem.fullDetails}
                            </p>

                            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl mb-3.5 space-y-1 font-mono text-[11px]">
                                <div className="text-[#1e1b4b] font-bold">• Formula & Fungsi: {selectedItem.formulas}</div>
                                <div className="text-slate-600 font-medium">• Fitur Utama: {selectedItem.features}</div>
                            </div>

                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                <span className="font-mono text-[10px] text-slate-500 font-bold">Interactive Spreadsheet Preview</span>
                                {/* Menggunakan `selectedItem.driveUrl` yang spesifik per file */}
                                <a 
                                    href={selectedItem.driveUrl} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="px-4 py-2 bg-[#1e1b4b] text-white rounded-full font-display font-bold text-xs uppercase tracking-wider hover:bg-black transition-all shadow-sm cursor-pointer"
                                >
                                    Buka File Excel di Drive ↗
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}