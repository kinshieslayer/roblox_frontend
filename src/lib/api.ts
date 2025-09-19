// src/lib/api.ts

// Try to get base URL from environment (for flexibility on Vercel/Netlify/etc.)
const API_BASE_URL =
  (import.meta as any)?.env?.VITE_API_BASE_URL || "";

/**
 * Build the full API URL based on environment.
 * - If VITE_API_BASE_URL is set, it uses that.
 * - If running locally (localhost), defaults to http://127.0.0.1:5000
 * - Otherwise, defaults to your Render backend.
 */
export function buildApiUrl(path: string): string {
  let base = API_BASE_URL;

  if (!base) {
    if (typeof window !== "undefined" && window.location.hostname === "localhost") {
      base = "http://127.0.0.1:5000";
    } else {
      base = "https://roblox-backend-nb4s.onrender.com"; // ⬅️ replace with your Render backend URL
    }
  }

  // Clean up trailing/leading slashes
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
