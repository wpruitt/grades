var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var scoreTest = ["82", "71", "95", "55", "98", "69", "72"];
var a = 0
var b = 0
var c = 0
var d = 0
var f = 0
var scoresLen = scores.length
var maxScores = scores
for (var i = 0; i < scores.length; i++) {
	if (scores[i] >= 91) {
		a += 1;
	} else if (scores[i] <= 90 && scores[i] >= 81){
		b += 1;
	} else if (scores[i] <= 80 && scores[i] >= 71){
		c += 1;
	} else if (scores[i] <= 70 && scores[i] >= 61){
		d += 1;
	} else{
		f += 1;
	}
};
console.log("There are " + a +"A's, " + b + "B's, " + c + "C's," + d + "D's, and " + f + "F's.");
console.log("The loweset grade is " + Math.min.apply(null, scores) + ".");
console.log("The highest grade is " + Math.max.apply(null, scores) + ".");
for (var x = 0; x < scoresLen - 1; x++){
	if (maxScores[0] < maxScores[1]){
		maxScores.splice(0, 1);}
	else {
		maxScores.splice(1, 1);
	}
		console.log(maxScores);
};
console.log(scores);
for (var y = 0; y < scoresLen - 1; y++){
	var minScores = scores
	if (minScores[0] > minScores[1]){
		minScores.splice(0, 1);}
	else {
		minScores.splice(1, 1);
	}
		console.log(minScores);
};


	
// scoreString = scores.toString
// lowestScore = Math.min(scoreTest)
// console.log(lowestScore)

// console.log(highestScore)
// function maxScore(array){
// 	score =
// 	for (i in array){

// 	}
// }
// var lowestgrade = 100
// for (var i = 0; i < scores.lenght; i++) {
// 	if (scores[i] < lowestgrade) {
// 		// lowestgrade = scores[i]
// 		console.log("undone" + scores[i])
// 		console.log(lowestgrade)
// 	}
// 	else{
// 		consloe.log("done")
// 	}
// }
// scoresInOrder = scores.sort
// scoresArray = scores.toString()
// 
// console.log("The lowest grade is ")