const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let id;

function doSomething() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.fillStyle = "lightgreen";
	ctx.strokeStyle = "green";
	ctx.font = "18px monospace";
	const characterSet =
		"1 2 3 4 5 6 7 8 9 0  = ! @ # $ % & * q w e r t y u i o p l k j h g f d s a z x c v b n m M N B V C X Z A S F G H J K L P O I U Y T R E W Q ?";
	const l = characterSet.length;
	const randomChracter = () => {
		return characterSet[Math.floor(Math.random() * l)];
	};
	class Lines {
		constructor(x) {
			this.x = x;
			this.y = Math.random() * canvas.height;
		}
		drawCharacter() {
			ctx.clearRect(this.x, this.y, 20, 20);
			ctx.fillText(randomChracter(), this.x, this.y);

			if (this.y > canvas.height) {
				this.y = 0;
			} else {
				this.y += 20;
			}
		}
	}
	const lines = [];
	for (let i = 0; i < canvas.width / 20; i++) {
		lines.push(new Lines(20 * i));
	}
	const drawLine = () => {
		for (let line of lines) line.drawCharacter();
		id = requestAnimationFrame(drawLine);
	};
	drawLine();
}

window.addEventListener("load", () => {
	doSomething();
});
window.addEventListener("resize", () => {
	cancelAnimationFrame(id);
	doSomething();
});
