

let colorDrawPicker = document.getElementById('draw')
let colorBackPicker = document.getElementById('back')
let aplicarButton = document.getElementById('aplicar')
let tileDisplay = document.getElementById('tiledisplay')
let layouts = document.getElementById('layouts')
let svgTiles = document.getElementsByName('svg')
let root = document.documentElement;
let T01 = document.getElementById('T01')
let T02 = document.getElementById('T02')
let T03 = document.getElementById('T03')
let T04 = document.getElementById('T04')
let T05 = document.getElementById('T05')
let T06 = document.getElementById('T06')
let T07 = document.getElementById('T07')
let T08 = document.getElementById('T08')
let T09 = document.getElementById('T09')
let T10 = document.getElementById('T10')
let T11 = document.getElementById('T11')
let T12 = document.getElementById('T12')
let T13 = document.getElementById('T13')
let T14 = document.getElementById('T14')
let T15 = document.getElementById('T15')
let T16 = document.getElementById('T16')
let TT = window.getComputedStyle(T01)
let TTT = TT.getPropertyValue('width')

aplicarButton.onclick = function(){
	tileDisplay.style.background = colorBackPicker.value
	root.style.setProperty('--tileColor', colorDrawPicker.value)
}

layouts.onclick = function(){
	switch(layouts.value){
		case 'aleatorio':
		T01.style.transform = "rotate(270deg)";
		T02.style.transform = "rotate(90deg)";
		T03.style.transform = "rotate(180deg)";
		T04.style.transform = "rotate(0deg)";
		T05.style.transform = "rotate(0deg)";
		T06.style.transform = "rotate(180deg)";
		T07.style.transform = "rotate(270deg)";
		T08.style.transform = "rotate(0deg)";
		T09.style.transform = "rotate(90deg)";
		T10.style.transform = "rotate(180deg)";
		T11.style.transform = "rotate(270deg)";
		T12.style.transform = "rotate(0deg)";
		T13.style.transform = "rotate(270deg)";
		T14.style.transform = "rotate(90deg)";
		T15.style.transform = "rotate(180deg)";
		T16.style.transform = "rotate(90deg)";
		break;

		case 'repetidos':
		T01.style.transform = "rotate(0deg)";
		T02.style.transform = "rotate(0deg)";
		T03.style.transform = "rotate(0deg)";
		T04.style.transform = "rotate(0deg)";
		T05.style.transform = "rotate(0deg)";
		T06.style.transform = "rotate(0deg)";
		T07.style.transform = "rotate(0deg)";
		T08.style.transform = "rotate(0deg)";
		T09.style.transform = "rotate(0deg)";
		T10.style.transform = "rotate(0deg)";
		T11.style.transform = "rotate(0deg)";
		T12.style.transform = "rotate(0deg)";
		T13.style.transform = "rotate(0deg)";
		T14.style.transform = "rotate(0deg)";
		T15.style.transform = "rotate(0deg)";
		T16.style.transform = "rotate(0deg)";
		break;

		case 'circular01':
		T01.style.transform = "rotate(0deg)";
		T02.style.transform = "rotate(90deg)";
		T03.style.transform = "rotate(0deg)";
		T04.style.transform = "rotate(90deg)";
		T05.style.transform = "rotate(270deg)";
		T06.style.transform = "rotate(180deg)";
		T07.style.transform = "rotate(270deg)";
		T08.style.transform = "rotate(180deg)";
		T09.style.transform = "rotate(0deg)";
		T10.style.transform = "rotate(90deg)";
		T11.style.transform = "rotate(0deg)";
		T12.style.transform = "rotate(90deg)";
		T13.style.transform = "rotate(270deg)";
		T14.style.transform = "rotate(180deg)";
		T15.style.transform = "rotate(270deg)";
		T16.style.transform = "rotate(180deg)";
		break;

		case 'circular02':
		T01.style.transform = "rotate(90deg)";
		T02.style.transform = "rotate(180deg)";
		T03.style.transform = "rotate(90deg)";
		T04.style.transform = "rotate(180deg)";
		T05.style.transform = "rotate(0deg)";
		T06.style.transform = "rotate(270deg)";
		T07.style.transform = "rotate(0deg)";
		T08.style.transform = "rotate(270deg)";
		T09.style.transform = "rotate(90deg)";
		T10.style.transform = "rotate(180deg)";
		T11.style.transform = "rotate(90deg)";
		T12.style.transform = "rotate(180deg)";
		T13.style.transform = "rotate(0deg)";
		T14.style.transform = "rotate(270deg)";
		T15.style.transform = "rotate(0deg)";
		T16.style.transform = "rotate(270deg)";
		break;

	}
}