function set_time(set_end_time) {
	console.log('set_time',set_end_time);
	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
	    'total': t,
	    'days': days,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };
	}

	function toDate(str) {
	  var m = str.split(/\D/);
	  return new Date(+m[0], +m[1] - 1, +m[2], +m[3], +m[4], +m[5]);
	}

	function initializeClock(id, endtime) {
	  var clock = document.getElementById(id);
	  var daysSpan = clock.querySelector('.days');
	  var hoursSpan = clock.querySelector('.hours');
	  var minutesSpan = clock.querySelector('.minutes');
	  var secondsSpan = clock.querySelector('.seconds');
	  console.log(clock);
	  // console.log("daysSpan",daysSpan);

	  function updateClock() {
	    var t = getTimeRemaining(endtime);

	    daysSpan.innerHTML = t.days;
	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }
	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}
	// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); 
	var deadline = new Date(Date.parse(set_end_time));
	console.log("deadline::",deadline);
	initializeClock('clockdiv', deadline);
}