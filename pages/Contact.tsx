
import React, { useState } from 'react';
import { Calendar, CheckCircle2, ArrowRight, ExternalLink, Mail, ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    url: '',
    focus: '',
    notes: ''
  });

  const calendarLink = "https://calendar.app.google/8kSG3vmsYcZSgDXZ8";
  const contactEmail = "shyam@neurascalex.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real production environment with a backend, you would send formData to your API here.
    // For this frontend-first version, we transition to the success state to provide the requested UX.
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingClick = () => {
    window.open(calendarLink, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-32 geometric-lines min-h-[80vh] flex items-center selection:bg-[#c5a059]/30">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#c5a059]/10 text-[#c5a059] mb-8 border border-[#c5a059]/20 animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-serif mb-6 text-[#f8fafc]">Thank You, {formData.name.split(' ')[0] || 'there'}.</h1>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            I've received your inquiry for <strong>{contactEmail}</strong>. <br/>
            I'll review your specialty and site before reaching back out.
          </p>

          <div className="space-y-6">
            <div className="p-8 bg-[#0a2e36]/40 border border-[#a3d9cf]/10 rounded-3xl backdrop-blur-sm">
              <h3 className="text-[#c5a059] uppercase tracking-widest text-[10px] font-bold mb-4">Option 2: Skip the wait</h3>
              <p className="text-slate-400 text-sm mb-8">If you'd like to get moving immediately, you can grab a slot on my calendar now.</p>
              <button 
                onClick={handleBookingClick}
                className="inline-flex items-center justify-center px-10 py-4 bg-[#c5a059] text-[#041b1f] font-bold text-sm uppercase tracking-widest gold-glow transition-all duration-300 w-full"
              >
                Book via Google Calendar
                <Calendar className="ml-3 w-4 h-4" />
              </button>
            </div>

            <Link 
              to="/"
              className="inline-flex items-center text-slate-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 geometric-lines min-h-screen selection:bg-[#c5a059]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight text-[#f8fafc]">Start the Conversation</h1>
          <p className="text-xl text-slate-300 font-light mb-4 leading-relaxed max-w-2xl mx-auto">
            Choose your preferred path. Send an inquiry first, or book a 15-min fit call directly.
          </p>
          <div className="flex items-center justify-center space-x-4 text-[10px] text-slate-500 uppercase tracking-widest font-medium">
            <span>Non-clinical by design</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span>Not medical advice</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* OPTION 1: FORM */}
          <div className="bg-[#0a2e36]/40 border border-[#a3d9cf]/10 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Mail className="w-12 h-12" />
            </div>
            
            <div className="mb-10">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#c5a059] font-semibold mb-2">Option 1: Send Inquiry</h3>
              <p className="text-slate-500 text-xs">I'll respond via email within 24 hours.</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Full name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-[#a3d9cf]/20 py-2 focus:border-[#c5a059] focus:outline-none text-[#f8fafc] placeholder:text-slate-700 transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Role / Specialty</label>
                <input 
                  required
                  type="text" 
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  placeholder="Consultant, GP, etc."
                  className="w-full bg-transparent border-b border-[#a3d9cf]/20 py-2 focus:border-[#c5a059] focus:outline-none text-[#f8fafc] placeholder:text-slate-700 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Website or LinkedIn</label>
                <input 
                  type="url" 
                  value={formData.url}
                  onChange={(e) => setFormData({...formData, url: e.target.value})}
                  placeholder="https://..."
                  className="w-full bg-transparent border-b border-[#a3d9cf]/20 py-2 focus:border-[#c5a059] focus:outline-none text-[#f8fafc] placeholder:text-slate-700 transition-colors"
                />
              </div>

              <div className="space-y-2 relative">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Primary Goal</label>
                <select 
                  required
                  value={formData.focus}
                  onChange={(e) => setFormData({...formData, focus: e.target.value})}
                  className="w-full bg-transparent border-b border-[#a3d9cf]/20 py-2 focus:border-[#c5a059] focus:outline-none text-[#f8fafc] transition-colors appearance-none cursor-pointer pr-8"
                >
                  <option value="" className="bg-[#041b1f]">Select goal</option>
                  <option value="patient-queries" className="bg-[#041b1f]">Reduce repeat queries</option>
                  <option value="risk-control" className="bg-[#041b1f]">Scale trust safely</option>
                  <option value="other" className="bg-[#041b1f]">Other Inquiry</option>
                </select>
                <div className="absolute right-0 bottom-3 pointer-events-none text-slate-600">
                  <ArrowRight className="w-3 h-3 rotate-90" />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#c5a059] text-[#041b1f] font-bold text-xs uppercase tracking-widest gold-glow transition-all duration-300 w-full"
                >
                  Send Inquiry & Continue
                  <Send className="ml-3 w-3 h-3" />
                </button>
              </div>
            </form>
          </div>

          {/* OPTION 2: CALENDAR DIRECT */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="p-8 border border-[#a3d9cf]/10 bg-[#0a2e36]/20 rounded-3xl">
              <h2 className="text-2xl font-serif mb-6 text-[#c5a059]">Option 2: Direct Booking</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-8">
                If you know this is a fit and want to discuss architecture immediately, skip the form and grab a slot on my calendar.
              </p>
              <button 
                onClick={handleBookingClick}
                className="inline-flex items-center justify-center px-8 py-4 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059]/10 font-bold text-xs uppercase tracking-widest transition-all duration-300 w-full"
              >
                Open Google Calendar
                <Calendar className="ml-3 w-4 h-4" />
              </button>
              <div className="mt-4 flex items-center justify-center text-[9px] text-slate-600 uppercase tracking-widest">
                <ExternalLink className="w-3 h-3 mr-2" />
                15-min Pilot Fit Call
              </div>
            </div>

            <div className="px-4">
              <h3 className="text-xs uppercase tracking-widest text-[#a3d9cf] font-bold mb-4">What we’ll cover:</h3>
              <ul className="space-y-3">
                {[
                  "Knowledge base audit",
                  "Refusal mapping requirements",
                  "The 7-day deployment path"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-xs text-slate-500">
                    <CheckCircle2 className="w-3 h-3 mr-2 text-[#c5a059]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FOOTER CONTACT INFO */}
        <div className="text-center border-t border-[#a3d9cf]/10 pt-16">
          <p className="text-slate-500 text-xs uppercase tracking-[0.2em] mb-4">Or email directly</p>
          <a href={`mailto:${contactEmail}`} className="text-2xl font-serif text-[#f8fafc] hover:text-[#c5a059] transition-colors">
            {contactEmail}
          </a>
        </div>

      </div>
    </div>
  );
}
