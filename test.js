const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(movements);
