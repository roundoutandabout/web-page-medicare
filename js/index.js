var nav = document.getElementById("myTopnav");
				
var lists = document.querySelector('.menu-desktop');
	
document.getElementById("dropDownMenu").onclick = function() {
	toggleClass(lists, 'container-visible');
}
		
document.onclick = function(e) {

	if ((e.target != document.getElementById('dropDownMenu'))&&(e.target.closest('.menu-desktop') != lists)) {
		removeClass(lists, 'container-visible');
	}
}

function toggleClass(x, classToToggle) {
			//console.log(x.className.split(' '));
			var elemClasses = x.className.split(' ');
			//console.log(elemClasses);
			var сlassToToggleIndex = elemClasses.indexOf(classToToggle);
			//console.log(сlassToToggleIndex);
			
			if (сlassToToggleIndex === -1) {
				elemClasses.push(classToToggle);
				x.className = elemClasses.join(' ');;
			} else {
				elemClasses.splice(сlassToToggleIndex, 1);
				//console.log(elemClasses);
				x.className = elemClasses.join(' ');
			}
			//console.log(x);
		}
		
function removeClass(x, classToRemove) {
	var classes = x.className.split(' ');
	//console.log(classes);
	//console.log(classes.indexOf(classToRemove));
	if (classes.indexOf(classToRemove) !== -1)
		classes.splice(classes.indexOf(classToRemove), 1);
	x.className = classes.join(' ');
	//console.log(x.className);
}