import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: '5 Reasons Your Facebook Ads Are Failing in Ghana',
    excerpt: 'Most Ghanaian businesses make these 5 critical mistakes that blow their budget without bringing any leads. Learn how to fix them.',
    date: 'April 20, 2024',
    author: 'DGL Growth Team',
    category: 'Advertising',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000'
  },
  {
    title: 'The Future of AI in Small Business Automation',
    excerpt: 'AI is no longer for big tech only. Discover how local SMEs are using AI agents to handle WhatsApp inquiries and scale sales.',
    date: 'April 15, 2024',
    author: 'AI Dept',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000'
  }
];

export default function Blog() {
  return (
    <div className="bg-white pb-24">
      <section className="bg-brand-purple py-24 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight">
            Marketing <span className="text-brand-gold">Insights</span>
          </h1>
          <p className="text-xl text-brand-purple-100 max-w-2xl mx-auto">
            Practical strategies for business growth, advertising, and automation in the digital age.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for growth tips..." 
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 ring-brand-gold/50"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/20 blur-[100px] rounded-full"></div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, i) => (
            <motion.article 
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group space-y-6"
            >
              <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex items-center gap-6 text-xs font-bold text-gray-400 tracking-widest uppercase">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-purple" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-purple" />
                    {post.author}
                  </div>
                </div>

                <h2 className="text-3xl font-serif font-bold text-gray-900 group-hover:text-brand-purple transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {post.excerpt}
                </p>

                <Link to="/blog" className="inline-flex items-center gap-2 text-brand-purple font-black uppercase text-sm tracking-widest pt-2 group-hover:gap-4 transition-all">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 mt-12 pb-12">
        <div className="bg-gray-50 rounded-[3rem] p-12 lg:p-24 text-center space-y-12 border border-gray-100">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h3 className="text-4xl font-serif font-bold">Never Miss a Strategy.</h3>
            <p className="text-gray-500 text-lg">
              Join 500+ Ghanaian business owners receiving our weekly digital growth newsletter. No spam, just pure strategy.
            </p>
          </div>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-grow bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 ring-brand-purple/20"
            />
            <button className="bg-brand-purple text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all">
              Join Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
