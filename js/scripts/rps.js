const score = JSON.parse(localStorage.getItem('rpsScore')) || { player: 0, computer: 0, ties: 0 };
let autoPlayInterval;

function play(playerChoice) {
	const choices = ['rock', 'paper', 'scissors'];
	const computerChoice = choices[Math.floor(Math.random() * choices.length)];
	let result;

	if (playerChoice === computerChoice) {
		result = 'It is a tie!';
		score.ties++;
	} else if (
		(playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'paper' && computerChoice === 'rock') ||
		(playerChoice === 'scissors' && computerChoice === 'paper')
	) {
		score.player++;
		result = 'You win!';

	} else {
		score.computer++;
		result = 'Computer wins!';
	}
	document.getElementById('result').innerHTML =
		`You <img src="Images/${playerChoice}-emoji.png" alt="${playerChoice}" class="move-icon">` +
		`<img src="Images/${computerChoice}-emoji.png" alt="${computerChoice}" class="move-icon"> Computer! \n ${result}`;
	document.getElementById('score').textContent =
		`Player: ${score.player} | Computer: ${score.computer} | Ties: ${score.ties}`;
	
	localStorage.setItem('rpsScore', JSON.stringify(score));
}
        
function resetGame() {
	alert(`Resetting the game. Scores are Player: ${score.player}, Computer: ${score.computer}, and Ties: ${score.ties}.`);
	score.player = 0;
	score.computer = 0;
	score.ties = 0;
	document.getElementById('result').textContent = 'Game reset.';
	document.getElementById('score').textContent = `Player: ${score.player} | Computer: ${score.computer} | Ties: ${score.ties}`;
}

function autoPlay() {
	if (autoPlayInterval) {
		clearInterval(autoPlayInterval);
		autoPlayInterval = null;
		document.querySelector('button[onclick="autoPlay()"]').textContent = 'Auto Play';
	} else {
		autoPlayInterval = setInterval(() => {
			const choices = ['rock', 'paper', 'scissors'];
			const randomChoice = choices[Math.floor(Math.random() * choices.length)];
			play(randomChoice);
		}, 1000);
		document.querySelector('button[onclick="autoPlay()"]').textContent = 'Stop Auto Play';
	}
}