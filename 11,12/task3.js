function getTriangleSquare(a, b, c) {
    console.log(a, b, c)
    let p = (a + b + c) / 2;
    console.log('Half perimeter: ', p);
    let s = Math.sqrt(p*(p - a)*(p - b)*(p - c));
    if (s > 0){
        console.log('Square of triangle: ', s);
    }
    else {
        console.log('Square is = ', s ,'because a + b < c')//правило існування трикутника: сума будь яких двох сторін трикутника
    }                                                      //повинна бути більша його третьої сторони
}

let a = 6;
let b = 7;
let c = 4;

getTriangleSquare(a, b, c)

a = 12;
b = 10;
c = 16;

getTriangleSquare(a, b, c)

a = 3;
b = 9;
c = 4;

getTriangleSquare(a, b, c)//nan