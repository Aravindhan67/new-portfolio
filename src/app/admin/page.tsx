export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-medium tracking-tight mb-8">DASHBOARD</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder cards */}
        <div className="p-6 border border-black/10 bg-black/5 rounded-sm flex flex-col gap-2">
          <span className="font-mono text-xs tracking-widest text-secondary uppercase">Total Projects</span>
          <span className="text-4xl font-light">4</span>
        </div>
        
        <div className="p-6 border border-black/10 bg-black/5 rounded-sm flex flex-col gap-2">
          <span className="font-mono text-xs tracking-widest text-secondary uppercase">Unread Messages</span>
          <span className="text-4xl font-light text-accent">0</span>
        </div>
        
        <div className="p-6 border border-black/10 bg-black/5 rounded-sm flex flex-col gap-2">
          <span className="font-mono text-xs tracking-widest text-secondary uppercase">System Status</span>
          <span className="text-xl font-light text-emerald-600 mt-2">All Systems Operational</span>
        </div>
      </div>
    </div>
  );
}
