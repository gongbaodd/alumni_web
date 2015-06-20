var TPL_URL = '../templates/';
var TPL = {
	header:TPL_URL+'header.html',
	carousel:TPL_URL+'carousel.html',
	navbar:TPL_URL+'navbar.html',
	modal:TPL_URL+'modal.html',
	container:TPL_URL+'container.html',

	sidebar:TPL_URL+'sidebar.html',
	login:TPL_URL+'login.html',
	annouance:TPL_URL+'annouance.html',
	department:TPL_URL+'department.html',
	links:TPL_URL+'links.html',
	admin:TPL_URL+'admin.html',

	article:TPL_URL+'article.html',
	news:TPL_URL+'news.html',
	olds:TPL_URL+'olds.html',
	video:TPL_URL+'video.html',
	corp:TPL_URL+'corps.html',
	paper:TPL_URL+'paper.html',
	feedback:TPL_URL+'feedback.html',

	footer:TPL_URL+'footer.html',
	sns:TPL_URL+'sns.html'

}
template.helper('birthday',function(content){
	var date = content.split(' ')[0].split('-');
	var now = new Date();
	var today = new Date(now.getFullYear(),now.getMonth(),now.getDate()).getTime();
	var birthday = new Date(now.getFullYear(),date[1]-1,date[2]).getTime();

	var sub = (birthday-today)/86400000;

	switch(sub){
		case 0:
		return '今天';
		case 1:
		return '明天';
		case 2: 
		return '后天';
		case 3:
		return '大后天';
		default:
		return date[1]+'月'+date[2]+'日';
	}
});