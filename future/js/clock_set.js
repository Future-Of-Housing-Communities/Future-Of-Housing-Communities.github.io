// function new_Date_use(date) {
// 	// body...
// 	var t = date.split(/[- :]/);

// 	// Apply each element to the Date function
// 	var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
// 	var actiondate = new Date(d);
// 	return actiondate
// }

function convertDateForIos(date_from) {
	// var string = document.location + '';
	// console.log("date_from,",date_from);
	// if(typeof date !== 'string'){
	//    var date = date.toString();
	// }
	// var date1 = date.toString(); 
	// var arr = date1.split(',');
	
    if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
    	console.log("IOS");
    	date1 = date_from + '';
	    var arr = date1.split(/[- :]/);
	    var date_all = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
	    return date_all;
	}
	else{
		console.log("WEB",date_from);
		return new Date(date_from);
	}
}


function set_time(set_end_time) {


	// console.log('set_time',set_end_time);
	// var actiondate = new Date(date);
	// to this:

	// var t = date.split(/[- :]/);

	// // Apply each element to the Date function
	// var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
	// var actiondate = new Date(d);



	function getTimeRemaining(endtime) {
		console.log(endtime);
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

		// var m_date = moment(m).format();
		// var formatedDate = new Date(m_date);
		// return formatedDate

		return new Date(m.replace(' ', 'T'));



	  // return new Date(+m[0], +m[1] - 1, +m[2], +m[3], +m[4], +m[5]);
	  // return convertDateForIos(+m[0], +m[1] - 1, +m[2], +m[3], +m[4], +m[5]);
	}

	function initializeClock(id, endtime) {
	  var clock = document.getElementById(id);
	  var daysSpan = clock.querySelector('.days');
	  var hoursSpan = clock.querySelector('.hours');
	  var minutesSpan = clock.querySelector('.minutes');
	  var secondsSpan = clock.querySelector('.seconds');
	  console.log(clock);
	  console.log("daysSpan",daysSpan);

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
	// var deadline = new Date(Date.parse(set_end_time));
	// var deadline = convertDateForIos(Date.parse(set_end_time));
	// var m_date = moment(Date.parse(set_end_time)).format();
	// var deadline = new Date(m_date);
	// return formatedDate

	var deadline = new Date(Date.parse(set_end_time).replace(' ', 'T'));


	console.log("deadline::",deadline);
	initializeClock('clockdiv', deadline);
}