// Codes by mahdi tasha
// Creating and exporting Type of general things
export interface ProjectType {
  title: string;
  description: string;
  liveUrl?: string;
  stack: string[];
  status: "pending" | "completed";
  dates: {
    startedAt: string;
    endedAt?: string;
  };
}

export interface BlogType {
  createdAt: string;
  title: string;
  content: string;
  keywords: string[];
  description: string;
}
