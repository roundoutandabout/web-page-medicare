/* nav is element to which 'responsive' class will be added */

var nav = document.getElementById("myTopnav");

/* subMenuMobile is element that will be visible by clicking on item #dropDownMenu in nav bar*/

var subMenuMobile = document.querySelector('.submenu-desktop');

/*Makes visible element subMenuMobile when clicking on #dropDownMenu*/

document.getElementById("dropDownMenu").onclick = function() {
	toggleClass(subMenuMobile, 'container-visible');
}

/*closes desktop submenu when detecting clicks beyond #dropDownMenu item and beyond desktop submenu*/
	
document.onclick = function(e) {

	if ((e.target != document.getElementById('dropDownMenu'))&&(e.target.closest('.submenu-desktop') != subMenuMobile)) {
		removeClass(subMenuMobile, 'container-visible');
	}
}

/* toggleClass() adds class (classToToggle) when it is abscent, and removes class when it is present in element x*/

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
		
/* removeClass() removes class (classToRemove) when it is present in element x*/
		
function removeClass(x, classToRemove) {
	var classes = x.className.split(' ');
	//console.log(classes);
	//console.log(classes.indexOf(classToRemove));
	if (classes.indexOf(classToRemove) !== -1)
		classes.splice(classes.indexOf(classToRemove), 1);
	x.className = classes.join(' ');
	//console.log(x.className);
}