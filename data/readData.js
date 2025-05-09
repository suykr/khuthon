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

function searchDatabyName(name) {
  try {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);

    // 해당 이름이 존재하면 데이터 배열 반환, 없으면 null 반환
    return data[name] || null;
  } catch (error) {
    console.error('Error reading data:', error);
    return null;
  }
}

function addData(name, h, t, s) {
  newData = { 
    height: h,
    temperature: t,
    soilMoisture: s
  };
  try {
    // JSON 파일 읽기
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);

    // 현재 날짜 (YYYYMMDD)
    const date = new Date();
    const formattedDate = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;

    // 추가할 데이터 형식
    const newRecord = {
      date: formattedDate,
      height: String(newData.height),
      temperature: String(newData.temperature),
      soilMoisture: String(newData.soilMoisture)
    };

    // 해당 이름이 존재하지 않으면 새로 생성
    if (!data[name]) {
      data[name] = [];
    }

    // 데이터 추가
    data[name].push(newRecord);

    // JSON 파일에 저장
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`데이터가 ${name}에 추가되었습니다.`);
  } catch (error) {
    console.error('데이터 추가 중 오류 발생:', error);
  }
}

module.exports = {readData, addPlant, searchDatabyName, addData};

//  테스트
// const cropData = readData();
// console.log(cropData);
// console.log(searchDatabyName('33'));