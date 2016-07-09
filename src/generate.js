module.exports = function(source) {
	var output = source.replace(/class=/g, "className=");
	return output;
}