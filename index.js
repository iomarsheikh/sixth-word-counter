import inquirer from "inquirer";
async function wordCounter() {
    let result = await inquirer.prompt({
        name: "para",
        type: "input",
        message: "Write anything you want: "
    });
    console.log(`Total words are: ${counter(result.para)}`);
}
function counter(text) {
    if (text.length > 0) {
        const totalWords = text.split(" ");
        console.log(totalWords);
        return totalWords.length;
    }
    return 0;
}
async function Again() {
    do {
        await wordCounter();
        var re = await inquirer.prompt({
            name: "more",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want more?"
        });
    } while (re.more === "Yes");
    console.clear();
}
await Again();
