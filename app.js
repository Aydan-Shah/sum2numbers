const isEqualT0100 = (a,b) => a === 100 || b === 100
|| (a+b) === 100;


// true
console.log(isEqualT0100(100,0));
console.log(isEqualT0100(0,100));

// false
console.log(isEqualT0100(10,0));
console.log(isEqualT0100(0,10));