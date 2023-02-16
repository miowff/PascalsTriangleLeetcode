const generate = function (numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    row.push(1);
    let j = 1;
    let resIndex = 0;
    while (j <= i) {
      if (j === i) {
        row.push(1);
        break;
      }
      row.push(result[i - 1][resIndex] + result[i - 1][resIndex + 1]);
      resIndex++;
      j++;
    }
    result.push(row);
  }
  return result;
};

const result = generate(5);
console.log(result);
