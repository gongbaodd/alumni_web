$.ajax({
	url:TPL.container,
	dataType:'html',
	context:$('#container')[0],
	success:function(data){
		var render = template.compile(data);
		var html = render({});
		$('#container').html(html);
		makeSidebar();
		makeArticle();
	},
	error:error()
})

function makeSidebar(){
	$.ajax({
	url:TPL.sidebar,
	context:$('#sidebar')[0],
	dataType:'html',
	success:function(data){
		var render = template.compile(data);
		var html = render({});
		$('#sidebar').html(html);

		makeLogin();
		getAnnouance(makeAnnouance);
		makeDepartment();
		getLinks(makeLinks);
		makeAdmin();
	},
	error:error()
	});

	function makeLogin(){
		$.ajax({
			url:TPL.login,
			context:$('#login')[0],
			dataType:'html',
			success:function(data){
				var render = template.compile(data);
				var html = render({});
				$('#login').html(html);

				$('#gotoSNS').on('click',function(e){
					e.preventDefault();
					window.open('http://sns.sut.edu.cn','_blank');
				})
			},
			error:error()
		});
	};
	function makeAnnouance(data){
		$.ajax({
			url:TPL.annouance,
			context:$('#annouance')[0],
			dataType:'html',
			success:function(str){
				var render = template.compile(str);
				data.msg = data.msg.slice(0,3);
				var html = render(data);
				$('#annouance').html(html);
			},
			error:error()
		});
	};
	function getAnnouance(makeAnnouance){
		$.ajax({
		url:APIS.announance,
		context:$('#annouance')[0],
		dataType:'jsonp',
		success:function(data){
			makeAnnouance(data);
		},
		error:error()
		})
	};

	function makeDepartment(){
		$.ajax({
			url:TPL.department,
			context:$('#department')[0],
			dataType:'html',
			success:function(str){
				var render = template.compile(str);
				var html = render({});
				$('#department').html(html);
			},
			error:error()
		});
	};

	function makeLinks(data){
		// console.log(data)
		$.ajax({
			url:TPL.links,
			context:document.body,
			dataType:'html',
			success:function(str){
				var render = template.compile(str);
				var html = render(data);
				$('#links').html(html);

				$('#links .pagination-cover').on('click',function(e){
					e.preventDefault();
					e.target = e.target ||e.srcElement;
					var target = $($(e.target).parent());
					var index = target.text()-1;

					var lists = target.closest('.tab-pane').find('.list-group');
					// console.log(lists)
					lists.not('.hide').addClass('hide');
					$(lists[index]).removeClass('hide');
					
					target.siblings().removeClass('active');
					target.addClass('active');
				});
			}
		});
	}

	function getLinks(makeLinks){
		var link1 = $.ajax({
			url:APIS.schoolLinks,
			dataType:'jsonp'
		});
		var link2 = $.ajax({
			url:APIS.links,
			dataType:'jsonp'
		});
		$.when(link1,link2).done(function(msg1,msg2){
			// console.log(arguments)
			var data = {};
			data.msg1 = [];
			data.msg2 = [];

			var start1=start2=0;
			var n = 8;
			while(msg1[0].msg[start1]){
				data.msg1.push(msg1[0].msg.slice(start1,start1+n));
				start1 += n;
			}

			while(msg2[0].msg[start2]){
				data.msg2.push(msg2[0].msg.slice(start2,start2+n));
				start2 += n;
			}
			makeLinks(data);
		});
	}

	function makeAdmin(){
		$.ajax({
		url:TPL.admin,
		context:document.body,
		dataType:'html',
		success:function(data){
			var render = template.compile(data);
			var html = render({});
			$('#admin').html(html);
		}
	})
	}
}

function makeArticle(){
	$.ajax({
	url:TPL.article,
	context:document.body,
	dataType:'html',
	success:function(data){
		var render = template.compile(data);
		var html = render({});
		$('#article').html(html);

		getNews(makeNews);
		getOlds(makeOlds);
		getVideo(makeVideo);
		getCorps(makeCorps);
		getPaper(makePaper);
		getFeedback(makeFeedback);
		getSNS(makeSNS);
	}
	});

	function makeNews(data){
		$.ajax({
		url:TPL.news,
		context:document.body,
		dataType:'html',
		success:function(str){
			var render = template.compile(str);
			var html = render(data);
			$('#news').html(html);
		}
		});
	}

	function getNews(makeNews){
		var mainNews = $.ajax({url:APIS.mainNews,dataType:'jsonp'});
		var alumniInfo = $.ajax({url:APIS.alumniInfo,dataType:'jsonp'});
		var collageStats = $.ajax({url:APIS.collageStats,dataType:'jsonp'});
		var medias = $.ajax({url:APIS.medias,dataType:'jsonp'});
		var members = $.ajax({url:APIS.members,dataType:'jsonp'});

		$.when(mainNews,alumniInfo,collageStats,medias,members).done(function(){
			// console.log(arguments)
			var data = {msg:[]};
			data.msg.push(arguments[0][0].msg.slice(0,10));
			data.msg.push(arguments[1][0].msg.slice(0,10));
			data.msg.push(arguments[2][0].msg.slice(0,10));
			data.msg.push(arguments[3][0].msg.slice(0,10));
			data.msg.push(arguments[4][0].msg.slice(0,10));

			makeNews(data);
			// console.log(data)
		})
	}

	function makeOlds(data){
		$.ajax({
		url:TPL.olds,
		context:document.body,
		dataType:'html',
		success:function(str){
			var render = template.compile(str);
			var html = render(data);
			$('#olds').html(html);
		}
		});
	}
	function getOlds(makeOlds){
		var memories = $.ajax({url:APIS.memories,dataType:'jsonp'});
		var histories = $.ajax({url:APIS.histories,dataType:'jsonp'});
		var emotions = $.ajax({url:APIS.emotions,dataType:'jsonp'});
		var oldDays = $.ajax({url:APIS.oldDays,dataType:'jsonp'});

		$.when(memories,histories,emotions,oldDays).done(function(){
			var data={msg:[]};

			data.msg.push(arguments[0][0].msg.slice(0,3));
			data.msg.push(arguments[1][0].msg.slice(0,3));
			data.msg.push(arguments[2][0].msg.slice(0,3));
			data.msg.push(arguments[3][0].msg.slice(0,3));
			// console.log(data)

			makeOlds(data);
		})
	}

	function makeVideo(data){
		$.ajax({
		url:TPL.video,
		context:document.body,
		dataType:'html',
		success:function(str){
			var render = template.compile(str);
			var html = render(data);
			$('#video').html(html);
		}
		});
	}
	function getVideo(makeVideo){
		$.ajax({
			url:APIS.video,
			dataType:'jsonp',
			success:function(data){
				makeVideo(data);
				// console.log(data);
			}
		});
	}
	function makeCorps(data){
		$.ajax({
		url:TPL.corp,
		context:document.body,
		dataType:'html',
		success:function(str){
			var render = template.compile(str);
			var html = render(data);
			$('#corps').html(html);

			$('#corps .pagination-cover').on('click',function(e){
					e.preventDefault();
					e.target = e.target ||e.srcElement;
					var target = $($(e.target).parent());
					var index = target.text()-1;

					var lists = target.closest('.tab-pane').find('.corp');
					// console.log(lists)
					lists.not('.hide').addClass('hide');
					$(lists[index]).removeClass('hide');
					
					target.siblings().removeClass('active');
					target.addClass('active');
				});
		}
		});
	}
	function getCorps(makeCorps){
		var link = $.ajax({url:APIS.corpLinks,dataType:'jsonp'});
		var inf = $.ajax({url:APIS.corps,dataType:'jsonp'});
		var fame = $.ajax({url:APIS.fameAlumnis,dataType:'jsonp'});
		var donate = $.ajax({url:APIS.donation,dataType:'jsonp'});

		$.when(link,inf,fame,donate).done(function(){
			var data={msg:[]};

			var links = [];
			var start = 0;
			var n = 10;
			while(arguments[0][0].msg[start]){
				links.push(arguments[0][0].msg.slice(start,start+n));
				start += n;
			}

			var faces = [];
			var start = 0;
			var n = 10;
			while(arguments[2][0].msg[start]){
				faces.push(arguments[2][0].msg.slice(start,start+n));
				start += n;
			}
			var i = 0;
			while(arguments[2][0].msg[i++]){
				if(!/^http.*/.test(arguments[2][0].msg[i-1].newspic)){
					arguments[2][0].msg[i-1].newspic = 'http://alumni.sut.edu.cn'+arguments[2][0].msg[i-1].newspic;
				}
			}

			data.msg.push(links);
			data.msg.push(arguments[1][0].msg.slice(0,10));
			data.msg.push(faces);
			data.msg.push(arguments[3][0].msg.slice(0,10));
			// console.log(data)

			makeCorps(data);
		})
	}

	function makePaper(data){
		$.ajax({
		url:TPL.paper,
		context:document.body,
		dataType:'html',
		success:function(str){
			var render = template.compile(str);
			var html = render(data);
			$('#paper').html(html);
		}
		});
	}
	function getPaper(makePaper){
		var years = $.ajax({url:APIS.years,dataType:'jsonp'});
		var rules = $.ajax({url:APIS.rules,dataType:'jsonp'});

		$.when(years,rules).done(function(){
			var data={msg:[]};
			data.msg.push(arguments[0][0].msg.slice(0,1));
			data.msg.push(arguments[1][0].msg.slice(0,1));

			makePaper(data);
		})
		
	}

	function makeFeedback(data){
		$.ajax({
		url:TPL.feedback,
		context:document.body,
		dataType:'html',
		success:function(str){
			var render = template.compile(str);
			var html = render(data);
			$('#feedback').html(html);
		}
		});
	}
	function getFeedback(makeFeedback){
		$.ajax({
			url:APIS.feedback,
			dataType:'jsonp',
			success:function(data){
				data.msg = data.msg.slice(0,10);
				makeFeedback(data);
			}
		});
	}

	function makeSNS(data){
		$.ajax({
		url:TPL.sns,
		context:$('#sns')[0],
		dataType:'html',
		success:function(str){
			var render = template.compile(str);
			var html = render(data);
			$('#sns').html(html);

			setInterval(function(){
				var group = $('#birth').find('.list-group');
				var first = $('#birth').find('.list-group-item').first();
				first.remove();

				first = $('#birth').find('.list-group-item').first();
				var clone = first.clone();
				clone.appendTo(group);
				first.slideUp('slow');
			},3000);
		}
		});
	}

	function getSNS(makeSNS){
		var birth = $.ajax({url:APIS.birthday,dataType:'jsonp'});
		var newMem = $.ajax({url:APIS.newMember,dataType:'jsonp'});
		var hotMem = $.ajax({url:APIS.hotMember,dataType:'jsonp'});

		$.when(birth,newMem,hotMem).done(function(){
			var data = {msg:[]};
			data.msg.push(arguments[0][0]);
			data.msg.push(arguments[1][0].slice(0,7));
			data.msg.push(arguments[2][0].slice(0,7));
			makeSNS(data);
		})
	}

}