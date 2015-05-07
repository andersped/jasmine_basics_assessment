var test1 = require('../assessment.js');

describe ("Letter Grader", function(){

	it("Returns the letter grade that is associated with the score", function(){
		expect(test1.letterGrade(90)).toEqual("A");
		expect(test1.letterGrade(80)).toEqual("B");
		expect(test1.letterGrade(70)).toEqual("C");
		expect(test1.letterGrade(60)).toEqual("D");
		expect(test1.letterGrade(20)).toEqual("F");
		expect(test1.letterGrade(72.5)).toEqual("C");
	});
});

describe ("Average of Array", function(){
	it("Returns the average of the numbers in a given array", function(){
		expect(test1.average1([90, 95, 87, 60])).toEqual(83);
		expect(test1.average1([1,2,3])).toEqual(2);
	});
});

describe ("Return the Median of an Array", function(){
	it("Returns the middle value of an array", function(){
		expect(test1.median([1,2,3])).toEqual(2);
	});
});

describe ("Returns the Mode of an Array", function(){
	it("Returns the value that appears most often", function(){
		expect(test1.mode([1,2,2,3])).toEqual(2);
	});
});