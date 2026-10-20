export type Job = {
  id: string;
  title: string;
  company: string;
  category: string;
  type: string;
  location: string;
  salary: string;
  posted: string;
  description: string;
  skills: string[];
  applyUrl: string;
  demo?: boolean;
};

export type User = { fullName: string; email: string; degree?: string; graduationYear?: string; portfolio?: string; linkedin?: string; github?: string; cvName?: string; };