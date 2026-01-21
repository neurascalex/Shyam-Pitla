
import React from 'react';
import { ShieldCheck, ArrowRight, Activity, Database, Scale, UserCheck, Shield } from 'lucide-react';
import { CTAButton } from '../App';

export default function Home() {
  return (
    <div className="geometric-lines">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e36]/40 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full border border-[#a3d9cf]/20 bg-[#a3d9cf]/5 text-[#a3d9cf] text-xs font-medium uppercase tracking-widest">
            Approved sources only • Non-clinical by design • Live in 7 days
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#f8fafc] mb-8 leading-tight">
            Scale your clinical expertise — without diluting trust.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-6 leading-relaxed max-w-3xl mx-auto">
            I help health professionals scale safely using Clinician Digital Twins — built only from your approved material, expressed in your voice, designed to know where to stop.
          </p>
          <p className="text-sm text-slate-500 italic mb-12">
            Non-clinical by design. Approved sources only. Built to refuse diagnosis and treatment advice.
          </p>
          <CTAButton />
        </div>
      </section>

      {/* TENSION SECTION */}
      <section className="py-24 bg-[#0a2e36]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8 text-[#f8fafc]">The Friction of Influence</h2>
              <ul className="space-y-6">
                {[
                  "Your expertise is scattered across platforms, documents, and talks",
                  "Patients arrive misinformed — and your team absorbs the friction",
                  "Generic AI can generate answers in your domain without your standards",
                  "You repeat yourself, defend boundaries, and burn time"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-4 mt-1.5 h-1.5 w-1.5 bg-[#c5a059] rounded-full flex-shrink-0" />
                    <span className="text-slate-300 text-lg font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border border-[#a3d9cf]/10 flex items-center justify-center p-8">
                <div className="aspect-square w-full rounded-full border border-[#a3d9cf]/20 bg-[#a3d9cf]/5 flex items-center justify-center animate-pulse">
                  <Activity className="w-16 h-16 text-[#c5a059] opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-16">A Clinician Digital Twin — not a chatbot.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { label: "Approved Source Vault", desc: "Built only from your approved sources" },
              { label: "Clinician Voice + Boundaries", desc: "Expressed in your voice and standards" },
              { label: "Safe Answers + Routing", desc: "Refuses clinical advice and knows where to stop" }
            ].map((step, i) => (
              <div key={i} className="p-8 border border-[#a3d9cf]/10 bg-[#041b1f] group hover:border-[#c5a059]/30 transition-all">
                <div className="text-[#c5a059] font-serif text-3xl mb-4 italic">0{i+1}</div>
                <h3 className="text-xl font-medium mb-2 text-[#f8fafc]">{step.label}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="px-4 py-2 bg-[#a3d9cf]/5 border border-[#a3d9cf]/10 rounded-full">Website Embed</span>
            <span className="px-4 py-2 bg-[#a3d9cf]/5 border border-[#a3d9cf]/10 rounded-full">Direct Link</span>
            <span className="px-4 py-2 bg-[#a3d9cf]/5 border border-[#a3d9cf]/10 rounded-full">QR Code Entry</span>
          </div>
        </div>
      </section>

      {/* WHY ME (IMAGE INTEGRATED) */}
      <section className="py-32 bg-[#0a2e36]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif mb-8 text-[#f8fafc]">Architecting Clinical Wisdom.</h2>
              <p className="text-slate-300 font-light mb-8 leading-relaxed">
                As Founder & Product Architect, I translate years of clinical expertise into governed technical systems. My work is built on a single conviction: scaling your knowledge should never mean diluting your standards. I sit at the intersection of clinical excellence and technical scale to building the infrastructure for the Trust Economy.
              </p>
              <ul className="space-y-8">
                {[
                  { title: "GOVERNANCE FIRST", desc: "Approved sources only. Refuses unsupported answers. Routes to the right next step." },
                  { title: "IDENTITY CONTINUITY", desc: "A digital twin should be an extension of your professional persona, not a replacement." },
                  { title: "RAPID PRECISION", desc: "Private preview + onboarding support. Live on your site in 7 days." }
                ].map((item, i) => (
                  <li key={i}>
                    <h4 className="text-[#c5a059] font-medium mb-1 uppercase tracking-widest text-xs">{item.title}</h4>
                    <p className="text-slate-400 font-light text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group order-1 md:order-2">
               <div className="absolute -inset-2 bg-[#c5a059]/15 rounded-[2.5rem] blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>
               <div className="relative w-full aspect-[4/5] bg-[#041b1f] rounded-[2.5rem] border border-[#a3d9cf]/10 overflow-hidden shadow-2xl">
                  <img 
                    src="https://theimpactshow.com/wp-content/uploads/2024/04/Shyam-Kumar2.png" 
                    alt="Shyam Pitla" 
                    className="w-full h-full object-cover grayscale-[0.1] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                    style={{ objectPosition: 'center 10%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041b1f] via-transparent to-[#041b1f]/10 opacity-60 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#041b1f] via-[#041b1f]/90 to-transparent">
                    <div className="text-[#a3d9cf] mb-2 uppercase tracking-widest text-[10px] font-bold">Category Architect</div>
                    <div className="text-2xl font-serif leading-snug text-[#f8fafc]">Shyam Pitla</div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Founder & Product Architect</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">If your name carries trust, your digital presence must match it.</h2>
          <div className="flex flex-col items-center space-y-6">
            <CTAButton />
          </div>
        </div>
      </section>
    </div>
  );
}
