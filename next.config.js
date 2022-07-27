/** @type {import('next').NextConfig} */

module.exports = {
	reactStricktMode: false,
	webpack5: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false };

		return config;
		},
};
