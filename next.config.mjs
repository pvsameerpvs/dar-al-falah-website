import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  // Keep Next.js focused on this project folder even though another lockfile exists at the user home.
  outputFileTracingRoot: __dirname
};

export default nextConfig;
