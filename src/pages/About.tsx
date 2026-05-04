import { motion } from 'motion/react';
import { Target, Heart, Eye, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Agency Culture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tight mb-8">
            Our Story. <br /> Your <span className="text-brand-gold italic">Growth</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            DGL Digital was born out of a simple observation: Ghanaian businesses deserve world-class marketing that actually works.
          </p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-gray-50 p-12 rounded-[3rem] space-y-6">
            <div className="w-16 h-16 bg-brand-purple rounded-2xl flex items-center justify-center text-white">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower SMEs and enterprises in Ghana with data-driven advertising strategies and cutting-edge automation that turns every marketing dollar into measurable revenue.
            </p>
          </div>

          <div className="bg-gray-50 p-12 rounded-[3rem] space-y-6">
            <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-gray-900">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-serif font-bold">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the leading catalyst for digital transformation in Africa, positioning Ghanaian businesses as dominant players in the global digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Why DGL */}
      <section className="py-24 px-6 bg-brand-purple text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight leading-tight">
              Why We Are <span className="italic text-brand-gold">Different</span>
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: 'Results Over Fluff',
                  desc: 'We don\'t care about "likes". We care about leads, inquiries, and bank alerts.'
                },
                {
                  title: 'Local Context, Global Standard',
                  desc: 'We understand the unique nuances of the Ghanaian consumer behavior while applying Silicon Valley strategies.'
                },
                {
                  title: 'Hyper-Transparency',
                  desc: 'You see exactly where your money goes. Real-time dashboards, real numbers, no smoke and mirrors.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-brand-purple-100">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-gold/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                alt="Working Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section Placeholder */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto overflow-hidden border-4 border-brand-gold">
             <img src="https://i.pravatar.cc/300?img=12" alt="Founder" referrerPolicy="no-referrer" />
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-serif font-bold">The DGL Visionary</h3>
            <p className="text-brand-purple font-bold uppercase tracking-widest text-sm">Founder & Growth Strategist</p>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed italic">
            "I built DGL because I saw too many brilliant Ghanaian entrepreneurs struggling to get visible. Our agency is here to level the playing field and give local businesses the growth engine they deserve."
          </p>
          <Award className="w-12 h-12 text-brand-gold mx-auto" />
        </div>
      </section>
    </div>
  );
}
