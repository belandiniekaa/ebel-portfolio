import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <footer id="contact" className="relative w-full bg-[#1e1b4b] text-white py-12 px-6 md:px-16 overflow-hidden border-t border-slate-800">
            
            {/* AURA GLOW LEMBUT DI FOOTER */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#a0bdf0]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                
                {/* Sisi Kiri: Branding & Copyright */}
                <div className="text-center md:text-left">
                    <div className="font-display font-black text-xl tracking-tight flex items-center justify-center md:justify-start gap-2 mb-1">
                        <span>EBEL.</span>
                        <span className="w-2 h-2 rounded-full bg-[#a0bdf0]"></span>
                    </div>
                    <p className="font-mono text-xs text-slate-400">
                        © 2026 Eka Belandini. Built with Laravel, React & Tailwind CSS.
                    </p>
                </div>

                {/* Sisi Kanan: Quick Link / Socials dengan link asli kamu */}
                <div className="flex items-center gap-6 font-mono text-xs font-bold uppercase tracking-wider text-slate-300">
                    <a href="https://www.linkedin.com/in/belandiniekaa/" target="_blank" rel="noreferrer" className="hover:text-[#a0bdf0] transition-colors">
                        LinkedIn ↗
                    </a>
                    <a href="https://github.com/belandiniekaa" target="_blank" rel="noreferrer" className="hover:text-[#a0bdf0] transition-colors">
                        GitHub ↗
                    </a>
                    <a href="mailto:ebelandini@gmail.com" className="hover:text-[#a0bdf0] transition-colors">
                        Email ↗
                    </a>
                </div>

            </div>
        </footer>
    );
}