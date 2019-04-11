window.onload = function() {
	var task = document.getElementById('task');
	task.onkeydown = function(ev) {
		if(ev.keyCode === 13) {
			ev.preventDefault();
			var li = document.createElement('li');
			var tx = document.createElement('textarea');
			tx.value = task.value;
			var i = document.createElement('i');
			i.classList.add('fas');
			i.classList.add('fa-window-close');
			i.onclick = function() {
				document.getElementById('stack').removeChild(this.parentElement);
			}
			li.appendChild(tx);
			li.appendChild(i);
			document.getElementById('stack').appendChild(li);
		}
	}
}
