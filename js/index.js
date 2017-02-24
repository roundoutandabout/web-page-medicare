/* nav is element to which 'responsive' class will be added */

var nav = document.getElementById("myTopnav");

/* subMenuDesktop is element that will be visible by clicking on item #dropDownMenu in nav bar*/

var subMenuDesktop = document.querySelector('.submenu-desktop');
var subMenuMobile = document.querySelector('.submenu-mobile');
var selectionDiv = document.querySelector('.selection');

/*Makes visible element subMenuDesktop when clicking on #dropDownMenu*/

document.getElementById("dropDownMenu").onclick = function() {
	toggleClass(subMenuDesktop, 'container-visible');
	toggleClass(selectionDiv, 'container-visible');
}

/*closes desktop submenu when detecting clicks beyond #dropDownMenu item and beyond desktop submenu*/
	
document.onclick = function(e) {

	if ((e.target != document.getElementById('dropDownMenu'))&&(e.target.closest('.submenu-desktop') != subMenuDesktop)) {
		removeClass(subMenuDesktop, 'container-visible');
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