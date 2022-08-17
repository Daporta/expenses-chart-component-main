fetch("./data.json")
.then(response => {
   return response.json();
})
.then(function draw(data) {
  let canvas = document.getElementById("graphBar");

	for (let i = 0; i < data.length; i++) {
		let newDiv = document.createElement('div');
		newDiv.classList.add('divBar');
		let newSpan = document.createElement('span');
		newSpan.classList.add('divSpan');
		newSpan.textContent = '$' + data[i].amount;
		let newBar = document.createElement("div");
		newBar.classList.add('bar');
		newBar.setAttribute('tabindex', '0');
		newBar.addEventListener("mouseover", tagVisible);
		newBar.addEventListener("mouseout", tagCollapse);
		newBar.addEventListener("focus", tagVisibleFocus);
		newBar.addEventListener("focusout", tagCollapseFocus);
		newBar.style.height = data[i].amount + 'px';
		newDiv.append(newSpan, newBar)
		canvas.appendChild(newDiv);
	}
});

function tagVisible() {
	this.parentNode.firstChild.style.display = "inline";
};

function tagVisibleFocus() {
	this.parentNode.firstChild.style.display = "inline";
	this.removeEventListener('mouseout', tagCollapse)
};

function tagCollapse() {
	this.parentNode.firstChild.style.display = "none";
};

function tagCollapseFocus() {
	this.parentNode.firstChild.style.display = "none";
	this.addEventListener("mouseout", tagCollapse);
};
