import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory "CRM" for leads
  let leads: any[] = [];

  // Lead capture endpoint
  app.post('/api/leads', (req, res) => {
    const { name, email, phone, service, details } = req.body;
    
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Name, email, and phone are required' });
    }

    const newLead = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      service,
      details,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    leads.push(newLead);
    console.log('New Lead Captured:', newLead);
    
    res.status(201).json({ message: 'Lead captured successfully', leadId: newLead.id });
  });

  // Admin CRM dashboard endpoint
  app.get('/api/leads', (req, res) => {
    res.json(leads);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
