var options = [
	'Consultant',
	'Entrepreneur', 
	'Coffee Drinker', 
	'Data Scientist',
	'Strategist',
];

function arrayRemove(arr, value) {
   return arr.filter(function(ele) {
       return ele != value;
   });
}

function swapText() {
	var btn = document.getElementById("btn");
	var optionsAvb = arrayRemove(options, btn.innerHTML);
	var randomPick = optionsAvb[Math.floor(Math.random() * optionsAvb.length)];
	btn.innerHTML = randomPick;
}

function iterStart() {
	var i = 0, nmax = 13;
	function iter() {
    	if (i < nmax) {
    		i++;
    		swapText();
        	setTimeout(iter, 20*i);
    	}
    	else {
    		var btn = document.getElementById("btn")
			btn.innerHTML = options[0];
    	}
	}
	iter();
}

window.onload = iterStart;
