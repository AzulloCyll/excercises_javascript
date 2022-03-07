// Write a program that prints all prime numbers in given range. Take sub from 1-100.

let min = 1;
let max = 100;

isPrime = (num) => {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num >= 2;
};

checkForPrimes = (min, max) => {
  for (let i = min; i <= max; i++) if (isPrime(i)) console.log(i);
};

checkForPrimes(min, max);
