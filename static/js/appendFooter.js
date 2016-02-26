var appendFooter = function(text){
	var footer = document.createElement('p');
	footer.innerHtml = text;
	document.body.appendChild(footer);
};

appendFooter('The Pipefishbook');