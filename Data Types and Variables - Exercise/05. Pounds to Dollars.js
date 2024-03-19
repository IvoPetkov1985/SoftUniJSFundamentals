function poundsToDollars(pounds) {
    const dollarRate = 1.31;
    const sumInDollars = pounds * dollarRate;
    let result = sumInDollars.toFixed(3);
    console.log(result);
}

poundsToDollars(80);
poundsToDollars(39);