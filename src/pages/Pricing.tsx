import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: 'Custom',
    description: 'Perfect for small businesses looking to establish a digital presence.',
    features: [
      'Facebook / Instagram Ad Management',
      'Basic Social Media Content',
      'WhatsApp Integration',
      'Monthly Result Report',
      'Dedicated Growth Specialist'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Growth',
    price: 'Popular',
    description: 'Designed for businesses ready to scale and dominate their local market.',
    features: [
      'Meta & Google Ads Management',
      'Advanced Retargeting Funnel',
      'Basic Landing Page Design',
      'Weekly Optimization',
      'WhatsApp Automation Setup',
      'Premium Content Creation'
    ],
    cta: 'Scale Now',
    popular: true
  },
  {
    name: 'Premium',
    price: 'Elite',
    description: 'A complete marketing department for your high-performing business.',
    features: [
      'Omnichannel Advertising (Meta, Google, YouTube)',
      'Custom SEO-optimized Website',
      'Full AI Automation Suite',
      '24/7 Premium Support',
      'Daily Performance Monitoring',
      'Crisis Management & Consulting'
    ],
    cta: 'Go Premium',
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="bg-white pb-24">
      <section className="bg-gray-50 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight text-gray-900">
            Investment in <span className="text-brand-purple">Growth</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Transparent pricing models tailored to your business stage. Since every business is unique, we provide final quotes after our free strategy session.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border ${plan.popular ? 'border-brand-purple shadow-2xl ring-4 ring-brand-purple/5' : 'border-gray-200 shadow-sm'} space-y-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-4">
                <div className="text-brand-purple font-bold uppercase tracking-widest text-sm">{plan.name}</div>
                <div className="text-4xl font-black text-gray-900">{plan.price}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm text-gray-600 font-medium">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link 
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${plan.popular ? 'bg-brand-purple text-white hover:bg-brand-purple/90 shadow-lg' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-950 rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-purple/10 blur-3xl rounded-full translate-x-1/2"></div>
          <div className="relative z-10 space-y-4 max-w-xl">
            <h3 className="text-3xl font-serif font-bold italic text-brand-gold">Enterprise Solutions</h3>
            <p className="text-gray-400 text-lg">
              Are you a large corporation or government entity needing full-scale digital restructuring and national advertising campaigns? We build custom solutions.
            </p>
          </div>
          <Link 
            to="/contact"
            className="relative z-10 bg-white text-gray-950 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            Contact Sales <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section className="py-24 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-500 font-bold text-sm mb-8">
          <Info className="w-4 h-4" />
          More pricing info available via WhatsApp
        </div>
        <p className="text-gray-400 text-sm">
          All packages include a 3-month minimum commitment for optimal results.
        </p>
      </section>
    </div>
  );
}
