function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var bg = new Vue({
  el: '#bg',
  data: {
    view_page_text: false // 1 : text; 0 :icon
  },
  created: function () {
  	let page = getParameterByName('page'); // "lorem"
	// console.log("page::",page);
	// if(page == "text"){
	// 	this.view_page_text = true;
	// }
	// else if(page == "icon"){
	// 	this.view_page_text = false;
	// }
	// else{
	// 	this.view_page_text = false;
	// }
	this.view_page_text = false;
	// console.log("view_page_text",this.view_page_text);
  }

});


function set_time(set_end_time) {
	
	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		if(t < 0){
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		}
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	function initializeClock(id, endtime) {
		var clock = document.getElementById(id);
		var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');

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
	var deadline = new Date(Date.parse(set_end_time));
	initializeClock('clockdiv', deadline);
}