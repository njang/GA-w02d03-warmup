$(function() {
	$('#start').on('click', startTimer);
	$('#stop').on('click', stopTimer);
	$('#reset').on('click', resetTimer);
	$('#countdown').on('click', countdownTimer);
}); // end window onload


//===================
// EVENT HANDLERS
// ==================

let timer = 0;

let startTimer = function() {
	console.log('start timer clicked');
	timeShown = Number($('#stopwatch').text());
	timer = setInterval(() => {
		$('#stopwatch').html(timeShown);
		timeShown++;
	}, 1000);
};

var stopTimer = function() {
	console.log('stop timer clicked');
	clearInterval(timer);
};

var resetTimer = function() {
	console.log('reset timer clicked');
	timeShown = 0;
	$('#stopwatch').html(timeShown);
	stopTimer();
};

var countdownTimer = function () {
	console.log('countdown timer clicked');
	let countdown = Number($('#stopwatch').text());
	while (countdown >= 0) {
		timer = setInterval(() => {
			$('#stopwatch').html(countdown);
			countdown--;
			console.log(countdown);
		}, 1000);
	}
};


