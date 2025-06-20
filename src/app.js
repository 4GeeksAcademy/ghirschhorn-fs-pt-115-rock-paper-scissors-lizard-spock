//write your code here
console.log("Hello Rigo from the console!");

const weapon = ["rock", "paper", "scissors", "lizard", "spock"]

const getRandomWeapon = () => {
const index = Math.floor(Math.random() * weapon.length)
return weapon[index]
}

const checkWeaponGuess = (userGuest) => {
    const computerWeapon = getRandomWeapon()

    console.log(`You chose: ${userGuest}`);
	console.log(`Computer weapon: ${computerWeapon}`);

    if (userGuest === computerWeapon) {
        console.log("Take it serius! It`s a draw...");
    } else if (
        (userGuest === "rock" && (computerWeapon === "scissors" || "lizard")) ||
        (userGuest === "paper" && (computerWeapon === "rock" || "spock")) ||
        (userGuest === "scissors" && (computerWeapon === "paper" || "lizard")) ||
        (userGuest === "lizard" && (computerWeapon === "paper" || "spock")) ||
        (userGuest === "spock" && (computerWeapon === "scissors" || "rock"))
    ) {
        console.log("Hmm... you win. Again!");
    } else {
        console.log("Bazinga! You loose!");
    }
}

const guess = prompt("Choose your weapon: rock, paper, scissors, lizard, spock").toLowerCase();

checkWeaponGuess(guess)