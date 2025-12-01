"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Download,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiSanity, 
  SiFigma, 
  SiGit,
  SiExpress,
  SiPostgresql
} from "react-icons/si";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function PitchDeck() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        
        
        
        {/* Two Column Layout */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Existing Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center px-5 py-2 rounded-full border border-blue-300/50 bg-white/60 backdrop-blur-md shadow-lg shadow-blue-500/10 text-blue-700 text-sm font-semibold tracking-wide"
            >
              <span className="relative flex h-2.5 w-2.5 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              WIDYA SCHOLARSHIP CANDIDATE 2025
            </motion.div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-none">
              Future <span className="text-gradient">Technopreneur</span>
            </h1>
            
            {/* Sub-headline */}
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed">
              Award-Winning Fullstack Developer | BNSP Certified | Freelancer
            </p>
          </motion.div>

          {/* RIGHT SIDE - Profile Picture & Description */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center space-y-6"
          >
            
            {/* Profile Picture */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/Rayhan.png" 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Description Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="glass-card p-8 max-w-md space-y-4 text-center"
            >
              <h3 className="text-2xl font-bold text-slate-900">Muhammad Rayhan Firdaus</h3>
              <p className="text-slate-600 leading-relaxed">
                Passionate about transforming innovative ideas into scalable digital solutions. 
                Combining technical expertise with business acumen to drive meaningful impact.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <div className="px-4 py-2 bg-blue-50 rounded-full">
                  <span className="text-sm font-semibold text-blue-700"> XII - Vocational High School</span>
                </div>
                <div className="px-4 py-2 bg-cyan-50 rounded-full">
                  <span className="text-sm font-semibold text-cyan-700">17 Years Old</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowRight className="rotate-90 w-5 h-5" />
        </motion.div>
      </section>

      {/* ===== SECTION 2: HYBRID PROFILE ===== */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto">
          
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              My Profile
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light italic">
              Bridging Academic Excellence with Professional Integrity
            </p>
          </motion.div>

          <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Connector Line */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full shadow-lg shadow-blue-400/50 z-0 animate-pulse" 
                 style={{ animationDuration: '2s' }} />
            
            {/* Left Card - Academic */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="glass-card p-10 relative z-10 group hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Academic Excellence</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-base">SMK Student High Achiever</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-base">Active in Tech Organizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-base">Discipline & Fast Learner</span>
                </li>
              </ul>
            </motion.div>

            {/* Right Card - Professional */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="glass-card p-10 relative z-10 group hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Professional Integrity</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="text-base">Freelance Fullstack Web Developer at PT. Kandara Digita Kreatif</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="text-base">Handling Real Client Projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="text-base">Production-Level Codebase</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: PROVEN COMPETENCE (BENTO GRID) ===== */}
      <section className="py-32 px-6 bg-slate-50/80">
        <div className="max-w-7xl mx-auto">
          
          <motion.h2 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center"
          >
            Proven Competence
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            
            {/* Card 1: BNSP Certified (Large - Spans 2 Columns) */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-2 glass-card p-10 flex flex-col md:flex-row items-center gap-8 group hover:border-yellow-200 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center text-white shrink-0 shadow-xl shadow-yellow-500/40 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                  BNSP Certified Mobile Developer
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Officially recognized by the State (Badan Nasional Sertifikasi Profesi).
                  <br />
                  <span className="font-semibold text-yellow-700">Valid until 2028.</span>
                </p>
              </div>
            </motion.div>

            {/* Card 2: Silver Medalist */}
            <motion.div 
              variants={fadeInUp}
              className="glass-card p-10 flex flex-col justify-between group hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-slate-400 to-slate-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-slate-400/30 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  2x Silver Medalist
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  National Web Design Competition (OTN). Consistent High Performer (Year 1 & Year 2).
                </p>
              </div>
            </motion.div>

            {/* Card 3: Tech Stack (Spans 3 Columns) */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-3 glass-card p-10 group hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <Sparkles className="w-6 h-6 text-blue-500" />
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Technical Arsenal
                </h3>
                <Sparkles className="w-6 h-6 text-cyan-500" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
                {[
                  { 
                    name: 'React', 
                    color: 'from-blue-400 to-blue-600',
                    icon: <SiReact className="w-12 h-12" />
                  },
                  { 
                    name: 'Next.js', 
                    color: 'from-slate-700 to-slate-900',
                    icon: <SiNextdotjs className="w-12 h-12" />
                  },
                  { 
                    name: 'Tailwind', 
                    color: 'from-cyan-400 to-cyan-600',
                    icon: <SiTailwindcss className="w-12 h-12" />
                  },
                  { 
                    name: 'Sanity CMS', 
                    color: 'from-red-500 to-red-700',
                    icon: <SiSanity className="w-12 h-12" />
                  },
                  { 
                    name: 'Figma', 
                    color: 'from-purple-500 to-purple-700',
                    icon: <SiFigma className="w-12 h-12" />
                  },
                  { 
                    name: 'Git', 
                    color: 'from-orange-500 to-orange-700',
                    icon: <SiGit className="w-12 h-12" />
                  },
                  { 
                    name: 'Express', 
                    color: 'from-gray-600 to-gray-800',
                    icon: <SiExpress className="w-12 h-12" />
                  },
                  { 
                    name: 'PostgreSQL', 
                    color: 'from-blue-600 to-blue-800',
                    icon: <SiPostgresql className="w-12 h-12" />
                  }
                ].map((tech) => (
                  <div key={tech.name} className="group/tech cursor-default flex flex-col items-center gap-3">
                    <div className={`bg-gradient-to-r ${tech.color} text-white p-4 rounded-2xl shadow-lg group-hover/tech:scale-110 group-hover/tech:rotate-6 transition-all duration-300`}>
                      {tech.icon}
                    </div>
                    <span className={`text-lg font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 4: THE VISION ===== */}
      <section className="py-32 px-6 bg-gradient-to-b from-slate-50/80 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                Why Binus <span className="text-gradient">Information Systems?</span>
              </h2>
              
              <p className="text-xl text-slate-700 mb-10 leading-relaxed font-light italic">
                "I have mastered the Technical Implementation (Coding). Now I crave the Business Strategy."
              </p>
              
              <div className="glass-card p-8 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  My Goal
                </h4>
                <p className="text-blue-800 text-lg leading-relaxed">
                  To transform lines of code into sustainable, profitable business solutions.
                </p>
              </div>
            </motion.div>

            {/* Right: Visual Diagram */}
            <motion.div 
              variants={scaleIn}
              className="glass-card p-6 sm:p-8 lg:p-12 flex items-center justify-center overflow-x-auto"
            >
              <div className="flex items-center gap-2 sm:gap-4 lg:gap-8 min-w-fit">
                
                {/* Code Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex flex-col items-center gap-2 sm:gap-3"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl lg:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-500/40">
                    <Code2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-10 lg:h-10" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-slate-600 font-semibold">Code</span>
                </motion.div>
                
                {/* Arrow */}
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-400 animate-pulse shrink-0" style={{ animationDuration: '2s' }} />
                
                {/* Strategy Icon */}
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  className="flex flex-col items-center gap-2 sm:gap-3"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl lg:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/50">
                    <Layers className="w-6 h-6 sm:w-7 sm:h-7 lg:w-10 lg:h-10" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-blue-700 font-bold">Strategy</span>
                </motion.div>
                
                {/* Arrow */}
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-green-400 animate-pulse shrink-0" style={{ animationDuration: '2s' }} />
                
                {/* Profit Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex flex-col items-center gap-2 sm:gap-3"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-green-500/40">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-10 lg:h-10" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-green-700 font-semibold">Profit</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: CALL TO ACTION (FOOTER) ===== */}
      <footer className="relative py-32 px-6 bg-slate-900 text-white overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          
          {/* Headline */}
          <h2 className="text-6xl md:text-8xl font-extrabold mb-16 tracking-tight leading-none">
            READY TO{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              CONTRIBUTE
            </span>
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <motion.a 
              href="https://rayhanf-portfolio.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg shadow-2xl shadow-blue-500/50 transition-all flex items-center gap-3 hover:shadow-blue-400/70"
            >
              View Professional Portfolio
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
            
            <motion.a 
              href="/files/Resume-Rayhan.pdf" 
              download="Resume-Rayhan.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-lg transition-all hover:bg-white/20 hover:border-white/50 flex items-center gap-3 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </div>
          
          {/* Copyright */}
          <div className="pt-12 border-t border-slate-700/50 text-slate-400 text-sm">
            © 2025 Muhammad Rayhan Firdaus. Built with React & Tailwind.
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
