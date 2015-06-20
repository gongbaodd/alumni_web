
$(document).on('click',function(e){
		// console.log(e)
		e.target = e.target || e.srcElement;
		var target = $(e.target);
		if(e.target.className === 'more'){
			e.preventDefault();
			var parent = target.closest('.add-more');

			// console.log(parent)

			if(parent[0].className.indexOf('list-group')!==-1){
				window.open(URLs.ann);
			}else if(parent[0].className.indexOf('video')!==-1){
				window.open(URLs.video);
			}else if(parent[0].id){
				window.open(URLs[parent.id]);
			}else{
				var active = parent.find('.active')[0];
				if(active.id){
					window.open(URLs[active.id]);
				}
			}
		}
});