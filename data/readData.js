const fs = require("fs");
const path = require("path");

// JSON 파일 경로
const filePath = path.join(__dirname, "db.json");

function readData() {
  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(rawData);

    const result = Object.entries(jsonData).map(([name, data]) => {
      return {
        name,
        data: [data.height, data.temperature, data.soilMoisture]
      };
    });

    return result;

  } catch (err) {
    console.error("Error reading JSON file:", err);
    return [];
  }
}

module.exports = readData;

// 테스트
// const cropData = readData();
// console.log(cropData);