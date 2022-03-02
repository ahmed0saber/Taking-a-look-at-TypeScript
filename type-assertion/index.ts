let x:any = "5"
let y = <number>x // both lines do the same
y = x as number // both lines do the same
console.log("x: ", x,"\ny:", y)