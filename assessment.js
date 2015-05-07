module.exports = {
	letterGrade: function(score){
		if (score <= 100 && score >= 90){
			return "A";
		}
		else if (score <= 89.9 && score >= 80){
			return "B";
		}
		else if (score <= 79.9 && score >= 70){
			return "C";
		}
		else if (score <= 69.9 && score >= 60){
			return "D";
		}
		else if (score < 60){
			return "F";
		}
	},	
	average1: function(arr){
		var sums = 0
		var length = arr.length;
		for (var i = 0; i < length; i++){
			sums += arr[i];
		}
		return sums/length;
	},
	median: function(arr){
		return arr[(arr.length+1)/2];

		}

	},
	mode: function(arr){

	},


};

