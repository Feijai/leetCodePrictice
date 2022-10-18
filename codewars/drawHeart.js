let heart = ('◢' + '■'.repeat(n / 2 - 2) + '◣').repeat(2);

for (let i = Math.floor(n / 6); i > 0; i--)
  heart += "\n" + '■'.repeat(n);

for (let i = 0, m = n / 2; i < m; i++)
  heart += "\n" + ' '.repeat(i) + '◥' + '■'.repeat(n - 2 * i - 2) + '◤' + ' '.repeat(i);

return heart;