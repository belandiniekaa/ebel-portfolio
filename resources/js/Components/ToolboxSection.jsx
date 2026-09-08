import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ToolboxSection() {
    const [activeFilter, setActiveFilter] = useState('All');

    // Daftar tools yang disatukan jadi 4 kategori clean dengan tambahan software kolaborasi
    const tools = [
        // 1. System Design
        { name: "Figma", category: "System Design", level: "Advanced", icon: "🎨" },
        { name: "Lucidchart", category: "System Design", level: "Advanced", icon: "📊" },
        { name: "Draw.io", category: "System Design", level: "Advanced", icon: "📈" },
        { name: "Postman", category: "System Design", level: "Advanced", icon: "🚀" },
        { name: "Canva", category: "System Design", level: "Advanced", icon: "✨" },

        // 2. Database
        { name: "MySQL", category: "Database", level: "Advanced", icon: "🗄️" },
        { name: "SQL Server", category: "Database", level: "Advanced", icon: "🗃️" },

        // 3. Development
        { name: "Laravel", category: "Development", level: "Advanced", icon: "🌐" },
        { name: "React.js", category: "Development", level: "Advanced", icon: "⚛️" },
        { name: "CodeIgniter 3", category: "Development", level: "Advanced", icon: "🔥" },
        { name: "Tailwind CSS", category: "Development", level: "Advanced", icon: "🎨" },
        { name: "Git / GitHub", category: "Development", level: "Advanced", icon: "🐙" },

        // 4. Productivity & Admin (Gabungan Dokumen, Spreadsheet, & Workspace)
        { name: "Microsoft Excel", category: "Productivity & Admin", level: "Advanced", icon: "📊" },
        { name: "Google Spreadsheet", category: "Productivity & Admin", level: "Advanced", icon: "📋" },
        { name: "Microsoft Word", category: "Productivity & Admin", level: "Advanced", icon: "📝" },
        { name: "Google Docs", category: "Productivity & Admin", level: "Advanced", icon: "📄" },
        { name: "Google Drive", category: "Productivity & Admin", level: "Advanced", icon: "📁" },
        { name: "Notion", category: "Productivity & Admin", level: "Advanced", icon: "📓" }
    ];

    // Hanya 4 kategori utama yang sangat clean & profesional
    const categories = [
        'All', 
        'System Design', 
        'Database', 
        'Development', 
        'Productivity & Admin'
    ];

    const filteredTools = activeFilter === 'All' 
        ? tools 
        : tools.filter(tool => tool.category === activeFilter);

    return (
        <section id="toolbox" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto py-24">
            
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
            >
                <div>
                    <span style={{ color: '#a0bdf0' }} className="font-mono text-xs font-black uppercase tracking-[0.25em] block mb-1">
                        03 / TOOLBOX & TECH STACK
                    </span>
                    <h2 style={{ color: '#1e1b4b' }} className="font-display text-3xl md:text-4xl font-black tracking-tight">
                        Technologies & software I use.
                    </h2>
                </div>

                {/* Tombol Kategori Filter (Rapi 4 kategori utama) */}
                <div className="flex flex-wrap gap-1.5 bg-white/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            style={{
                                backgroundColor: activeFilter === cat ? '#1e1b4b' : 'transparent',
                                color: activeFilter === cat ? '#ffffff' : '#64748b'
                            }}
                            className="px-3.5 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Grid List Tools dengan Animasi */}
            <motion.div 
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
            >
                <AnimatePresence>
                    {filteredTools.map((tool, idx) => (
                        <motion.div
                            key={tool.name}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: idx * 0.03 }}
                            whileHover={{ scale: 1.08, y: -5 }}
                            className="bg-white/90 backdrop-blur-xl rounded-[2rem] border border-slate-200 p-5 shadow-sm hover:shadow-xl hover:border-[#a0bdf0] transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#f1cadc]/20 rounded-full blur-xl pointer-events-none"></div>

                            {/* Icon dengan Animasi Pulsa Halus */}
                            <motion.div 
                                animate={{ scale: [1, 1.08, 1] }}
                                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: idx * 0.2 }}
                                className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl font-mono font-bold text-[#1e1b4b] mb-3 group-hover:bg-[#d6def5] transition-colors shadow-inner"
                            >
                                {tool.icon}
                            </motion.div>

                            <h4 style={{ color: '#1e1b4b' }} className="font-display font-bold text-sm mb-0.5 truncate w-full">
                                {tool.name}
                            </h4>
                            <span className="font-mono text-[9px] text-slate-400 font-semibold uppercase tracking-wider truncate w-full">
                                {tool.category}
                            </span>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

        </section>
    );
}