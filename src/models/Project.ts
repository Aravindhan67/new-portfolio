import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  thumbnail: string;
  images: string[];
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
  year: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  implementation?: string;
  challenges?: string;
  result?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  technologies: { type: [String], required: true },
  thumbnail: { type: String, default: "" },
  images: { type: [String], default: [] },
  video: { type: String },
  githubUrl: { type: String },
  liveUrl: { type: String },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  year: { type: String, required: true },
  // Case Study fields
  problem: { type: String },
  solution: { type: String },
  architecture: { type: String },
  implementation: { type: String },
  challenges: { type: String },
  result: { type: String },
}, { 
  timestamps: true 
});

// Check if the model already exists to prevent OverwriteModelError in Next.js HMR
export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
