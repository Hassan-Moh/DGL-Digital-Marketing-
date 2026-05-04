import { motion } from 'motion/react';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

const cases = [
  {
    title: 'Local Real Estate Giant',
    category: 'Lead Generation',
    result: '1,200+ Qualified Leads in 3 Months',
    stat: '+400%',
    desc: 'We implemented a custom Facebook Ad funnel combined with an AI automated follow-up system that reduced their cost per lead by 65%.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000'
  },
  {
    title: 'Tamale Tech Retailer',
    category: 'E-commerce',
    result: 'GH₵250k in Monthly Sales',
    stat: '8.2x ROI',
    desc: 'Through targeted Instagram Shopping ads and WhatsApp automation, we transformed their brick-and-mortar shop into a digital sales machine.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000'
  },
  {
    title: 'Accra Boutique Hotel',
    category: 'Brand Awareness',
    result: '100% Bookings for Peak Season',
    stat: 'Full House',
    desc: 'A premium branding overhaul paired with Google Search ads ensured they appeared at the top of every relevant search for luxury stays in Accra.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000'
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-gray-50 pb-24">
      <section className="bg-white py-24 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight text-gray-900">
            Results That <span className="text-brand-purple">Speak</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            We don't just run ads; we deliver business outcomes. Explore our track record of growth.
          </p>
        </div>
      </section>

      <section className="pt-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cases.map((project, i) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 line-clamp-1">{project.title}</h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-brand-purple/5 rounded-2xl border border-brand-purple/10">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-purple uppercase tracking-widest">Growth</span>
                    <div className="text-2xl font-black text-brand-purple">{project.stat}</div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-brand-gold" />
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-gray-50">
                  <span className="font-bold text-gray-900">{project.result}</span>
                  <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-brand-purple transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats recap */}
      <section className="py-24 px-6 mt-24">
        <div className="max-w-7xl mx-auto bg-gray-950 rounded-[3rem] p-12 text-center text-white space-y-12 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full"></div>
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="space-y-4">
               <TrendingUp className="w-12 h-12 text-brand-gold mx-auto" />
               <div className="text-5xl font-black">GH₵5M+</div>
               <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">Revenue Generated for Clients</p>
             </div>
             <div className="space-y-4">
               <Users className="w-12 h-12 text-brand-gold mx-auto" />
               <div className="text-5xl font-black">200k+</div>
               <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">Leads Captured via Our Funnels</p>
             </div>
             <div className="space-y-4">
               <DollarSign className="w-12 h-12 text-brand-gold mx-auto" />
               <div className="text-5xl font-black">15+</div>
               <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">Industries Dominated</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
