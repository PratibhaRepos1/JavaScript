let x = [1,2,3,5];

x.forEach((e) => {
    if(e < 3 || e === 5) return;
    console.log(e);
});
