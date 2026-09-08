import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AcademicSection from '../Components/AcademicSection';
import ExperienceSection from '../Components/ExperienceSection';
import WorkSection from '../Components/WorkSection';
import OrganizationSection from '../Components/OrganizationSection';
import CommitteeSection from '../Components/CommitteeSection';
import DataAdminSection from '../Components/DataAdminSection';
import DocumentationSection from '../Components/DocumentationSection';
import ToolboxSection from '../Components/ToolboxSection';
import ContactSection from '../Components/ContactSection';

export default function Welcome() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id], div[id]');

        const handleScroll = () => {
            const scrollPos = window.scrollY + 200;

            sections.forEach((sec) => {
                const top = sec.offsetTop;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (scrollPos >= top && scrollPos < top + height) {
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToAcademic = () => {
        const el = document.getElementById('academic');

        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Navigasi dengan link CV mengarah ke file PDF di public folder (membuka tab baru)
    const navItems = [
        { id: 'academic', label: 'Academic' },
        { id: 'experience', label: 'Experience' },
        { id: 'work', label: 'Project' },
        { id: 'organization', label: 'Organization' },
        { id: 'activities', label: 'Activities' },
        { id: 'data-admin', label: 'Data & Admin' },
        { id: 'documentation', label: 'System Design' },
        { id: 'toolbox', label: 'Toolbox' },
        { id: 'cv', label: 'CV ↗', isButton: true, url: '/cv-eka-belandini.pdf' },
    ];

    const containerFade = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemFade = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 70,
                damping: 20
            }
        }
    };

    return (
        <>
            <Head title="Eka Belandini — Portfolio & Digital Archive" />

            <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden relative selection:bg-[#f1cadc] selection:text-[#1e1b4b]">

                {/* =====================================================
                    RESPONSIVE FLOATING NAVBAR
                ===================================================== */}
                <motion.nav
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="fixed top-6 right-6 md:right-12 z-50 w-[92%] sm:w-auto max-w-4xl"
                >
                    {/* ================= DESKTOP NAVBAR ================= */}
                    <div className="hidden lg:flex items-center justify-end px-4 py-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-full shadow-[0_10px_30px_rgba(160,189,240,0.25)]">
                        <div className="flex items-center gap-1.5 xl:gap-2 text-[9px] xl:text-[10px] font-mono font-bold uppercase tracking-wider">
                            {navItems.map((item) => {
                                if (item.isButton) {
                                    return (
                                        <a
                                            key={item.id}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-1 bg-[#1e1b4b] text-white rounded-full font-black tracking-wider hover:bg-black transition-all shadow-sm cursor-pointer ml-1 whitespace-nowrap"
                                        >
                                            {item.label}
                                        </a>
                                    );
                                }

                                const isActive = activeSection === item.id;

                                return (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        style={{
                                            color: isActive ? '#1e1b4b' : '#475569',
                                            backgroundColor: isActive ? '#fbf3ff' : 'transparent',
                                            borderColor: isActive ? '#1e1b4b' : 'transparent'
                                        }}
                                        className={`px-2 py-1 rounded-full border transition-all duration-300 hover:text-[#1e1b4b] hover:bg-slate-100 whitespace-nowrap ${
                                            isActive
                                                ? 'shadow-xs font-black scale-105 border-b-2'
                                                : 'border-transparent'
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* ================= MOBILE / TABLET NAVBAR ================= */}
                    <div className="lg:hidden relative w-full">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-full shadow-[0_10px_30px_rgba(160,189,240,0.25)]">
                            <a
                                href="#hero"
                                onClick={() => setIsMenuOpen(false)}
                                className="font-black text-[#1e1b4b] text-xs tracking-[0.2em] uppercase"
                            >
                                EKA BELANDINI
                            </a>

                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle navigation menu"
                                aria-expanded={isMenuOpen}
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1e1b4b] text-white hover:bg-black transition-all"
                            >
                                {isMenuOpen ? (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* ================= MOBILE DROPDOWN ================= */}
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 right-0 mt-2 p-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-[0_10px_30px_rgba(160,189,240,0.25)]"
                            >
                                <div className="flex flex-col gap-1">
                                    {navItems.map((item) => {
                                        if (item.isButton) {
                                            return (
                                                <a
                                                    key={item.id}
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="flex items-center justify-center px-4 py-3 mt-1 bg-[#1e1b4b] text-white rounded-2xl font-black text-[10px] tracking-[0.15em] uppercase hover:bg-black transition-all"
                                                >
                                                    {item.label}
                                                </a>
                                            );
                                        }

                                        const isActive = activeSection === item.id;

                                        return (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                style={{
                                                    color: isActive ? '#1e1b4b' : '#475569',
                                                    backgroundColor: isActive ? '#fbf3ff' : 'transparent'
                                                }}
                                                className={`px-4 py-3 rounded-2xl border border-transparent font-mono font-bold text-[10px] uppercase tracking-wider transition-all ${
                                                    isActive ? 'font-black' : ''
                                                } hover:bg-slate-100 hover:text-[#1e1b4b]`}
                                            >
                                                {item.label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.nav>

                {/* =====================================================
                    HERO SECTION
                ===================================================== */}
                <section
                    id="hero"
                    className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
                >
                    {/* AURA GLOW */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 10,
                            ease: "easeInOut",
                            repeat: Infinity
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[550px] h-[300px] md:h-[550px] bg-gradient-to-tr from-[#f1cadc]/40 via-white to-[#a0bdf0]/40 rounded-full blur-[120px] pointer-events-none z-0"
                    />

                    {/* KONTEN UTAMA HERO */}
                    <motion.div
                        variants={containerFade}
                        initial="hidden"
                        animate="visible"
                        className="relative z-30 flex flex-col items-center text-center max-w-4xl mx-auto"
                    >
                        {/* Glass Badge */}
                        <motion.div
                            variants={itemFade}
                            className="mb-9 px-5 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm"
                        >
                            <span
                                style={{ color: '#1e1b4b' }}
                                className="font-black text-[10px] md:text-xs uppercase tracking-[0.3em]"
                            >
                                System Analyst | Business Process, System Design & Technical Documentation
                            </span>
                        </motion.div>

                        {/* Judul Utama */}
                        <motion.div
                            variants={itemFade}
                            animate={{ y: [-4, 4, -4] }}
                            transition={{
                                duration: 6,
                                ease: "easeInOut",
                                repeat: Infinity
                            }}
                            className="flex flex-col items-center mb-6"
                        >
                            <div className="text-sm md:text-lg lg:text-xl font-black tracking-tighter text-[#1e1b4b] uppercase mb-6">
                                Portfolio
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#f1cadc] via-[#a0bdf0] to-[#1e1b4b] uppercase leading-tight">
                                Eka Belandini
                            </h1>
                        </motion.div>

                        {/* DESKRIPSI */}
                        <motion.p
                            variants={itemFade}
                            style={{ color: '#1e1b4b' }}
                            className="font-bold text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-16 opacity-95"
                        >
                            I analyze needs, design systems & turn requirements into solutions.
                        </motion.p>

                        {/* Tombol Aksi */}
                        <motion.div
                            variants={itemFade}
                            className="flex flex-wrap justify-center items-center gap-4"
                        >
                            <motion.button
                                onClick={handleScrollToAcademic}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-slate-200 text-[#1e1b4b] px-7 py-3.5 rounded-full font-black text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all shadow-[0_10px_25px_rgba(160,189,240,0.25)] cursor-pointer"
                            >
                                <span className="relative z-10">
                                    Explore Portfolio
                                </span>
                                <span className="relative z-10 w-8 h-8 rounded-full bg-[#1e1b4b] flex items-center justify-center shadow-xs text-white group-hover:bg-[#a0bdf0] group-hover:text-[#1e1b4b] transition-colors">
                                    ↓
                                </span>
                            </motion.button>

                            {/* Tombol Download/Preview CV di Hero */}
                            <a
                                href="/cv-eka-belandini.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-7 py-3.5 bg-[#1e1b4b] text-white rounded-full font-black text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-black transition-all shadow-md flex items-center gap-2 cursor-pointer"
                            >
                                <span>Download CV</span>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* =====================================================
                    SECTION-SECTION UTAMA PORTFOLIO
                ===================================================== */}
                <div id="academic" className="bg-white border-t border-slate-200 relative z-20">
                    <AcademicSection />
                </div>
                <div id="experience" className="bg-[#fcf8fc] border-t border-slate-200">
                    <ExperienceSection />
                </div>
                <div id="work" className="bg-white border-t border-slate-200">
                    <WorkSection />
                </div>
                <div id="organization" className="bg-[#fcf8fc] border-t border-slate-200">
                    <OrganizationSection />
                </div>
                <div id="activities" className="bg-white border-t border-slate-200">
                    <CommitteeSection />
                </div>
                <div id="data-admin" className="bg-[#fcf8fc] border-t border-slate-200">
                    <DataAdminSection />
                </div>
                <div id="documentation" className="bg-white border-t border-slate-200">
                    <DocumentationSection />
                </div>
                <div id="toolbox" className="bg-[#fcf8fc] border-t border-slate-200">
                    <ToolboxSection />
                </div>
                <ContactSection />

            </div>
        </>
    );
}