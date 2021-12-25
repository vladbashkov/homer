let homer = document.querySelector('div.homer');
const STEP = 20;

const JUMP = e => {
	e.classList.add('jump')
	setTimeout(() => e.classList.remove('jump'), 250);
}

const keyboardEvents = {
	17: element => element.classList.toggle('sit'),
	32: element => JUMP(element),
	37: element => {
		let next = !element.style.left ? `-${STEP}px` : `${parseInt(element.style.left)-STEP}px`;
		if(element.offsetLeft-STEP<0){
			element.style.left = `${parseInt(element.style.left)+STEP*4}px`;
			element.classList.add('doh');
			setTimeout(()=>element.classList.remove('doh'), 500);
		} else{
			element.style.left = next;
		}
	},
	38: element => {
		let next = !element.style.top ? `-${STEP}px` : `${parseInt(element.style.top)-STEP}px`;
		if(element.offsetTop-STEP<0){
			element.style.top = `${parseInt(element.style.top)+STEP*4}px`;
			element.classList.add('doh');
			setTimeout(()=>element.classList.remove('doh'), 500);
		} else{
			element.style.top = next;
		}
	},
	39: element => {
		let next = !element.style.left ? `${STEP}px` : `${parseInt(element.style.left)+STEP}px`;
		if(element.offsetLeft+element.offsetWidth+STEP>window.innerWidth){
			element.style.left = `${parseInt(element.style.left)-STEP*4}px`;
			element.classList.add('doh');
			setTimeout(()=>element.classList.remove('doh'), 500);
		} else{
			element.style.left = next;
		}
	},
	40: element => {
		let next = !element.style.top ? `${STEP}px` : `${parseInt(element.style.top)+STEP}px`;
		if(element.offsetTop+element.offsetHeight+STEP>window.innerHeight){
			element.style.top = `${parseInt(element.style.top)-STEP*4}px`;
			element.classList.add('doh');
			setTimeout(()=>element.classList.remove('doh'), 500);
		} else{
			element.style.top = next;
		}
	},
}

document.onkeydown = e => keyboardEvents[e.keyCode] && keyboardEvents[e.keyCode](homer);

console.log(homer)
console.log(`Left: ${homer.offsetLeft} 111`)
console.log(`Top: ${homer.offsetTop}`)
console.log(`Width: ${window.innerWidth}`)
console.log(`Height: ${window.innerHeight}`)
