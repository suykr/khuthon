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

function addPlant(name, height, temperature, soilMoisture) {
  try {
    // 기존 데이터 읽기
    const rawData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(rawData);

    // 식물 이름이 이미 존재할 경우 업데이트, 아니면 새로 추가
    data[name] = {
      height: height,
      temperature: temperature,
      soilMoisture: soilMoisture
    };

    // 업데이트된 데이터를 JSON 파일에 저장
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`${name} 정보가 성공적으로 추가되었습니다.`);
  } catch (err) {
    console.error("파일 업데이트 중 오류 발생:", err);
  }
}

module.exports = {readData, addPlant};

// 테스트
// const cropData = readData();
// console.log(cropData);