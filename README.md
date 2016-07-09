# class-to-classname
This is a webpack loader to give you the freedom to use class instead of className in your JSX
Using this is very simple.

####Step 1:

	npm install class-to-classname --save-dev

####Step 2:
Use it in your webpack configuration file.

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "class-to-classname"
			}
		]
	}

####Step 3:
Now you can use `class` instead of `className` in your `jsx` or `js` files.

	render(){
		return <img class="myClass" />
	}
