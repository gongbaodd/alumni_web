function makeFooter(info){
	$.ajax({
	url:TPL.footer,
	context:$('#footer')[0],
	dataType:'html',
	success:function(data){
		var i=j=0;
		while(info.msg[i++]){
			while(info.msg[i-1][j++]){
				if(!/^http.*/.test(info.msg[i-1][j-1].newspic)){
					info.msg[i-1][j-1].newspic = 'http://alumni.sut.edu.cn/'+info.msg[i-1][j-1].newspic;
				}
			}
			j=0;
		}

		var render = template.compile(data);
		var html = render(info);
		$('#footer').html(html);
	},
	error:error()
	})	
}
function getInfo(makeFooter){
	var campusPics = $.ajax({url:APIS.campusPics,dataType:'jsonp'});
	var contacts = $.ajax({url:APIS.contacts,dataType:'jsonp'});
	var souvenir = $.ajax({url:APIS.souvenir,dataType:'jsonp'});
	$.when(campusPics,contacts,souvenir).done(function(){
		var data = {msg:[]};
		data.msg.push(arguments[0][0].msg.slice(0,3));
		data.msg.push(arguments[1][0].msg.slice(0,3));
		data.msg.push(arguments[2][0].msg.slice(0,3));
		makeFooter(data);
		// console.log(data);
	});
}

getInfo(makeFooter);
