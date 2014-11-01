var calculator = {
	add: function(str){
		if (!str) {
			return 0;
		};
		var delimiter = ',';

		if (str.indexOf('//') == 0 && (str.indexOf('\n') == 3)) {
			delimiter = str[2];
			str = str.slice(4);
		};

		str = str.replace('\n', delimiter);

		var val = 0;
		var arr = str.split(delimiter);

		for (var i = 0; i < arr.length; i++) {
			if (!arr[i].length) throw new Error("Some shit happens!");
			if (arr[i] < 0) throw new Error('Negative numbers are not allowed');
			val += +arr[i];
		};

		return val;
	}
}