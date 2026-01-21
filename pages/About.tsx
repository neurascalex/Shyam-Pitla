
import React from 'react';
import { Shield, Target, Award, Users } from 'lucide-react';
import { CTAButton } from '../App';

export default function About() {
  return (
    <div className="pt-24 pb-32 geometric-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl font-serif mb-8 leading-tight text-[#f8fafc]">Bridging clinical excellence and technical scale.</h1>
            <div className="space-y-6">
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                I’m Shyam Pitla — Founder of NeuraScaleX. I architect Clinician Digital Twins that allow your expertise to be present for your patients 24/7, without you having to be.
              </p>
              <p className="text-slate-400 leading-relaxed font-light">
                We believe clinicians don’t need more "tools" — they need a governed digital presence. I build AI that is identity-locked to your verified wisdom, designed specifically to know exactly where its knowledge ends and where your clinical intervention begins.
              </p>
              <div className="p-6 bg-[#0a2e36]/30 border-l-2 border-[#c5a059] rounded-r-2xl mb-8">
                <h4 className="text-[#c5a059] text-[10px] uppercase tracking-widest font-bold mb-2">What we ship</h4>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  Bounded answers, source-led responses, and a reviewable workflow that ensures your digital twin never drifts from your voice or your standards.
                </p>
              </div>
            </div>
            <CTAButton />
          </div>
          <div className="relative group order-1 md:order-2">
            <div className="absolute -inset-6 bg-[#c5a059]/10 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-80 transition duration-700"></div>
            <div className="relative aspect-[4/5] bg-[#0a2e36] rounded-[3rem] border border-[#a3d9cf]/10 overflow-hidden shadow-2xl">
               <img 
                 src="https://theimpactshow.com/wp-content/uploads/2024/04/Shyam-Kumar2.png" 
                 alt="Shyam Pitla - Clinical Product Architect" 
                 className="w-full h-full object-cover grayscale-[0.2] contrast-[1.05] scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                 style={{ objectPosition: 'center 10%' }}
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#041b1f] via-transparent to-[#c5a059]/10 opacity-70"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#041b1f] via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                 <h3 className="text-2xl font-serif italic text-[#c5a059] mb-4">“The product isn't the AI—it's the trust preserved at scale.”</h3>
                 <div className="space-y-1">
                   <div className="text-xs uppercase tracking-[0.2em] text-[#f8fafc] font-bold">Shyam Pitla</div>
                   <div className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Founder, NeuraScaleX • Product Architect</div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        <section className="mb-32">
          <h2 className="text-4xl font-serif mb-12 text-center text-[#f8fafc]">Operating Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Identity Continuity", icon: <Award />, text: "Your twin must echo your specific nuance and standards." },
              { title: "Safe Routing", icon: <Shield />, text: "Triage is the goal. Advice is strictly prohibited." },
              { title: "Approved Vaults", icon: <Target />, text: "Built exclusively from your verified clinical materials." },
              { title: "Absolute Control", icon: <Users />, text: "Total clinician governance over the knowledge layer." }
            ].map((principle, i) => (
              <div key={i} className="p-8 border border-[#a3d9cf]/10 bg-[#0a2e36]/5 rounded-2xl text-center space-y-4 hover:border-[#c5a059]/20 transition-all">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#0a2e36] flex items-center justify-center text-[#c5a059]">
                  {principle.icon}
                </div>
                <h4 className="text-xl font-serif text-[#f8fafc]">{principle.title}</h4>
                <p className="text-sm text-slate-400 font-light">{principle.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
