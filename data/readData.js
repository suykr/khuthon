const fs = require("fs");
const path = require("path");

// JSON 파일 경로
const filePath = path.join(__dirname, "db.json");

function readData() {
  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(rawData);

    const result = Object.entries(jsonData).map(([name, dataArray]) => {
      return {
        name,
        data: dataArray
      };
    });

    return result;

  } catch (err) {
    console.error("Error reading JSON file:", err);
    return [];
  }
}

function addPlant(name, date, height, temperature, soilMoisture) {
  try {
    // 기존 데이터 읽기
    const rawData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(rawData);

    const newEntry = {
      date,
      height,
      temperature,
      soilMoisture
    };

    // 기존 식물이 있는 경우 업데이트, 없는 경우 새로 생성
    if (data[name]) {
      data[name].push(newEntry);
    } else {
      data[name] = [newEntry];
    }

    // 업데이트된 데이터를 JSON 파일에 저장
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`${name}에 새로운 기록이 추가되었습니다.`);
  } catch (err) {
    console.error("파일 업데이트 중 오류 발생:", err);
  }
}

function getDataByName(dataArray, name) {
  const target = dataArray.find(item => item.name === name);
  return target ? target.data : null;
}

module.exports = {readData, addPlant, getDataByName};

//  테스트
// const cropData = readData();
// console.log(cropData);