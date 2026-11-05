// In-memory reactive Lead Store based on stitch mockups
    let leadsData = [
      {
        id: 1,
        name: "Rahul Sharma",
        company: "Vertex Technologies",
        email: "rahul.sharma@vertextech.in",
        phone: "+91 98712 34567",
        source: "Meta Ads",
        campaign: "Solar Inverter High Intent",
        status: "Qualified",
        speed: "< 3s",
        owner: "Amit Verma",
        score: 88,
        selected: false
      },
      {
        id: 2,
        name: "Liam Scott",
        company: "Scott Logistics",
        email: "liam@scottlogistics.com",
        phone: "+1 415 555-0192",
        source: "Google Ads",
        campaign: "Enterprise Fleet Search",
        status: "Meeting Booked",
        speed: "4s",
        owner: "Priya Sharma",
        score: 94,
        selected: false
      },
      {
        id: 3,
        name: "Sarah Miller",
        company: "Apex Healthcare",
        email: "sarah@apexcare.org",
        phone: "+1 212 555-8941",
        source: "Meta Ads",
        campaign: "Medical Clinic SaaS Funnel",
        status: "New",
        speed: "12s",
        owner: "Unassigned",
        score: 76,
        selected: false
      },
      {
        id: 4,
        name: "Vikram Singh",
        company: "Singh Real Estate Group",
        email: "vikram@singhgroup.in",
        phone: "+91 98100 23456",
        source: "Meta Ads",
        campaign: "Luxury Villa Pre-Launch",
        status: "Follow-up",
        speed: "18s",
        owner: "Amit Verma",
        score: 82,
        selected: false
      },
      {
        id: 5,
        name: "Elena Rostova",
        company: "Rostova E-Commerce",
        email: "elena@rostovastore.com",
        phone: "+44 20 7946 0912",
        source: "Google Ads",
        campaign: "Shopify Scaling Search",
        status: "Qualified",
        speed: "8s",
        owner: "Marcus Vance",
        score: 91,
        selected: false
      },
      {
        id: 6,
        name: "Marcus Chen",
        company: "Chen Logistics Inc.",
        email: "marcus@chenlogistics.com",
        phone: "+1 650 555-7821",
        source: "Organic",
        campaign: "Website Inbound Direct",
        status: "New",
        speed: "6s",
        owner: "Unassigned",
        score: 70,
        selected: false
      },
      {
        id: 7,
        name: "Priya Patel",
        company: "Nexus Fintech Solutions",
        email: "priya@nexusfintech.io",
        phone: "+91 98230 45678",
        source: "Meta Ads",
        campaign: "API Banking Launch Form",
        status: "Qualified",
        speed: "5s",
        owner: "Priya Sharma",
        score: 95,
        selected: false
      },
      {
        id: 8,
        name: "David Vance",
        company: "Vance Media Agency",
        email: "david@vancemedia.co",
        phone: "+1 310 555-4421",
        source: "Google Ads",
        campaign: "Performance CRM Retargeting",
        status: "Follow-up",
        speed: "14s",
        owner: "Marcus Vance",
        score: 85,
        selected: false
      }
    ];

    let currentFilterStatus = 'all';
    let currentFilterChannel = 'all';
    let searchQuery = '';
    let currentActiveLead = leadsData[0];

    // Initialization
    document.addEventListener('DOMContentLoaded', () => {
      renderLeads();
      renderKanban();
      updateCounts();
    });

    // Render Leads Table
    function renderLeads() {
      const tbody = document.getElementById('leads-table-body');
      tbody.innerHTML = '';

      const filtered = leadsData.filter(lead => {
        const matchesStatus = (currentFilterStatus === 'all' || lead.status === currentFilterStatus);
        const matchesChannel = (currentFilterChannel === 'all' || lead.source === currentFilterChannel);
        const matchesSearch = (!searchQuery || 
          lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lead.campaign.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return matchesStatus && matchesChannel && matchesSearch;
      });

      document.getElementById('visible-leads-count').textContent = filtered.length;

      if (filtered.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="8" class="text-center py-8 text-slate-400">
              No leads match the selected filter criteria.
            </td>
          </tr>
        `;
        return;
      }

      filtered.forEach(lead => {
        const initials = lead.name.split(' ').map(n => n[0]).join('');
        
        let statusBadge = '';
        if (lead.status === 'New') {
          statusBadge = `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#1264F5] border border-blue-200">● New</span>`;
        } else if (lead.status === 'Qualified') {
          statusBadge = `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">● Qualified</span>`;
        } else if (lead.status === 'Follow-up') {
          statusBadge = `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">● Follow-up</span>`;
        } else if (lead.status === 'Meeting Booked') {
          statusBadge = `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">● Meeting Booked</span>`;
        } else {
          statusBadge = `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">● ${lead.status}</span>`;
        }

        let channelBadge = '';
        if (lead.source === 'Meta Ads') {
          channelBadge = `<span class="inline-flex items-center gap-1 font-semibold text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700">f Meta Ads</span>`;
        } else if (lead.source === 'Google Ads') {
          channelBadge = `<span class="inline-flex items-center gap-1 font-semibold text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-800">G Google Ads</span>`;
        } else {
          channelBadge = `<span class="inline-flex items-center gap-1 font-semibold text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700">Direct</span>`;
        }

        const tr = document.createElement('tr');
        tr.className = "hover:bg-blue-50/40 transition-colors group cursor-pointer";
        tr.onclick = (e) => {
          if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON') {
            openLeadDrawer(lead);
          }
        };

        tr.innerHTML = `
          <td class="py-3 px-4">
            <input type="checkbox" ${lead.selected ? 'checked' : ''} onchange="toggleSelect(${lead.id}, this)" class="rounded border-slate-300 text-[#1264F5]"/>
          </td>
          <td class="py-3 px-4">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                ${initials}
              </div>
              <div class="min-w-0">
                <div class="font-bold text-[#0F172A] hover:text-[#1264F5] truncate">${lead.name}</div>
                <div class="text-[11px] text-slate-400 truncate">${lead.company}</div>
              </div>
            </div>
          </td>
          <td class="py-3 px-3">
            <div>
              ${channelBadge}
              <div class="text-[10px] text-slate-400 mt-0.5 truncate max-w-[160px]">${lead.campaign}</div>
            </div>
          </td>
          <td class="py-3 px-3">${statusBadge}</td>
          <td class="py-3 px-3">
            <span class="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">${lead.speed}</span>
          </td>
          <td class="py-3 px-3 text-slate-700 font-medium">
            <div class="flex items-center gap-1.5">
              <span class="w-4 h-4 rounded-full bg-slate-200 text-[9px] font-bold flex items-center justify-center text-slate-600">
                ${lead.owner !== 'Unassigned' ? lead.owner.split(' ').map(n=>n[0]).join('') : '?'}
              </span>
              <span>${lead.owner}</span>
            </div>
          </td>
          <td class="py-3 px-3 text-center">
            <span class="font-extrabold ${lead.score >= 85 ? 'text-emerald-600' : 'text-slate-700'}">${lead.score}</span>
          </td>
          <td class="py-3 px-4 text-right">
            <div class="flex items-center justify-end gap-1.5 opacity-90 group-hover:opacity-100">
              <button data-action="inspect-lead" data-id="${lead.id}" class="p-1 rounded bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-[#1264F5] transition" title="Inspect Lead">
                <span class="material-symbols-outlined text-[16px]">visibility</span>
              </button>
              <button data-action="quick-whatsapp" data-phone="${lead.phone}" data-name="${lead.name}" class="p-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition" title="Send WhatsApp">
                <span class="material-symbols-outlined text-[16px]">chat</span>
              </button>
              <button data-action="qualify-lead" data-id="${lead.id}" class="px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 text-[#1264F5] font-bold text-[10px] transition">
                Qualify
              </button>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
      });

      if (!tbody._hasActionDelegation) {
        tbody._hasActionDelegation = true;
        tbody.addEventListener('click', (e) => {
          const btn = e.target.closest('button[data-action]');
          if (!btn) return;
          const action = btn.dataset.action;
          if (action === 'inspect-lead') {
            openLeadDrawerById(Number(btn.dataset.id));
          } else if (action === 'quick-whatsapp') {
            triggerQuickWhatsApp(btn.dataset.phone, btn.dataset.name);
          } else if (action === 'qualify-lead') {
            openQualifyModalForLead(Number(btn.dataset.id));
          }
        });
      }
    }

    // Render Kanban Columns
    function renderKanban() {
      const colNew = document.getElementById('kanban-col-new');
      const colFollowup = document.getElementById('kanban-col-followup');
      const colQualified = document.getElementById('kanban-col-qualified');
      const colMeeting = document.getElementById('kanban-col-meeting');

      colNew.innerHTML = '';
      colFollowup.innerHTML = '';
      colQualified.innerHTML = '';
      colMeeting.innerHTML = '';

      leadsData.forEach(lead => {
        const card = document.createElement('div');
        card.className = "bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition cursor-pointer space-y-2";
        card.addEventListener('click', () => openLeadDrawer(lead));
        card.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">${lead.source}</span>
            <span class="text-[11px] font-bold text-emerald-600">${lead.score}/100</span>
          </div>
          <div>
            <h4 class="font-bold text-xs text-[#0F172A]">${lead.name}</h4>
            <p class="text-[11px] text-slate-400 truncate">${lead.company}</p>
          </div>
          <div class="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px] text-slate-500">
            <span>Rep: ${lead.owner}</span>
            <span class="font-bold text-emerald-600">${lead.speed}</span>
          </div>
        `;

        if (lead.status === 'New') colNew.appendChild(card);
        else if (lead.status === 'Follow-up') colFollowup.appendChild(card);
        else if (lead.status === 'Qualified') colQualified.appendChild(card);
        else if (lead.status === 'Meeting Booked') colMeeting.appendChild(card);
      });
    }

    // Update Counter Badges
    function updateCounts() {
      const total = leadsData.length;
      const countNew = leadsData.filter(l => l.status === 'New').length;
      const countQual = leadsData.filter(l => l.status === 'Qualified').length;
      const countFollow = leadsData.filter(l => l.status === 'Follow-up').length;
      const countMeet = leadsData.filter(l => l.status === 'Meeting Booked').length;

      document.getElementById('count-all').textContent = total;
      document.getElementById('count-new').textContent = countNew;
      document.getElementById('count-qualified').textContent = countQual;
      document.getElementById('count-followup').textContent = countFollow;
      document.getElementById('count-meeting').textContent = countMeet;
      
      document.getElementById('sidebar-lead-count').textContent = total;
      document.getElementById('lead-total-pill').textContent = `${total} Leads active`;

      document.getElementById('kanban-count-new').textContent = countNew;
      document.getElementById('kanban-count-followup').textContent = countFollow;
      document.getElementById('kanban-count-qualified').textContent = countQual;
      document.getElementById('kanban-count-meeting').textContent = countMeet;
    }

    // Filters
    function filterByStatus(status, btn) {
      currentFilterStatus = status;
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.className = "tab-btn px-4 py-2.5 text-slate-500 hover:text-slate-800 border-b-2 border-transparent flex items-center gap-1.5 transition -mb-px";
      });
      btn.className = "tab-btn px-4 py-2.5 text-[#1264F5] border-b-2 border-[#1264F5] flex items-center gap-1.5 transition -mb-px";
      renderLeads();
    }

    function filterByChannel(channel) {
      currentFilterChannel = channel;
      renderLeads();
    }

    function handleSearch(val) {
      searchQuery = val;
      renderLeads();
    }

    // Pipeline Layout Toggle
    function setPipelineLayout(layout) {
      const table = document.getElementById('pipeline-table-view');
      const kanban = document.getElementById('pipeline-kanban-view');
      const btnTable = document.getElementById('layout-table-btn');
      const btnKanban = document.getElementById('layout-kanban-btn');

      if (layout === 'kanban') {
        table.classList.add('hidden');
        kanban.classList.remove('hidden');
        btnKanban.className = "px-2.5 py-1 rounded bg-white text-[#1264F5] shadow-xs flex items-center gap-1";
        btnTable.className = "px-2.5 py-1 rounded text-slate-500 hover:text-slate-800 transition flex items-center gap-1";
        renderKanban();
      } else {
        kanban.classList.add('hidden');
        table.classList.remove('hidden');
        btnTable.className = "px-2.5 py-1 rounded bg-white text-[#1264F5] shadow-xs flex items-center gap-1";
        btnKanban.className = "px-2.5 py-1 rounded text-slate-500 hover:text-slate-800 transition flex items-center gap-1";
        renderLeads();
      }
    }

    // Switch Primary Navigation Views
    function switchView(viewName) {
      document.getElementById('view-leads-container').classList.add('hidden');
      document.getElementById('view-overview-container').classList.add('hidden');
      document.getElementById('view-automations-container').classList.add('hidden');
      document.getElementById('view-adaccounts-container').classList.add('hidden');

      // reset nav buttons
      ['overview', 'leads', 'automations', 'adaccounts', 'reports', 'integrations', 'settings'].forEach(id => {
        const btn = document.getElementById('nav-' + id);
        if (btn) btn.className = "w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:text-[#0F172A] hover:bg-slate-50 transition-all";
      });

      const activeBtn = document.getElementById('nav-' + viewName);
      if (activeBtn) activeBtn.className = "w-full flex items-center gap-2.5 px-3 py-2 rounded-xl bg-blue-50 text-[#1264F5] transition-all font-bold";

      if (viewName === 'overview' || viewName === 'reports') {
        document.getElementById('view-overview-container').classList.remove('hidden');
      } else if (viewName === 'automations') {
        document.getElementById('view-automations-container').classList.remove('hidden');
      } else if (viewName === 'adaccounts' || viewName === 'integrations') {
        document.getElementById('view-adaccounts-container').classList.remove('hidden');
      } else {
        document.getElementById('view-leads-container').classList.remove('hidden');
      }
    }

    // Lead Drawer Controls
    function openLeadDrawer(lead) {
      currentActiveLead = lead;
      document.getElementById('drawer-name').textContent = lead.name;
      document.getElementById('drawer-company').textContent = `${lead.company} • Verified Inbound`;
      document.getElementById('drawer-email').textContent = lead.email;
      document.getElementById('drawer-phone').textContent = lead.phone;
      document.getElementById('drawer-source').textContent = lead.source;
      document.getElementById('drawer-campaign').textContent = lead.campaign;
      document.getElementById('drawer-owner').textContent = lead.owner;
      document.getElementById('drawer-score').textContent = `${lead.score} / 100 (Tier A)`;
      document.getElementById('drawer-avatar').textContent = lead.name.split(' ').map(n=>n[0]).join('');

      const badge = document.getElementById('drawer-status-badge');
      badge.textContent = `● ${lead.status}`;

      document.getElementById('drawer-backdrop').classList.remove('hidden');
      document.getElementById('lead-drawer').classList.remove('translate-x-full');
    }

    function openLeadDrawerById(id) {
      const lead = leadsData.find(l => l.id === id);
      if (lead) openLeadDrawer(lead);
    }

    function closeLeadDrawer() {
      document.getElementById('drawer-backdrop').classList.add('hidden');
      document.getElementById('lead-drawer').classList.add('translate-x-full');
    }

    function addLeadNote() {
      const input = document.getElementById('new-note-input');
      const val = input.value.trim();
      if (!val) return;

      const timeline = document.getElementById('drawer-timeline');
      const item = document.createElement('div');
      item.className = "relative";
      item.innerHTML = `
        <div class="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-slate-900 ring-4 ring-white"></div>
        <div class="text-[11px] text-slate-400">Just now • Added by You</div>
        <div class="font-semibold text-slate-800">${val}</div>
      `;
      timeline.prepend(item);
      input.value = '';
    }

    // WhatsApp Message Triggers
    function applyWhatsAppTemplate(tmplId) {
      const textarea = document.getElementById('wa-message-text');
      const lead = currentActiveLead;
      if (tmplId === '1') {
        textarea.value = `Hi ${lead.name}, thank you for requesting details on LeadZam from our ${lead.source} campaign. Would tomorrow at 11:00 AM work for a quick 10-minute demo?`;
      } else if (tmplId === '2') {
        textarea.value = `Hi ${lead.name}, confirming our upcoming product consultation call with ${lead.owner}. Looking forward to connecting!`;
      } else {
        textarea.value = `Hi ${lead.name}, here is the case study on how we achieved 3.8x ROAS for teams in ${lead.company}'s industry. Let me know when you'd like to review the breakdown.`;
      }
    }

    function sendWhatsAppMessage() {
      showToast("WhatsApp Message Sent!", `Delivered template to ${currentActiveLead.name} (${currentActiveLead.phone})`);
      closeLeadDrawer();
    }

    function triggerQuickWhatsApp(phone, name) {
      showToast("WhatsApp Window Ready", `Opening conversation thread with ${name} (${phone})`);
    }

    function logCall() {
      alert(`Call logged with ${currentActiveLead.name}. Connected for 4m 12s. Next follow-up marked.`);
    }

    function disqualifyCurrentLead() {
      if (confirm(`Disqualify lead "${currentActiveLead.name}"?`)) {
        currentActiveLead.status = "Disqualified";
        closeLeadDrawer();
        renderLeads();
        updateCounts();
        showToast("Lead Disqualified", `${currentActiveLead.name} moved to disqualified archive.`);
      }
    }

    // Qualify Modal Controls
    function openQualifyModalFromDrawer() {
      closeLeadDrawer();
      openQualifyModalForLead(currentActiveLead.id);
    }

    function openQualifyModalForLead(id) {
      const lead = leadsData.find(l => l.id === id);
      if (!lead) return;
      currentActiveLead = lead;
      document.getElementById('qualify-lead-subtitle').textContent = `Lead: ${lead.name} (${lead.company})`;
      document.getElementById('qualify-modal').classList.remove('hidden');
    }

    function closeQualifyModal() {
      document.getElementById('qualify-modal').classList.add('hidden');
    }

    function confirmQualification() {
      const owner = document.getElementById('qualify-owner').value;
      currentActiveLead.status = "Qualified";
      currentActiveLead.owner = owner;
      currentActiveLead.score = Math.max(currentActiveLead.score, 90);
      
      closeQualifyModal();
      renderLeads();
      renderKanban();
      updateCounts();
      
      showToast("Lead Qualified!", `${currentActiveLead.name} assigned to ${owner}. Consultation locked.`);
    }

    // Add Lead Modal Controls
    function openAddLeadModal() {
      document.getElementById('add-lead-modal').classList.remove('hidden');
    }

    function closeAddLeadModal() {
      document.getElementById('add-lead-modal').classList.add('hidden');
    }

    function handleManualAddLead(e) {
      e.preventDefault();
      const name = document.getElementById('add-lead-name').value;
      const email = document.getElementById('add-lead-email').value;
      const company = document.getElementById('add-lead-company').value;
      const source = document.getElementById('add-lead-source').value;

      const newLead = {
        id: Date.now(),
        name,
        company,
        email,
        phone: "+1 555-0199",
        source,
        campaign: "Manual Custom Ingestion",
        status: "New",
        speed: "< 1s",
        owner: "Unassigned",
        score: 80,
        selected: false
      };

      leadsData.unshift(newLead);
      closeAddLeadModal();
      renderLeads();
      renderKanban();
      updateCounts();
      showToast("Lead Added!", `${name} from ${company} ingested into pipeline.`);
    }

    // Simulate Ingestion (Live Ad Lead arrives!)
    function simulateIncomingLead() {
      const names = ["Aarav Mehta", "Jessica Alba", "Rohan Gupta", "Chloe Martin", "Ananya Deshmukh"];
      const companies = ["Solaris Tech", "Alba Real Estate", "Gupta Logistics", "Martin Media Group", "Deshmukh Finance"];
      const channels = ["Meta Ads", "Google Ads"];
      
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCompany = companies[Math.floor(Math.random() * companies.length)];
      const randomChannel = channels[Math.floor(Math.random() * channels.length)];

      const simulatedLead = {
        id: Date.now(),
        name: randomName,
        company: randomCompany,
        email: `${randomName.toLowerCase().replace(' ', '.')}@${randomCompany.toLowerCase().replace(' ', '')}.com`,
        phone: "+91 99999 88888",
        source: randomChannel,
        campaign: "High-Intent Lead Form (Live Ingest)",
        status: "New",
        speed: "< 2s",
        owner: "Unassigned",
        score: Math.floor(Math.random() * 20) + 75,
        selected: false
      };

      leadsData.unshift(simulatedLead);
      renderLeads();
      renderKanban();
      updateCounts();

      showToast("🚀 New Ad Lead Ingested!", `${simulatedLead.name} just submitted form on ${simulatedLead.source}. Speed-to-lead: < 2s!`);
    }

    // Export CSV
    function exportLeadsCSV() {
      let csv = "ID,Name,Company,Email,Phone,Source,Campaign,Status,Speed,Owner,Score\n";
      leadsData.forEach(l => {
        csv += `"${l.id}","${l.name}","${l.company}","${l.email}","${l.phone}","${l.source}","${l.campaign}","${l.status}","${l.speed}","${l.owner}","${l.score}"\n`;
      });

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `LeadZam_Leads_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("CSV Downloaded", "Leads exported successfully.");
    }

    // Toast Engine
    function showToast(title, desc) {
      const toast = document.getElementById('success-toast');
      document.getElementById('toast-title').textContent = title;
      document.getElementById('toast-desc').textContent = desc;
      toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');

      setTimeout(() => {
        dismissSuccessToast();
      }, 5000);
    }

    function dismissSuccessToast() {
      const toast = document.getElementById('success-toast');
      toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    }

    // UX Review State Switcher Engine
    function setState(stateName) {
      // Reset UI state styles
      const states = ['default', 'drawer', 'qualify', 'success', 'empty', 'loading', 'error'];
      states.forEach(s => {
        const btn = document.getElementById('btn-' + s);
        if (btn) btn.className = "px-2.5 py-1 rounded font-medium transition text-slate-300 hover:text-white hover:bg-slate-700";
      });
      const activeBtn = document.getElementById('btn-' + stateName);
      if (activeBtn) activeBtn.className = "px-2.5 py-1 rounded font-semibold transition bg-[#1264F5] text-white shadow-xs";

      // Hide simulator containers
      document.getElementById('view-leads-container').classList.remove('hidden');
      document.getElementById('state-empty-container').classList.add('hidden');
      document.getElementById('state-loading-container').classList.add('hidden');
      document.getElementById('state-error-container').classList.add('hidden');

      if (stateName === 'drawer') {
        openLeadDrawer(leadsData[0]);
      } else if (stateName === 'qualify') {
        closeLeadDrawer();
        openQualifyModalForLead(leadsData[0].id);
      } else if (stateName === 'success') {
        closeLeadDrawer();
        closeQualifyModal();
        showToast("Lead Qualified Successfully!", "Rahul Sharma assigned to Amit Verma. WhatsApp sequence dispatched.");
      } else if (stateName === 'empty') {
        closeLeadDrawer();
        closeQualifyModal();
        document.getElementById('view-leads-container').classList.add('hidden');
        document.getElementById('state-empty-container').classList.remove('hidden');
      } else if (stateName === 'loading') {
        closeLeadDrawer();
        closeQualifyModal();
        document.getElementById('view-leads-container').classList.add('hidden');
        document.getElementById('state-loading-container').classList.remove('hidden');
      } else if (stateName === 'error') {
        closeLeadDrawer();
        closeQualifyModal();
        document.getElementById('view-leads-container').classList.add('hidden');
        document.getElementById('state-error-container').classList.remove('hidden');
      } else {
        closeLeadDrawer();
        closeQualifyModal();
        renderLeads();
      }
    }

    function retryConnection() {
      showToast("Reconnecting...", "Restoring Meta Ads Graph webhook subscription.");
      setTimeout(() => {
        setState('default');
        showToast("Webhooks Restored", "All live ingestion endpoints operating normally.");
      }, 1000);
    }

    // Mobile View Toggle
    function toggleMobileView() {
      const container = document.getElementById('mobile-view-container');
      const isHidden = container.classList.contains('hidden');
      if (isHidden) {
        renderMobileLeads();
        container.classList.remove('hidden');
      } else {
        container.classList.add('hidden');
      }
    }

    function renderMobileLeads() {
      const list = document.getElementById('mobile-leads-list');
      list.innerHTML = `
        <div class="flex items-center justify-between pb-2 border-b border-slate-200">
          <span class="font-bold text-slate-800 text-xs">Active Leads (${leadsData.length})</span>
          <span class="text-[10px] text-emerald-600 font-bold">Live Sync</span>
        </div>
      `;

      leadsData.slice(0, 5).forEach(l => {
        const item = document.createElement('div');
        item.className = "bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1.5 cursor-pointer";
        item.addEventListener('click', () => {
          toggleMobileView();
          openLeadDrawer(l);
        });
        item.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900">${l.name}</span>
            <span class="text-[10px] font-bold text-emerald-600">${l.speed}</span>
          </div>
          <div class="text-[11px] text-slate-500">${l.company} • ${l.source}</div>
          <div class="flex items-center justify-between text-[10px] pt-1 border-t border-slate-100">
            <span class="text-blue-600 font-bold">● ${l.status}</span>
            <span class="text-slate-400">Score: ${l.score}</span>
          </div>
        `;
        list.appendChild(item);
      });
    }

    function toggleSelectAll(masterCheckbox) {
      leadsData.forEach(l => l.selected = masterCheckbox.checked);
      renderLeads();
    }

    function toggleSelect(id, checkbox) {
      const lead = leadsData.find(l => l.id === id);
      if (lead) lead.selected = checkbox.checked;
    }

    function initDashboard() {
      // Navigation View Switching
      document.querySelectorAll('[data-view]').forEach(btn => {
        btn.addEventListener('click', () => switchView(btn.dataset.view));
      });

      // Search input
      const searchInput = document.getElementById('lead-search-input');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
      }

      // Header quick actions
      const btnSimulate = document.getElementById('btn-simulate-lead');
      if (btnSimulate) btnSimulate.addEventListener('click', simulateIncomingLead);

      const btnExport = document.getElementById('btn-export-csv');
      if (btnExport) btnExport.addEventListener('click', exportLeadsCSV);

      const btnAddLead = document.getElementById('btn-add-lead');
      if (btnAddLead) btnAddLead.addEventListener('click', openAddLeadModal);

      // Layout switcher
      const btnTable = document.getElementById('layout-table-btn');
      if (btnTable) btnTable.addEventListener('click', () => setPipelineLayout('table'));

      const btnKanban = document.getElementById('layout-kanban-btn');
      if (btnKanban) btnKanban.addEventListener('click', () => setPipelineLayout('kanban'));

      // Channel filter
      const channelFilter = document.getElementById('channel-filter');
      if (channelFilter) {
        channelFilter.addEventListener('change', (e) => filterByChannel(e.target.value));
      }

      // Status tabs
      document.querySelectorAll('.tab-btn[data-status]').forEach(btn => {
        btn.addEventListener('click', () => filterByStatus(btn.dataset.status, btn));
      });

      // Select all checkbox
      const selectAll = document.getElementById('select-all-leads');
      if (selectAll) {
        selectAll.addEventListener('change', (e) => toggleSelectAll(e.target));
      }

      // Automations & Integrations action buttons
      const btnNewAuto = document.getElementById('btn-new-automation');
      if (btnNewAuto) {
        btnNewAuto.addEventListener('click', () => alert('New automation workflow builder activated.'));
      }

      const btnSyncMeta = document.getElementById('btn-sync-meta');
      if (btnSyncMeta) {
        btnSyncMeta.addEventListener('click', () => alert('Meta OAuth credentials verified and synced.'));
      }

      const btnSyncGoogle = document.getElementById('btn-sync-google');
      if (btnSyncGoogle) {
        btnSyncGoogle.addEventListener('click', () => alert('Google Ads OAuth credentials verified and synced.'));
      }

      // State buttons
      const btnReset1 = document.getElementById('btn-state-reset-1');
      if (btnReset1) btnReset1.addEventListener('click', () => setState('default'));

      const btnStateSimulate = document.getElementById('btn-state-simulate');
      if (btnStateSimulate) btnStateSimulate.addEventListener('click', simulateIncomingLead);

      const btnReset2 = document.getElementById('btn-state-reset-2');
      if (btnReset2) btnReset2.addEventListener('click', () => setState('default'));

      const btnRetry = document.getElementById('btn-retry-connection');
      if (btnRetry) btnRetry.addEventListener('click', retryConnection);

      const btnReset3 = document.getElementById('btn-state-reset-3');
      if (btnReset3) btnReset3.addEventListener('click', () => setState('default'));

      // Lead Drawer buttons
      const drawerBackdrop = document.getElementById('drawer-backdrop');
      if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeLeadDrawer);

      const closeDrawerBtn = document.getElementById('close-drawer-btn');
      if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeLeadDrawer);

      const drawerWaBtn = document.getElementById('drawer-wa-btn');
      if (drawerWaBtn) drawerWaBtn.addEventListener('click', openWhatsAppComposer);

      const drawerCallBtn = document.getElementById('drawer-call-btn');
      if (drawerCallBtn) drawerCallBtn.addEventListener('click', logCall);

      const drawerQualifyBtn = document.getElementById('drawer-qualify-btn');
      if (drawerQualifyBtn) drawerQualifyBtn.addEventListener('click', openQualifyModalFromDrawer);

      const drawerDisqualifyBtn = document.getElementById('drawer-disqualify-btn');
      if (drawerDisqualifyBtn) drawerDisqualifyBtn.addEventListener('click', disqualifyCurrentLead);

      const waTemplateSelect = document.getElementById('wa-template-select');
      if (waTemplateSelect) {
        waTemplateSelect.addEventListener('change', (e) => applyWhatsAppTemplate(e.target.value));
      }

      const sendWaBtn = document.getElementById('send-wa-btn');
      if (sendWaBtn) sendWaBtn.addEventListener('click', sendWhatsAppMessage);

      const addNoteBtn = document.getElementById('add-note-btn');
      if (addNoteBtn) addNoteBtn.addEventListener('click', addLeadNote);

      const drawerBottomClose = document.getElementById('drawer-bottom-close-btn');
      if (drawerBottomClose) drawerBottomClose.addEventListener('click', closeLeadDrawer);

      const drawerBottomQualify = document.getElementById('drawer-bottom-qualify-btn');
      if (drawerBottomQualify) drawerBottomQualify.addEventListener('click', openQualifyModalFromDrawer);

      // Qualify modal buttons
      const closeQualifyX = document.getElementById('close-qualify-x-btn');
      if (closeQualifyX) closeQualifyX.addEventListener('click', closeQualifyModal);

      const cancelQualifyBtn = document.getElementById('cancel-qualify-btn');
      if (cancelQualifyBtn) cancelQualifyBtn.addEventListener('click', closeQualifyModal);

      const confirmQualifyBtn = document.getElementById('confirm-qualify-btn');
      if (confirmQualifyBtn) confirmQualifyBtn.addEventListener('click', confirmQualification);

      // Add lead modal buttons & form
      const closeAddLeadX = document.getElementById('close-add-lead-x-btn');
      if (closeAddLeadX) closeAddLeadX.addEventListener('click', closeAddLeadModal);

      const manualForm = document.getElementById('manual-add-lead-form');
      if (manualForm) manualForm.addEventListener('submit', handleManualAddLead);

      const cancelAddLeadBtn = document.getElementById('cancel-add-lead-btn');
      if (cancelAddLeadBtn) cancelAddLeadBtn.addEventListener('click', closeAddLeadModal);

      // Toast & Mobile preview
      const toastCalBtn = document.getElementById('toast-cal-btn');
      if (toastCalBtn) toastCalBtn.addEventListener('click', () => alert('Google Calendar invite dispatched to lead and rep.'));

      const toastDismissBtn = document.getElementById('toast-dismiss-btn');
      if (toastDismissBtn) toastDismissBtn.addEventListener('click', dismissSuccessToast);

      const closeMobilePreviewBtn = document.getElementById('close-mobile-preview-btn');
      if (closeMobilePreviewBtn) closeMobilePreviewBtn.addEventListener('click', toggleMobileView);

      // Initial render
      renderLeads();
      updateCounts();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initDashboard);
    } else {
      initDashboard();
    }