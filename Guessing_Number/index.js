import inquirer from 'inquirer';
async function guessNumber() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: 'Enter the minimum number:',
        },
        {
            type: 'number',
            name: 'max',
            message: 'Enter the maximum number:',
        },
        {
            type: 'number',
            name: 'guess',
            message: 'Enter your guess number:',
        },
        {
            type: "input",
            name: "chances",
            message: "Enter the chances"
        }
    ]);
    let { min, max, guess, chances } = answers;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let counter = 1;
    if (guess === randomNumber) {
        console.log(`You guessed right in ${counter} attempt(s)`);
    }
    else {
        while (guess !== randomNumber) {
            counter++;
            chances--;
            const guessAgain = await inquirer.prompt({
                type: 'number',
                name: 'guess',
                message: 'Wrong guess! Try again:',
            });
            if (chances > 0) {
                console.log("your remaning chances are " + chances);
            }
            else {
                console.log("you Lost all Chances! ");
                break;
            }
            if (guessAgain.guess === randomNumber) {
                console.log(`You guessed right in ${counter} attempt(s)`);
                return;
            }
        }
    }
}
guessNumber();
