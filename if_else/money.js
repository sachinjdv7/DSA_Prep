function calculateMoney(money) {
    const result = [];

    if (money >= 500) {
        result.push(`500 note: ${Math.floor(money / 500)}`);
        money %= 500;
    }
    if (money >= 200) {
        result.push(`200 note: ${Math.floor(money / 200)}`);
        money %= 200;
    }
    if (money >= 100) {
        result.push(`100 note: ${Math.floor(money / 100)}`);
        money %= 100;
    }
    if (money >= 50) {
        result.push(`50 note: ${Math.floor(money / 50)}`);
        money %= 50;
    }
    if (money >= 20) {
        result.push(`20 note: ${Math.floor(money / 20)}`);
        money %= 20;
    }
    if (money >= 10) {
        result.push(`10 note: ${Math.floor(money / 10)}`);
        money %= 10;
    }
    if (money >= 5) {
        result.push(`5 note: ${Math.floor(money / 5)}`);
        money %= 5;
    }
    if (money >= 2) {
        result.push(`2 coin: ${Math.floor(money / 2)}`);
        money %= 2;
    }
    if (money === 1) {
        result.push(`1 coin: 1`);
    }

    return result.join('\n');
}

console.log(calculateMoney(1847));
