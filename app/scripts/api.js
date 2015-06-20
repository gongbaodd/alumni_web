var URL = 'http://alumni.sut.edu.cn/';
var SNS = 'http://sns.sut.edu.cn/'
var API_URL = URL+'Inc/apis/';
var SNS_API = SNS+'api/xyh?type=jsonp&m=';

var APIS = {
	alumniInfo:API_URL+'AlumniInfo.asp',//
	alumniStats:API_URL+'AlumniStats.asp',//
	announance:API_URL+'Announance.asp',//
	campusPics:API_URL+'CampusPics.asp',
	collageStats:API_URL+'CollageStats.asp',//
	contacts:API_URL+'Contacts.asp',
	corpLinks:API_URL+'CorpLinks.asp',//
	corps:API_URL+'Corps.asp',//
	donation:API_URL+'Donation.asp',//
	emotions:API_URL+'Emotions.asp',//
	fameAlumnis:API_URL+'FameAlumnis.asp',//
	feedback:API_URL+'Feedback.asp',//
	links:API_URL+'Links.asp',//
	mainNews:API_URL+'MainNews.asp',//
	memories:API_URL+'Memories.asp',//
	oldDays:API_URL+'OldDays.asp',//
	pic:API_URL+'Pic.asp',//
	rules:API_URL+'Rules.asp',//
	souvenir:API_URL+'souvenir.asp',
	histories:API_URL+'SUTHistories.asp',//
	schoolLinks:API_URL+'SUTLinks.asp',//
	medias:API_URL+'SUTMedias.asp',//
	members:API_URL+'SUTmembers.asp',//
	video:API_URL+'Video.asp',//
	years:API_URL+'Years.asp',//
	newMember:SNS_API+'newxy',
	hotMember:SNS_API+'hotxy',
	birthday:SNS_API+'birthday'
}

var URLs = {
		ann:'http://alumni.sut.edu.cn/main.asp?classid=22',
		mainNews:'http://alumni.sut.edu.cn/main.asp?classid=28',
		alumniInfo:'http://alumni.sut.edu.cn/main.asp?classid=23',
		collageStats:'http://alumni.sut.edu.cn/main.asp?classid=1',
		medias:'http://alumni.sut.edu.cn/main.asp?classid=2',
		members:'http://alumni.sut.edu.cn/main.asp?classid=3',
		memories:'http://alumni.sut.edu.cn/main.asp?classid=36',
		histories:'http://alumni.sut.edu.cn/main.asp?classid=15',
		emotions:'http://alumni.sut.edu.cn/main.asp?classid=14',
		oldDays:'http://alumni.sut.edu.cn/main.asp?classid=13',
		CorpInfo:'http://alumni.sut.edu.cn/main.asp?classid=11',
		Donations:'http://alumni.sut.edu.cn/main.asp?classid=32',
		video:'http://alumni.sut.edu.cn/gdsp.asp',
		years:'http://alumni.sut.edu.cn/main.asp?classid=12',
		rules:'http://alumni.sut.edu.cn/main.asp?classid=24',
		campus:'http://alumni.sut.edu.cn/main.asp?classid=33',
		concat:'http://alumni.sut.edu.cn/xytx.asp',
		suvenir:'http://alumni.sut.edu.cn/gdsp.asp'
	}

function error(){
	$(this).addClass('well').html('无法获得数据，请按F5刷新本页。');
}
