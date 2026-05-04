import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Clock, CheckCircle, Search, Filter, Download } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
  status: string;
  createdAt: string;
}

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leads')
      .then(res => res.json())
      .then(data => {
        setLeads(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Leads CRM</h1>
            <p className="text-gray-500">Manage your incoming inquiries and business growth pipeline.</p>
          </div>
          <button className="bg-brand-purple text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Leads
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <Users />
            </div>
            <div>
              <div className="text-2xl font-bold">{leads.length}</div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Total Leads</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
              <Clock />
            </div>
            <div>
              <div className="text-2xl font-bold">{leads.filter(l => l.status === 'New').length}</div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Pending Review</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
              <CheckCircle />
            </div>
            <div>
              <div className="text-2xl font-bold">0</div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Converted</div>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search leads..." 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 ring-brand-purple/20"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-xl text-sm font-medium hover:bg-gray-50">
                <Filter className="w-4 h-4" /> Filter
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Lead Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Service</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Contact</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {leads.length > 0 ? (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-gray-900">{lead.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold bg-brand-purple/5 text-brand-purple px-3 py-1 rounded-full">
                          {lead.service}
                        </span>
                      </td>
                      <td className="px-6 py-4 space-y-1">
                        <div className="text-sm font-medium">{lead.email}</div>
                        <div className="text-xs text-gray-500">{lead.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-brand-purple font-bold text-sm hover:underline">View Details</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      {loading ? (
                        <div className="text-gray-400 italic">Loading leads...</div>
                      ) : (
                        <div className="space-y-4">
                          <Users className="w-12 h-12 text-gray-200 mx-auto" />
                          <div className="text-gray-400 font-medium">No leads captured yet.</div>
                        </div>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
