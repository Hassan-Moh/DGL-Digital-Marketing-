import { motion } from 'motion/react';
import { Target, Search, Monitor, PenTool, Layout, Share2, Bot, Megaphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const services = [
  {
    id: 'ads',
    title: 'Facebook & Instagram Ads',
    description: 'Stop guessing and start getting leads. We manage your end-to-end Meta advertising strategy to ensure maximum ROI and business growth.',
    icon: Target,
    benefits: ['Hyper-local Targeting', 'A/B Testing Content', 'Retargeting Funnels', 'Pixel Setup & Tracking'],
    process: 'Research → Creative Development → Launch → Daily Optimization',
    roi: 'Average 3x - 10x ROAS'
  },
  {
    id: 'google',
    title: 'Google Ads (SEM)',
    description: 'Get in front of customers exactly when they are searching for what you offer. We optimize your keywords to lower customer acquisition costs.',
    icon: Search,
    benefits: ['High Intent Traffic', 'Keyword Research', 'Conversion Tracking', 'Landing Page Audits'],
    process: 'Intent Analysis → Ad Copywriting → Bid Management',
    roi: 'Immediate Sales Lift'
  },
  {
    id: 'web',
    title: 'Premium Website Development',
    description: 'Your website is your 24/7 salesperson. We build conversion-optimized, mobile-first websites that turn visitors into loyal customers.',
    icon: Monitor,
    benefits: ['Conversion-focused UI', 'Mobile Optimization', 'Ultra-fast Loading', 'SEO Foundations'],
    process: 'Strategy → UI/UX Design → Development → Launch',
    roi: 'Increased Web-to-Lead Rate'
  },
  {
    id: 'branding',
    title: 'Branding & Logo Design',
    description: 'Stand out from the noise. We create identities that command authority and build deep trust with your target audience.',
    icon: PenTool,
    benefits: ['Unique Logo Design', 'Brand Voice & Identity', 'Marketing Collateral', 'Social Media Templates'],
    process: 'Brand Audit → Visual Concept → Final Identity',
    roi: 'Premium Positioning'
  },
  {
    id: 'ai',
    title: 'AI Automation Systems',
    description: 'Work smarter, not harder. We implement AI bots and automated CRM workflows that manage your leads and appointments while you sleep.',
    icon: Bot,
    benefits: ['Automated Lead Response', 'Appointment Scheduling', 'Data-driven CRM', 'Cost Reduction'],
    process: 'Audit → Integration → Training → Automation',
    roi: '60% More Efficient Ops'
  },
  {
    id: 'social',
    title: 'Social Media Management',
    description: 'Consistent, engaging, and professional. We handle your organic content so your brand stays top-of-mind every single day.',
    icon: Share2,
    benefits: ['Content Calendar', 'Community Management', 'Trend Hijacking', 'Growth Strategy'],
    process: 'Planning → Design → Posting → Engagement',
    roi: 'Long-term Brand Equity'
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-950 text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight">
            Our <span className="text-brand-purple">Core</span> Services
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Data-backed marketing solutions designed for the modern business landscape in Ghana and beyond.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row gap-16 items-center",
                i % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              <div className="flex-1 space-y-8">
                <div className="inline-flex p-4 bg-brand-purple/10 text-brand-purple rounded-2xl">
                  <service.icon className="w-10 h-10" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-serif font-bold text-gray-900">{service.title}</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Process</span>
                    <p className="text-gray-900 font-medium">{service.process}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Expected ROI</span>
                    <p className="text-brand-purple font-bold text-lg">{service.roi}</p>
                  </div>
                </div>

                <Link 
                  to="/contact"
                  className="bg-brand-purple text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-purple/80 transition-all w-fit"
                >
                  Book for {service.title} <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex-1 w-full flex justify-center">
                <div className="relative group w-full max-w-lg aspect-square">
                  <div className="absolute -inset-4 bg-brand-gold/10 rounded-[3rem] blur-2xl group-hover:bg-brand-purple/10 transition-colors"></div>
                  <div className="relative h-full w-full bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-200">
                    <img 
                      src={`https://images.unsplash.com/photo-${i === 0 ? '1611162617474-5b21e879e113' : i === 1 ? '1611162616305-c69b3fa7fbe0' : i === 2 ? '1460925895917-afdab827c52f' : i === 3 ? '1540575467063-178a50c2df87' : '1485827404703-89b55fcc595e'}?q=80&w=1000&auto=format&fit=crop`} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WhatsApp Funnels Highlight */}
      <section className="bg-brand-purple py-24 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Megaphone className="w-16 h-16 text-brand-gold mx-auto" />
          <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight">
            The WhatsApp <span className="text-brand-gold">Boom</span> in Ghana
          </h2>
          <p className="text-xl text-brand-purple-100 leading-relaxed">
            In Ghana, WhatsApp is the king of conversion. We build specialized advertising funnels that send leads directly to your WhatsApp with one click, where our AI or your team can close the deal instantly.
          </p>
          <div className="pt-8">
            <Link to="/contact" className="bg-brand-gold text-gray-900 px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all">
              Build My WhatsApp Machine
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
