/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: {
		main: "./src/main.tsx"
	},
	builtins: {
		html: [
			{
				template: "./index.html"
			}
		],
		emotion: true,
		react: {
			importSource: '@emotion/react',
		},
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset"
			}
		]
	}
};
