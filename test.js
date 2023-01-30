function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    }
    else if (n > 1) {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
    else {
        return "number has to be positive."
    }
}
let n = 4;
answer = factorial(n)
console.log("Factorial of " + n + " : " + answer);
console.log("Adding some B1 stuff");
console.log("Adding Some A1 stuff")
console.log("Adding BBB")
console.log("Adding AAA")
