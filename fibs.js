#!/usr/bin/node

// Iteration version
function fibs(n) {
  const fibSequence = [0, 1];
  if (n <= 1) return fibSequence[0];

  while (n > 2) {
    const nextNumber =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextNumber);
    n--;
  }
  return fibSequence;
}

// Test Cases
console.log(fibs(8));
console.log(fibs(10));
