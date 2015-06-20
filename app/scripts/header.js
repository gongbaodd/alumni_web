$.ajax({
	url:TPL.header,
	context:$('#header')[0],
	dataType:'html',
	success:function(data){
		var render = template.compile(data);
		var html = render({});
		$('#header').append(html);
		getPics(makeCarousel);
		makeNav();
	},
	error:error()
})

function getPics(makeCarousel){
	$.ajax({
		url:APIS.pic,
		dataType:'jsonp',
		context:$('#carousel')[0],
		success:function(data){
			makeCarousel(data);
		},
		error:error()
	})
}

function makeCarousel(data){
	$.ajax({
		url:TPL.carousel,
		dataType:'html',
		context:$('#carousel')[0],
		success:function(str){
			var render = template.compile(str);
			var html = render(data);
			$('#carousel').html(html);
		},
		error:error()
	})
}

function makeNav(){
	$.ajax({
		url:TPL.navbar,
		dataType:'html',
		context:$('#navbar')[0],
		success:function(str){
			var render = template.compile(str);
			var html = render({});
			$('#navbar').html(html);

			makeContacts();

			$('#weibo').on('click',function(e){
				e.preventDefault();
				$('#weibo_frame').html('<iframe name="main1" width="100%" height="450" class="share_self"  src="http://v.t.sina.com.cn/widget/widget_blog.php?uid=1802336443"  frameborder="0" allowtransparency="0" mytubeid="mytube6"></iframe>');
				$('#weibo_modal').modal();
			});
			$('#weixin').on('click',function(e){
				e.preventDefault();
				$('#weixin_frame').html('<iframe name="main2" width="100%" height="450" src="http://www.weixinguanjia.cn/weiweb/18237"></iframe>');
				$('#weixin_modal').modal();
			});
			$('#qq').on('click',function(e){
				e.preventDefault();
				$('#qq_modal').modal();
			});
		},
		error:error()
	});

	function makeContacts(){
		$.ajax({
			url:TPL.modal,
			dataType:'html',
			context:$('#modal')[0],
			success:function(str){
				var render = template.compile(str);
				var html = render({});
				$('#modal').html(html);
			},
			error:error()
		})
	}
}