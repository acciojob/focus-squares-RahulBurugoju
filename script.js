//your JS code here. If required.
let sq1 = document.querySelector('#square1');
let sq2 = document.querySelector('#square2');
let sq3 = document.querySelector('#square3');
const originalColor = '#E6E6FA';
const hoverColor = '#6F4E37';

let squares = document.querySelectorAll('.square');

squares.forEach((square)=>{
	square.addEventListener('mouseenter',()=>{
		squares.forEach((sq)=>{
			if(sq!==square){
				sq.style.backgroundColor = '#6F4E37';
			}
		})
	
	});

	square.addEventListener('mouseleave',()=>{
		squares.forEach((sq)=>{
				sq.style.backgroundColor = '';
		})
	
	});
});


