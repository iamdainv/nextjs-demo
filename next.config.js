const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	serverRuntimeConfig: {
		// Will only be available on the server side
		mySecret: 'secret',
		secondSecret: process.env.SECOND_SECRET, // Pass through env variables
	},
	publicRuntimeConfig: {
		// Will be available on both server and client
		staticFolder: '/static',
	},
	reactStrictMode: false,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};

		return config;
	},
	assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
};
