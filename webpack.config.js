const HtmlWebpackPlugin=require('html-webpack-plugin');
const {VueLoaderPlugin}=require('vue-loader');

module.exports={
	mode:'production',
	entry:'./src/main.js',
	output:{
		publicPath:'auto',
		clean:true,
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader',
			},
		]
	},
	//eval-source-map source-map
	devtool:'source-map',
	plugins:[
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template:'index.html',
			minify:false,
		}),
	]
};
