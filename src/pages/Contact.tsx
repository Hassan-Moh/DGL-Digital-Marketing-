import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';


export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      details: formData.get('details'),
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-24 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight text-gray-900 leading-tight">
              Let's Scale Your <span className="text-brand-purple">Business</span>.
            </h1>
            <p className="text-xl text-gray-600 max-w-xl font-medium">
              Ready to generate more leads and boost your brand? Reach out today for a free 15-minute growth strategy session.
            </p>
            
            <div className="space-y-6 pt-8">
              {[
                { icon: Phone, label: 'Call Us', value: '054 185 3579' },
                { icon: Phone, label: 'Secondary', value: '024 699 5737' },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Click Floating Button' },
                { icon: MapPin, label: 'Location', value: 'Tamale & Accra, Ghana' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all transform group-hover:rotate-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.label}</div>
                    <div className="text-lg font-bold text-gray-900">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-purple/5 blur-3xl rounded-full"></div>
            <div className="relative bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
              {!submitted ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                      <input 
                        name="name"
                        type="text" 
                        required
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 ring-brand-purple/20 transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Phone Number</label>
                      <input 
                        name="phone"
                        type="tel" 
                        required
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 ring-brand-purple/20 transition-all font-medium"
                        placeholder="054 XXX XXXX"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 ring-brand-purple/20 transition-all font-medium"
                      placeholder="business@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Interested Service</label>
                    <select name="service" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 ring-brand-purple/20 transition-all font-bold text-gray-700">
                      <option>Facebook & Instagram Ads</option>
                      <option>Google Ads</option>
                      <option>Website Design</option>
                      <option>AI Automation</option>
                      <option>Full Marketing Strategy</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Project Details</label>
                    <textarea 
                      name="details"
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 ring-brand-purple/20 transition-all font-medium"
                      placeholder="Tell us about your business goals..."
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-purple text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-brand-purple/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                    Send Inquiry <Send className="w-6 h-6" />
                  </button>
                </form>

              ) : (
                <div className="py-20 text-center space-y-6">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                     <CheckCircle2 className="w-12 h-12" />
                   </div>
                   <h3 className="text-3xl font-serif font-bold text-gray-900">Message Received!</h3>
                   <p className="text-gray-500 text-lg leading-relaxed">
                     Thank you for reaching out to DGL. One of our growth strategists will contact you within the next 4 hours to book your free session.
                   </p>
                   <button 
                     onClick={() => setSubmitted(false)}
                     className="text-brand-purple font-bold border-b border-brand-purple"
                   >
                     Send another message
                   </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 px-6 grayscale hover:grayscale-0 transition-all duration-1000">
         <div className="max-w-7xl mx-auto h-[400px] bg-gray-100 rounded-[3rem] overflow-hidden shadow-inner border border-gray-200 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-12 h-12 text-gray-300 mx-auto" />
              <p className="text-gray-400 font-bold uppercase tracking-widest">Interactive Map Placeholder</p>
              <p className="text-gray-400 text-sm">Serving clients in Tamale, Accra & Remotely Nationwide</p>
            </div>
         </div>
      </section>
    </div>
  );
}
