let user = prompt("Введіть ціле число:");

if (user === null || user.trim() === '' || isNaN(user.trim()) || !Number.isInteger(Number(user.trim()))) {
    console.log("Помилка");
} else {
    let N = Number(user.trim());

    if (N <= 1) {
        console.log("Число не являєтся простим")
    } else {
        let tRue = true;
        for (let i = 2; i <=Math.sqrt(N); i++) {
            if (N % i === 0) {
                tRue = false;
                break;
            }
        }
        if (tRue) {
            console.log("Число просте");
        } else {
            console.log("Число не являєтся простим");
        }
    }
}