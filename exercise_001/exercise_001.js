let total_sum = 0

for (i = 0; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    total_sum += i
  }
}

console.log(total_sum)
