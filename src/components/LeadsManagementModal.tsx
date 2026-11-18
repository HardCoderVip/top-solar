import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  RefreshCw, 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Filter, 
  FileSpreadsheet,
  Building2
} from 'lucide-react';
import { SolarLead } from '../types/solar';

interface LeadsManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadsManagementModal: React.FC<LeadsManagementModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [leads, setLeads] = useState<SolarLead[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<SolarLead | null>(null);

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success && data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error('Failed to load leads:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  const updateLeadStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success && data.lead) {
        setLeads((prev) => prev.map((l) => (l.id === id ? data.lead : l)));
        if (selectedLead?.id === id) {
          setSelectedLead(data.lead);
        }
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  if (!isOpen) return null;

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.phone.includes(searchQuery) ||
      l.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.systemInterest.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || l.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <span className="px-2 py-0.5 text-[11px] font-bold bg-amber-100 text-amber-800 rounded-md">New Lead</span>;
      case 'contacted':
        return <span className="px-2 py-0.5 text-[11px] font-bold bg-blue-100 text-blue-800 rounded-md">Contacted</span>;
      case 'survey_scheduled':
        return <span className="px-2 py-0.5 text-[11px] font-bold bg-purple-100 text-purple-800 rounded-md">Survey Scheduled</span>;
      case 'quote_sent':
        return <span className="px-2 py-0.5 text-[11px] font-bold bg-indigo-100 text-indigo-800 rounded-md">Quote Sent</span>;
      case 'installed':
        return <span className="px-2 py-0.5 text-[11px] font-bold bg-emerald-100 text-emerald-800 rounded-md">Installed</span>;
      default:
        return <span className="px-2 py-0.5 text-[11px] font-bold bg-neutral-100 text-neutral-800 rounded-md">{status}</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-xs">
      <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200">
        
        {/* Top Modal Header */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-neutral-200 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 bg-neutral-50">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 bg-neutral-900 text-white rounded-lg shrink-0">
              <FileSpreadsheet className="w-5 h-5 text-amber-400" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-base sm:text-lg font-bold text-neutral-900 truncate">
                Top Solar Solution — Leads CRM
              </h3>
              <p className="text-xs text-neutral-500 truncate">
                Live Server Feed from <code className="text-neutral-700 font-mono">www.topsolarsolutions.com/api/leads</code>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-auto">
            <a
              href="/api/leads/export"
              download="TopSolarSolutions_Leads.csv"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-50 rounded-lg transition-colors shadow-2xs whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
              <span>Export CSV</span>
            </a>

            <button
              onClick={fetchLeads}
              disabled={isLoading}
              className="p-1.5 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
              title="Refresh leads"
              aria-label="Refresh leads"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-3 sm:p-4 border-b border-neutral-200 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by name, phone, city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {['all', 'new', 'contacted', 'survey_scheduled', 'quote_sent', 'installed'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md capitalize transition-colors cursor-pointer ${
                  statusFilter === st
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {st === 'all' ? 'All Leads' : st.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area (Split Table/Cards + Detail Sidebar) */}
        <div className="flex-1 flex relative overflow-hidden">
          
          {/* List View */}
          <div className="flex-1 overflow-y-auto min-w-0">
            {filteredLeads.length === 0 ? (
              <div className="text-center py-16 text-neutral-400 text-sm px-4">
                No consultation leads found matching filter.
              </div>
            ) : (
              <>
                {/* Mobile Card View (< md) */}
                <div className="md:hidden divide-y divide-neutral-200">
                  {filteredLeads.map((lead) => {
                    const isSelected = selectedLead?.id === lead.id;
                    return (
                      <div
                        key={lead.id}
                        onClick={() => setSelectedLead(lead)}
                        className={`p-4 space-y-2.5 cursor-pointer transition-colors ${
                          isSelected ? 'bg-amber-50/80' : 'hover:bg-neutral-50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="font-bold text-sm text-neutral-900 truncate">{lead.fullName}</div>
                            <div className="font-mono text-xs text-neutral-500">{lead.phone} · {lead.id}</div>
                          </div>
                          {getStatusBadge(lead.status)}
                        </div>
                        <div className="text-xs text-neutral-700 font-medium">{lead.systemInterest}</div>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500 pt-1">
                          <span>{lead.city}, {lead.state} ({lead.propertyType})</span>
                          <span className="font-bold text-amber-700 tabular-nums">{lead.recommendedCapacityKw} kWp · ₹{lead.averageMonthlyBill.toLocaleString('en-IN')}/mo</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Desktop Table View (md+) */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-neutral-50 border-b border-neutral-200 sticky top-0 text-neutral-500 uppercase font-semibold">
                      <tr>
                        <th className="py-2.5 px-4">Lead ID & Customer</th>
                        <th className="py-2.5 px-3">Location & Type</th>
                        <th className="py-2.5 px-3">System Interest</th>
                        <th className="py-2.5 px-3">Monthly Bill</th>
                        <th className="py-2.5 px-3">Est. Capacity</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {filteredLeads.map((lead) => {
                        const isSelected = selectedLead?.id === lead.id;
                        return (
                          <tr
                            key={lead.id}
                            onClick={() => setSelectedLead(lead)}
                            className={`hover:bg-amber-50/50 cursor-pointer transition-colors ${
                              isSelected ? 'bg-amber-50/80 font-medium' : ''
                            }`}
                          >
                            <td className="py-3 px-4">
                              <div className="font-bold text-neutral-900">{lead.fullName}</div>
                              <div className="font-mono text-[11px] text-neutral-500">{lead.phone}</div>
                              <div className="text-[10px] text-neutral-400">{lead.id}</div>
                            </td>
                            <td className="py-3 px-3">
                              <div className="text-neutral-800">{lead.city}, {lead.state}</div>
                              <div className="text-neutral-500 text-[11px]">{lead.propertyType}</div>
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-semibold text-neutral-900">{lead.systemInterest}</div>
                              <div className="text-[11px] text-neutral-500">{lead.roofType}</div>
                            </td>
                            <td className="py-3 px-3 tabular-nums font-mono">
                              ₹{lead.averageMonthlyBill.toLocaleString('en-IN')}
                            </td>
                            <td className="py-3 px-3 tabular-nums font-bold text-amber-700">
                              {lead.recommendedCapacityKw} kWp
                            </td>
                            <td className="py-3 px-3">
                              {getStatusBadge(lead.status)}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedLead(lead);
                                }}
                                className="px-2.5 py-1 text-xs bg-neutral-100 hover:bg-neutral-200 rounded text-neutral-700 cursor-pointer"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>

          {/* Lead Detail Drawer (Overlay on mobile/tablet, side panel on lg+) */}
          {selectedLead && (
            <div className="absolute inset-0 z-10 lg:static lg:w-96 border-l border-neutral-200 bg-neutral-50 p-5 sm:p-6 overflow-y-auto space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="lg:hidden px-2 py-1 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-100 cursor-pointer"
                  >
                    ← Back
                  </button>
                  <span className="font-mono text-xs font-bold text-neutral-500">{selectedLead.id}</span>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-1 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                  aria-label="Close detail panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <h4 className="font-display text-lg font-bold text-neutral-900">
                  {selectedLead.fullName}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <a
                    href={`tel:${selectedLead.phone}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:underline"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{selectedLead.phone}</span>
                  </a>
                  {selectedLead.email && (
                    <>
                      <span className="text-neutral-300">·</span>
                      <a
                        href={`mailto:${selectedLead.email}`}
                        className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:underline truncate"
                      >
                        <Mail className="w-3 h-3" />
                        <span className="truncate">{selectedLead.email}</span>
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Status Update Control */}
              <div className="p-3 bg-white rounded-lg border border-neutral-200 space-y-1.5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  Lead Pipeline Stage
                </label>
                <select
                  value={selectedLead.status}
                  onChange={(e) => updateLeadStatus(selectedLead.id, e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-neutral-50 border border-neutral-300 rounded font-medium"
                >
                  <option value="new">New Inquiry</option>
                  <option value="contacted">Contacted via Call / WhatsApp</option>
                  <option value="survey_scheduled">Site Survey Scheduled</option>
                  <option value="quote_sent">Commercial Quote Sent</option>
                  <option value="installed">Project Handed Over</option>
                  <option value="closed">Closed / Not Interested</option>
                </select>
              </div>

              {/* Technical Profile Details */}
              <div className="space-y-2 text-xs">
                <h5 className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
                  Site & Sizing Profile
                </h5>
                <div className="bg-white p-3 rounded-lg border border-neutral-200 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Location:</span>
                    <span className="font-semibold text-neutral-900">{selectedLead.city}, {selectedLead.state} ({selectedLead.pincode || 'N/A'})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Property:</span>
                    <span className="font-semibold text-neutral-900">{selectedLead.propertyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Roof Surface:</span>
                    <span className="font-semibold text-neutral-900">{selectedLead.roofType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Monthly Bill:</span>
                    <span className="font-semibold text-neutral-900 tabular-nums">₹{selectedLead.averageMonthlyBill.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between border-t border-neutral-100 pt-1.5 font-bold">
                    <span className="text-amber-800">Rec. Solar Sizing:</span>
                    <span className="text-amber-800">{selectedLead.recommendedCapacityKw} kWp</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Est. Annual Savings:</span>
                    <span>₹{selectedLead.projectedAnnualSavings?.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Preferred Contact:</span>
                    <span className="font-medium text-neutral-800">{selectedLead.preferredContactTime}</span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {selectedLead.notes && (
                <div className="space-y-1 text-xs">
                  <h5 className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
                    Customer Notes / Subsidy Queries
                  </h5>
                  <div className="p-3 bg-white rounded-lg border border-neutral-200 text-neutral-700 italic">
                    "{selectedLead.notes}"
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
                >
                  Contact on WhatsApp
                </a>
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="w-full text-center py-2 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  Dial Customer Phone
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
