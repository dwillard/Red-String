$(function () {

// Plan:
// 1. Display current time.

function stringifyDate(date) {
	return date.getHours() + ":" + date.getMinutes();
};

var local_date = new Date();
var date_string = stringifyDate(local_date);

$('.realTimeFlag').find('.timestamp').text(date_string);

// 2. Display list of timezones.

// Data repurposed from http://blog.redfin.com/devblog/2007/08/getting_the_time_zone_from_a_web_browser.html#.UjS5XGTwJSQ
var timezones = [
	{
		name: 'Pacific/Marquesas',
		so: -570,
		wo: -570
	},
	{
		name: 'America/Adak',
		so: -540,
		wo: -600
	},
	{
		name: 'Pacific/Gambier',
		so: -540,
		wo: -540
	},
	{
		name: 'US/Alaska',
		so: -480,
		wo: -540
	},
	{
		name: 'Pacific/Pitcairn',
		so: -480,
		wo: -480
	},
	{
		name: 'US/Pacific',
		so: -420,
		wo: -480
	},
	{
		name: 'US/Arizona',
		so: -420,
		wo: -420
	},
	{
		name: 'US/Mountain',
		so: -360,
		wo: -420
	},
	{
		name: 'America/Guatemala',
		so: -360,
		wo: -360
	},
	{
		name: 'Pacific/Easter',
		so: -360,
		wo: -300
	},
	{
		name: 'US/Central',
		so: -300,
		wo: -360
	},
	{
		name: 'America/Bogota',
		so: -300,
		wo: -300
	},
	{
		name: 'US/Eastern',
		so: -240,
		wo: -300
	},
	{
		name: 'America/Caracas',
		so: -240,
		wo: -240
	},
	{
		name: 'America/Santiago',
		so: -240,
		wo: -180
	},
	{
		name: 'Canada/Atlantic',
		so: -180,
		wo: -240
	},
	{
		name: 'America/Montevideo',
		so: -180,
		wo: -180
	},
	{
		name: 'America/Sao_Paulo',
		so: -180,
		wo: -120
	},
	{
		name: 'America/St_Johns',
		so: -150,
		wo: -210
	},
	{
		name: 'America/Godthab',
		so: -120,
		wo: -180
	},
	{
		name: 'America/Noronha',
		so: -120,
		wo: -120
	},
	{
		name: 'Atlantic/Cape_Verde',
		so: -60,
		wo: -60
	},
	{
		name: 'Atlantic/Azores',
		so: 0,
		wo: -60
	},
	{
		name: 'Africa/Casablanca',
		so: 0,
		wo: 0
	},
	{
		name: 'Europe/London',
		so: 60,
		wo: 0
	},
	{
		name: 'Africa/Algiers',
		so: 60,
		wo: 60
	},
	{
		name: 'Africa/Windhoek',
		so: 60,
		wo: 120
	},
	{
		name: 'Europe/Amsterdam',
		so: 120,
		wo: 60
	},
	{
		name: 'Africa/Harare',
		so: 120,
		wo: 120
	},
	{
		name: 'Europe/Athens',
		so: 180,
		wo: 120
	},
	{
		name: 'Africa/Nairobi',
		so: 180,
		wo: 180
	},
	{
		name: 'Europe/Moscow',
		so: 240,
		wo: 180
	},
	{
		name: 'Asia/Dubai',
		so: 240,
		wo: 240
	},
	{
		name: 'Asia/Tehran',
		so: 270,
		wo: 210
	},
	{
		name: 'Asia/Kabul',
		so: 270,
		wo: 270
	},
	{
		name: 'Asia/Baku',
		so: 300,
		wo: 240
	},
	{
		name: 'Asia/Karachi',
		so: 300,
		wo: 300
	},
	{
		name: 'Asia/Calcutta',
		so: 330,
		wo: 330
	},
	{
		name: 'Asia/Katmandu',
		so: 345,
		wo: 345
	},
	{
		name: 'Asia/Yekaterinburg',
		so: 360,
		wo: 300
	},
	{
		name: 'Asia/Colombo',
		so: 360,
		wo: 360
	},
	{
		name: 'Asia/Rangoon',
		so: 390,
		wo: 390
	},
	{
		name: 'Asia/Almaty',
		so: 420,
		wo: 360
	},
	{
		name: 'Asia/Bangkok',
		so: 420,
		wo: 420
	},
	{
		name: 'Asia/Krasnoyarsk',
		so: 480,
		wo: 420
	},
	{
		name: 'Australia/Perth',
		so: 480,
		wo: 480
	},
	{
		name: 'Asia/Irkutsk',
		so: 540,
		wo: 480
	},
	{
		name: 'Asia/Tokyo',
		so: 540,
		wo: 540
	},
	{
		name: 'Australia/Darwin',
		so: 570,
		wo: 570
	},
	{
		name: 'Australia/Adelaide',
		so: 570,
		wo: 630
	},
	{
		name: 'Asia/Yakutsk',
		so: 600,
		wo: 540
	},
	{
		name: 'Australia/Brisbane',
		so: 600,
		wo: 600
	},
	{
		name: 'Australia/Sydney',
		so: 600,
		wo: 660
	},
	{
		name: 'Australia/Lord_Howe',
		so: 630,
		wo: 660
	},
	{
		name: 'Asia/Vladivostok',
		so: 660,
		wo: 600
	},
	{
		name: 'Pacific/Guadalcanal',
		so: 660,
		wo: 660
	},
	{
		name: 'Pacific/Norfolk',
		so: 690,
		wo: 690
	},
	{
		name: 'Asia/Magadan',
		so: 720,
		wo: 660
	},
	{
		name: 'Pacific/Fiji',
		so: 720,
		wo: 720
	},
	{
		name: 'Pacific/Auckland',
		so: 720,
		wo: 780
	},
	{
		name: 'Pacific/Chatham',
		so: 765,
		wo: 825
	},
	{
		name: 'Pacific/Enderbury',
		so: 780,
		wo: 780
	},
	{
		name: 'Pacific/Kiritimati',
		so: 840,
		wo: 840
	}
];

var findTimezoneFromName = function (name) {
	for (var index in timezones) {
		var timezone = timezones[index];
		if (timezone.name === name) {
			return timezone;
		}
	}
	return null;
};

var timezone_select = $('#dropDown');
for (var index in timezones) {
	var timezone = timezones[index];
	timezone_select.append(
		$('<option>').attr('value', timezone.name).text(timezone.name)
	);
}

// Plan for calculating time in selected timezone:
// if user selects Pacific/Midway
// then getUTCTime() in milliseconds,
// See if summer or winter, then pick the offset
// apply offset to utc-time, and convert to date 
var getDateInTimezone = function (timezone) {
	var local_date = new Date();
	var current_utc_time_ms = local_date.getTime() + local_date.getTimezoneOffset() * 60 * 1000;

	// TODO this is very hacky.
	var is_summer = local_date.getMonth() > 3 && local_date.getMonth() < 10;

	var offset =  is_summer ? timezone.so : timezone.wo;
	var time_in_timezone_ms = current_utc_time_ms + offset * 60 * 1000;
	var date_in_timezone = new Date(time_in_timezone_ms);
	return date_in_timezone;
};

var addNewTimezoneBox = function (timezone) {
	var date_in_timezone = getDateInTimezone(timezone);
	var new_timezone_box = $('.realTimeFlag').first().clone();
	new_timezone_box.find('.timestamp').first().text(stringifyDate(date_in_timezone));
	new_timezone_box.find('.locationstamp').first().text(timezone.name);
	$('.realTimeFlag').last().after(new_timezone_box);
};

timezone_select.change(function (e) {
	var selected_name = timezone_select.find('option:selected').val();
	var selected_timezone = findTimezoneFromName(selected_name);
	addNewTimezoneBox(selected_timezone);
});


});