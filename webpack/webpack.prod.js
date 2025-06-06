const path = require('path');

module.exports = {
	mode: 'production',
	devtool: false,
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/blog-customizer/', // 👈 ключевая строка
	},
};
