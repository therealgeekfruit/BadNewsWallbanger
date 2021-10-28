var colors = ["Rock", "Scissor", "Paper"];

let randomPicker = () => colors[Math.floor(Math.random() * colors.length)];
let Computer = randomPicker();
let You = randomPicker();

console.log(`${Computer} (Computer) vs ${You} (You)`);
