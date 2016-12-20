myBottomShow = () ->
	data = 
		name: 'Li'
		author: 'Jack'
		time: '2016-12'
		desc: 'MIT All Rights Reserved'
	show = () ->
		domBottom = 
		"<div class='bottom'>
			<p>" + data.author + " " + data.name + "</p><p>" + data.desc + " " + data.time + "</p>
		</div>"
		$('body').append(domBottom)
	return {
		show: show
	}
myBottomShow().show()
