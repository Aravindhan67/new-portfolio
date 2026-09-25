import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";

// For demo purposes until MongoDB is hydrated
const mockProject = {
  title: "AI-Powered Hybrid Intrusion Detection System",
  slug: "hybrid-intrusion-detection",
  category: "AI / Cybersecurity",
  year: "2024",
  description: "A comprehensive security system integrating machine learning models for real-time anomaly detection.",
  technologies: ["Python", "XGBoost", "TensorFlow", "Scikit-learn", "Next.js"],
  problem: "Traditional intrusion detection systems rely on static signatures, failing to identify novel zero-day attacks and producing high false-positive rates.",
  solution: "An ensemble AI approach combining XGBoost and Deep Neural Networks to analyze network traffic patterns, significantly improving detection accuracy of unknown threats.",
  architecture: "Data ingestion pipeline -> Feature engineering -> Dual-model inference engine -> Next.js real-time dashboard.",
  implementation: "Built the models using Python and TensorFlow, trained on the CIC-IDS2017 dataset. Deployed via a Flask API communicating with a Next.js frontend.",
  challenges: "Balancing inference speed with accuracy. Resolved by optimizing the feature set and using XGBoost for initial filtering.",
  result: "Achieved 99.2% accuracy on the test set with a false positive rate under 1%.",
  githubUrl: "#",
  liveUrl: "#",
};

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  await params; // Acknowledge params to prevent unused var warning
  
  // In a real implementation: const project = await getProjectBySlug((await params).slug);
  const project = mockProject; // Mocking for now

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Back Link */}
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-secondary hover:text-accent mb-12 transition-colors"
        >
          <ArrowLeft size={16} /> Back to work
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-widest text-accent uppercase">
              {project.category}
            </span>
            <span className="font-mono text-xs tracking-widest text-secondary uppercase">
              {project.year}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight uppercase leading-[0.9]">
            {project.title}
          </h1>
          
          <p className="text-xl text-zinc-600 font-light leading-relaxed mt-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {project.technologies.map(tech => (
              <span key={tech} className="px-4 py-2 border border-black/10 rounded-full text-xs font-mono tracking-widest uppercase text-zinc-600">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="w-full aspect-video bg-zinc-100 border border-black/5 rounded-sm mb-24 flex items-center justify-center text-secondary font-mono tracking-widest uppercase">
          Project Media Placeholder
        </div>

        {/* Case Study Content */}
        <div className="flex flex-col gap-24">
          
          {project.problem && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <h2 className="text-lg font-mono tracking-widest uppercase text-accent">The Problem</h2>
              <p className="md:col-span-2 text-zinc-600 font-light leading-relaxed text-lg">
                {project.problem}
              </p>
            </div>
          )}
          
          {project.solution && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <h2 className="text-lg font-mono tracking-widest uppercase text-accent">The Solution</h2>
              <p className="md:col-span-2 text-zinc-600 font-light leading-relaxed text-lg">
                {project.solution}
              </p>
            </div>
          )}

          {project.architecture && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <h2 className="text-lg font-mono tracking-widest uppercase text-accent">Architecture</h2>
              <p className="md:col-span-2 text-zinc-600 font-light leading-relaxed text-lg">
                {project.architecture}
              </p>
            </div>
          )}

          {project.implementation && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <h2 className="text-lg font-mono tracking-widest uppercase text-accent">Implementation</h2>
              <p className="md:col-span-2 text-zinc-600 font-light leading-relaxed text-lg">
                {project.implementation}
              </p>
            </div>
          )}

          {project.challenges && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <h2 className="text-lg font-mono tracking-widest uppercase text-accent">Challenges</h2>
              <p className="md:col-span-2 text-zinc-600 font-light leading-relaxed text-lg">
                {project.challenges}
              </p>
            </div>
          )}

          {project.result && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <h2 className="text-lg font-mono tracking-widest uppercase text-accent">Result</h2>
              <p className="md:col-span-2 text-zinc-600 font-light leading-relaxed text-lg">
                {project.result}
              </p>
            </div>
          )}
          
        </div>

        {/* Links */}
        <div className="mt-24 pt-12 border-t border-black/10 flex flex-wrap gap-6">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-black/20 rounded-sm hover:bg-black hover:text-white transition-all">
              <Code2 size={18} />
              <span className="font-mono text-sm tracking-widest uppercase">View Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-black text-white border border-black rounded-sm hover:bg-transparent hover:text-black transition-all">
              <ExternalLink size={18} />
              <span className="font-mono text-sm tracking-widest uppercase">Live Demo</span>
            </a>
          )}
        </div>

      </div>
    </main>
  );
}
