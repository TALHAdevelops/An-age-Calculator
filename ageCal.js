import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright(chalk.bold('Hello!, Welcome to Our Age Calculator')));
let Questions = await inquirer.prompt([
    {
        name: "YearofBirth",
        type: "number",
        message: chalk.red(" Enter Your Year of Birth(IN NUM): ")
    },
    {
        name: "MonthofBirth",
        type: "number",
        message: chalk.red(" Enter Your Month of Birth(IN NUM):")
    },
    {
        name: "DayofBirth",
        type: "number",
        message: chalk.red(" Enter Your Day of Birth(IN NUM): ")
    }
]);
let userAge = `${Questions.YearofBirth}-${Questions.MonthofBirth}-${Questions.DayofBirth}`;
let year = new Date().getFullYear() - Questions.YearofBirth;
let month = new Date().getMonth() - Questions.MonthofBirth;
let day = new Date().getDate() - Questions.DayofBirth;
function ageCalulator(DOB) {
    if (month < 0 || (month === 0 && day < 0)) {
        return --year;
    }
    else {
        return year;
    }
}
;
console.log(chalk.blue(chalk.italic(`Your Age is: ${ageCalulator(userAge)}`)));
