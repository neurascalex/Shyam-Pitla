
import React from 'react';
import { Upload, ShieldCheck, Rocket, Lock, Scale, UserCheck, HelpCircle } from 'lucide-react';
import { CTAButton } from '../App';

export default function HowItWorks() {
  return (
    <div className="pt-24 pb-32 geometric-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h1 className="text-5xl font-serif mb-6 leading-tight">Live in 7 days, with guided onboarding.</h1>
          <p className="text-xl text-slate-400 font-light">A disciplined process designed for clinical precision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { 
              step: "Step 1", 
              title: "Upload material", 
              icon: <Upload />, 
              desc: "Upload approved documents, talk transcripts, and papers to your private dashboard. No public scraping." 
            },
            { 
              step: "Step 2", 
              title: "Private testing", 
              icon: <ShieldCheck />, 
              desc: "We rigorously test tone, refusal behaviors, and handoff routing. You approve the 'Voice Profile'." 
            },
            { 
              step: "Step 3", 
              title: "Go live", 
              icon: <Rocket />, 
              desc: "Deploy via a single line of code on your site, a direct link, or a QR code. Start scaling safely." 
            }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-[#0a2e36]/10 border border-[#a3d9cf]/10 rounded-2xl">
              <div className="text-[#c5a059] text-sm uppercase tracking-widest font-semibold mb-4">{item.step}</div>
              <div className="w-12 h-12 rounded-lg bg-[#0a2e36] flex items-center justify-center text-[#c5a059] mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <section className="py-24 bg-[#0a2e36]/20 rounded-3xl p-12 border border-[#a3d9cf]/10">
          <h2 className="text-4xl font-serif mb-12 text-center">The Governance Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Approved Sources Only", 
                icon: <Lock className="w-5 h-5" />, 
                text: "The Digital Twin only 'knows' what you have explicitly taught it. It cannot invent advice." 
              },
              { 
                title: "Non-Clinical Scope", 
                icon: <Scale className="w-5 h-5" />, 
                text: "Strictly educational. Designed to triage, inform, and qualify—never to diagnose or prescribe." 
              },
              { 
                title: "Refusal & Handoff", 
                icon: <UserCheck className="w-5 h-5" />, 
                text: "When a query hits a clinical boundary, the Twin politely refuses and offers a professional handoff." 
              }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center space-x-3 text-[#a3d9cf]">
                  {item.icon}
                  <h4 className="font-medium">{item.title}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-32">
          <h2 className="text-4xl font-serif mb-16 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { q: "How secure is my data?", a: "We prioritize security. Our architecture is built with industry-standard data protection principles at the core. Data is encrypted and access is strictly audited." },
              { q: "Can it give medical advice?", a: "No. The system is designed with hard constraints. If asked for a diagnosis or treatment, it will provide a pre-approved refusal and redirect the user." },
              { q: "How much of my time is required?", a: "The 7-day sprint requires approximately 2-3 hours of your time for material selection and final approval testing." },
              { q: "What happens if I update my views?", a: "Your Twin is dynamic. You can update or remove sources in the dashboard, and the changes reflect instantly." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-[#a3d9cf]/10 pb-8">
                <h4 className="text-xl font-serif mb-3 flex items-start">
                  <HelpCircle className="w-5 h-5 text-[#c5a059] mr-3 mt-1 flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-slate-400 pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-32">
          <CTAButton />
        </div>
      </div>
    </div>
  );
}
