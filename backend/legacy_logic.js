const fs = require("fs").promises;

async function readData() {
  const rawData = await fs.readFile("legacyData.json", "utf8");
  return JSON.parse(rawData);
}

async function generateData(day) {
  let exactArr = [
    [9333, 10777],
    [8111, 9111],
    [6111, 7111],
    [6333, 6999],
    [7111, 7999],
    [5011, 6011],
    [5111, 6222],
  ];

  let dominance = "";

  if (day % 2 === 0) {
    dominance = "F";
  } else {
    dominance = "M";
  }

  let parentFactors = [];
  let randomNum = 0;
  let sum = 0;

  for (let i = 0; i < exactArr.length; i++) {
    randomNum = Math.floor(Math.random() * 7) + 1;
    let arr = [
      Math.round(exactArr[i][0] + randomNum),
      Math.round(exactArr[i][1] - randomNum),
    ];

    if (dominance === "M") {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }

    sum += arr[0] + arr[1];
    arr.push(arr[0] + arr[1]);
    arr.push(exactArr[i][0]);
    arr.push(exactArr[i][1]);

    parentFactors.push(arr);
  }

  let diff = 0;
  if (sum > 100000) {
    diff = sum - 100000;
    let div = Math.floor(diff / 7);
    let odd = false;
    let sum1 = 0;
    let sum2 = 0;
    if (div % 2 !== 0) {
      div -= 1;
      odd = true;
    }
    let mid = null;
    sum = 0;
    mid = Math.floor(div / 2);
    let k = 0;
    for (let n of parentFactors) {
      n[0] -= mid;
      if (n[0] < exactArr[k][0]) {
        n[0] += mid;
        n[1] -= mid;
      }

      if (odd) n[1] -= mid + 1;
      else n[1] -= mid;

      if (n[1] < exactArr[k][0]) {
        n[0] -= mid;
        n[1] += mid;
      }

      n[2] = n[0] + n[1];

      sum1 += n[0];
      sum2 += n[1];
      sum += n[0] + n[1];
      k++;
    }

    parentFactors.push([sum1, sum2, sum]);
  }

  let fileArr = await readData();
  fileArr[day - 1] = {
    GeneticInheritance: [
      (parentFactors[0][0] * 0.001).toFixed(3),
      (parentFactors[0][1] * 0.001).toFixed(3),
      (parentFactors[0][2] * 0.001).toFixed(3),
      (parentFactors[0][3] * 0.001).toFixed(3),
      (parentFactors[0][4] * 0.001).toFixed(3)
    ],
    ConstitutionalVitality: [
      (parentFactors[1][0] * 0.001).toFixed(3),
      (parentFactors[1][1] * 0.001).toFixed(3),
      (parentFactors[1][2] * 0.001).toFixed(3),
      (parentFactors[1][3] * 0.001).toFixed(3),
      (parentFactors[1][4] * 0.001).toFixed(3)
    ],
    MentalPatterns: [
      (parentFactors[2][0] * 0.001).toFixed(3),
      (parentFactors[2][1] * 0.001).toFixed(3),
      (parentFactors[2][2] * 0.001).toFixed(3),
      (parentFactors[2][3] * 0.001).toFixed(3),
      (parentFactors[2][4] * 0.001).toFixed(3)
    ],
    IntellectualCapacity: [
      (parentFactors[3][0] * 0.001).toFixed(3),
      (parentFactors[3][1] * 0.001).toFixed(3),
      (parentFactors[3][2] * 0.001).toFixed(3),
      (parentFactors[3][3] * 0.001).toFixed(3),
      (parentFactors[3][4] * 0.001).toFixed(3)
    ],
    EmotionalFoundation: [
      (parentFactors[4][0] * 0.001).toFixed(3),
      (parentFactors[4][1] * 0.001).toFixed(3),
      (parentFactors[4][2] * 0.001).toFixed(3),
      (parentFactors[4][3] * 0.001).toFixed(3),
      (parentFactors[4][4] * 0.001).toFixed(3)
    ],
    SpiritualLineage: [
      (parentFactors[5][0] * 0.001).toFixed(3),
      (parentFactors[5][1] * 0.001).toFixed(3),
      (parentFactors[5][2] * 0.001).toFixed(3),
      (parentFactors[5][3] * 0.001).toFixed(3),
      (parentFactors[5][4] * 0.001).toFixed(3)
    ],
    SoulConnections: [
      (parentFactors[6][0] * 0.001).toFixed(3),
      (parentFactors[6][1] * 0.001).toFixed(3),
      (parentFactors[6][2] * 0.001).toFixed(3),
      (parentFactors[6][3] * 0.001).toFixed(3),
      (parentFactors[6][4] * 0.001).toFixed(3)
    ],
    OverallTotal: [
      (parentFactors[7][0] * 0.001).toFixed(3),
      (parentFactors[7][1] * 0.001).toFixed(3),
      (parentFactors[7][2] * 0.001).toFixed(3)
    ],
  };

  const data = JSON.stringify(fileArr, null, 2);

  await fs.writeFile('legacyData.json', data);

  return fileArr[day - 1];
}

module.exports = {
  generateData,
};
