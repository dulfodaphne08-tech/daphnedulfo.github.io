import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS
  ? "/daphnedulfo.github.io"
  : "";

const nextConfig: NextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  output: "export",
  experimental: {
    agentFeedback: true,
  },
};

export default nextConfig;
