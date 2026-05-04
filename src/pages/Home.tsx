import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, Rocket, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stats = [
  { label: 'Revenue Generated', value: '$2M+', icon: TrendingUp },
  { label: 'Happy Clients', value: '150+', icon: Users },
  { label: 'Ad Campaigns', value: '500+', icon: Target },
  { label: 'ROI Average', value: '4.5x', icon: Rocket },
];

const featuredServices = [
  {
    title: 'Facebook & Instagram Ads',
    description: 'Stop burning money on bad ads. We build high-converting meta campaigns that print leads.',
    icon: Target,
    color: 'bg-blue-500'
  },
  {
    title: 'AI Automation',
    description: 'Scale your business with AI agents and automated workflows that handle your leads 24/7.',
    icon: Bot,
    color: 'bg-purple-500'
  },
  {
    title: 'Premium Web Design',
    description: 'We build websites that don\'t just look good—they sell. Modern, fast, and SEO-ready.',
    icon: Rocket,
    color: 'bg-amber-500'
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 px-6 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-from)_0%,_transparent_50%)] from-brand-purple/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/5 border border-brand-purple/10 rounded-full text-brand-purple font-semibold text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
              </span>
              Leading Digital Agency in Ghana
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-black leading-[1.1] tracking-tight">
              Grow Your Business <span className="text-brand-purple underline decoration-brand-gold/30 underline-offset-8">Online</span> with DGL
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              We help businesses generate high-quality leads, boost sales, and dominate their niche with premium digital advertising and automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact"
                className="bg-brand-purple text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20 hover:-translate-y-1"
              >
                Get Started Now <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="https://wa.me/233541853579"
                className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all hover:-translate-y-1"
              >
                Book Free Consultation
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-gray-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                Joined by <span className="text-gray-900 font-bold">150+ Happy Businesses</span> in Ghana
              </p>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Digital Marketing Dashboard" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/40 to-transparent"></div>
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-gray-900">Campaign Performance</span>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-md font-bold">+24% MoM</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-purple w-[78%]"></div>
              </div>
              <div className="flex justify-between mt-4 text-sm text-gray-500 font-medium">
                <span>Leads: 1,245</span>
                <span>CPA: $1.20</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-purple py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <div className="text-4xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className="text-brand-purple-200 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 space-y-4">
            <h2 className="text-brand-purple font-bold uppercase tracking-widest text-sm">What We Do</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold">Solutions Dedicated To <span className="italic text-gray-400">Scale</span> Your Business</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <motion.div 
                key={service.title}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6 group transition-all"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12", service.color)}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-gray-900">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-brand-purple font-bold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-[120px] rounded-full"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <h3 className="text-4xl font-serif font-bold text-white leading-tight">
                  Stop Guessing. <br /> Start <span className="text-brand-gold italic">Growing</span> Your Revenue.
                </h3>
                <p className="text-gray-400 text-lg">
                  Most agencies focus on "awareness". We focus on <span className="text-white font-bold">conversions</span>. Our ads are engineered to find your most profitable customers and bring them straight to your door or WhatsApp.
                </p>
                
                <ul className="space-y-4">
                  {[
                    'Proprietary Ad Strategy for Ghanaian Market',
                    'Real-time Performance Reporting',
                    'AI-driven Lead Nurturing Systems',
                    'Premium Branding that Commands Authority'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white font-medium">
                      <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-gold text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-gold/90 transition-all">
                    Scale My Business Today
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="aspect-square rounded-2xl bg-gray-800 p-4 flex flex-col justify-between">
                    <TrendingUp className="w-8 h-8 text-brand-gold" />
                    <div className="text-2xl font-bold text-white">+312%</div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Leads Growth</div>
                  </div>
                  <div className="aspect-square rounded-2xl bg-brand-purple p-4 flex flex-col justify-between">
                    <Users className="w-8 h-8 text-brand-gold" />
                    <div className="text-2xl font-bold text-white">45k+</div>
                    <div className="text-xs text-brand-purple-200 font-bold uppercase tracking-widest">Target Reached</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl bg-gray-800 p-4 flex flex-col justify-between border border-gray-700">
                    <Rocket className="w-8 h-8 text-brand-gold" />
                    <div className="text-2xl font-bold text-white">4.8/5</div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Client Success</div>
                  </div>
                  <div className="aspect-[3/4] rounded-2xl bg-gray-100 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                      alt="Success Result" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-5xl lg:text-7xl font-serif font-black tracking-tight text-gray-900">
            Ready to <span className="text-brand-purple italic">Dominate</span> Your Industry?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your business deserves visibility. Let DGL build the marketing engine that transforms your brand into a local market leader.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-brand-purple text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-brand-purple/30 hover:scale-105 active:scale-95 transition-all"
            >
              Claim My Free Strategy Session
            </Link>
          </div>
          <p className="text-gray-400 font-medium">Limited spots available for Q2 consultation.</p>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-brand-gold/5 blur-[100px] rounded-full"></div>
      </section>
    </div>
  );
}
