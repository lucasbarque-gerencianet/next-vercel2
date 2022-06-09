// import APM from './infra/tools/apm.ts';
import { getConfig } from './infra/config/config.ts';

const config = (async () => {
  return await getConfig();
});

if (process.env.NODE_ENV !== 'development') {
  () => new APM(config);
}

console.log(config);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: config.environments
};

module.exports = nextConfig;
