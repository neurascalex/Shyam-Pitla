
import React from 'react';
import { CheckCircle2, Quote } from 'lucide-react';
import { CTAButton } from '../App';

const CaseStudy = ({ title, before, after, installed, quote }: any) => (
  <div className="p-8 md:p-12 border border-[#a3d9cf]/10 bg-[#0a2e36]/10 rounded-2xl mb-12">
    <h3 className="text-3xl font-serif mb-8 text-[#f8fafc]">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      <div>
        <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Before</div>
        <p className="text-slate-300 font-light leading-relaxed">{before}</p>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">After</div>
        <p className="text-slate-300 font-light leading-relaxed">{after}</p>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-[#c5a059] mb-2">Installed</div>
        <p className="text-slate-300 font-light leading-relaxed">{installed}</p>
      </div>
    </div>
    <div className="border-t border-[#a3d9cf]/10 pt-8 flex items-start space-x-4 italic font-serif text-xl text-[#a3d9cf]">
      <Quote className="w-8 h-8 flex-shrink-0 opacity-20" />
      <p>“{quote}”</p>
    </div>
  </div>
);

export default function Proof() {
  return (
    <div className="pt-24 pb-32 geometric-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h1 className="text-5xl font-serif mb-6 leading-tight">Proof that trust scales when identity is preserved.</h1>
          <p className="text-xl text-slate-400 font-light">Real transformations for clinicians who value standards above volume.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <CaseStudy 
            title="The Overwhelmed Specialist"
            before="Clinician spending 12 hours/week answering repeat educational questions via email/DM."
            after="90% reduction in repeat queries; inquiries arriving at the clinic are now qualified and informed."
            installed="Digital Twin embedded on 'Education' page + auto-response on registration emails."
            quote="I was terrified of sounding like a robot. Now I'm relieved that I'm present even when I'm in surgery."
          />
          
          <CaseStudy 
            title="The Global Programme Lead"
            before="Scaling a CPD course was limited by the clinician's ability to host live Q&A sessions."
            after="24/7 student support with 100% adherence to the course methodology."
            installed="Course Portal Twin with specific refusal rules for non-curriculum medical advice."
            quote="It protects my standards. Students get immediate clarity on my teaching, but it knows where to stop."
          />

          <CaseStudy 
            title="The Public Health Author"
            before="Public presence leading to mass misinterpretation of the author's nuanced findings."
            after="A single, verified 'voice of truth' for the public to query the author's body of work."
            installed="Verification Twin via Link-in-Bio and QR codes on printed material."
            quote="This feels like me. It captures the nuance I spent years writing, without the risk of generic AI hallucination."
          />
        </div>

        <section className="mt-32 py-24 border-t border-[#a3d9cf]/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-12">What’s included in the pilot fit process</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
              {[
                "1-on-1 Persona Discovery",
                "Knowledge Base Audit",
                "Custom Refusal Mapping",
                "Private Beta Testing Phase",
                "Deployment Support",
                "Quarterly Governance Review"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a059]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <CTAButton />
          </div>
        </section>
      </div>
    </div>
  );
}
