import { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, MessageSquare, FolderGit2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard | T. Aravindhan",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground pt-24 md:pt-0">
      
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 border-r border-black/10 bg-zinc-100 p-6 flex flex-col gap-8 md:min-h-screen md:fixed">
        <div>
          <Link href="/" className="text-xl font-medium tracking-widest uppercase">
            ARAVINDHAN
          </Link>
          <div className="text-xs text-accent mt-1 tracking-widest uppercase">Admin Panel</div>
        </div>
        
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/admin" className="flex items-center gap-3 text-secondary hover:text-foreground transition-colors">
            <LayoutDashboard size={18} />
            <span className="font-mono text-sm uppercase">Dashboard</span>
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-3 text-secondary hover:text-foreground transition-colors">
            <FolderGit2 size={18} />
            <span className="font-mono text-sm uppercase">Projects</span>
          </Link>
          <Link href="/admin/messages" className="flex items-center gap-3 text-secondary hover:text-foreground transition-colors">
            <MessageSquare size={18} />
            <span className="font-mono text-sm uppercase">Messages</span>
          </Link>
        </nav>
      </aside>

      {/* Admin Content */}
      <main className="flex-1 md:ml-64 p-6 md:p-12">
        {children}
      </main>
      
    </div>
  );
}
