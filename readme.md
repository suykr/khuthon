
# 🌱 Khu**thon 2025** - 농업의 기술화

> **팀원:**  
> - 🏊 **수영** ([GitHub: suykr](https://github.com/suykr)) - 경희대 인지과 25학번  
> - 🎯 **인선** ([GitHub: seoninj](https://github.com/seoninj)) - 경희대 인지과 25학번  
> - 🚀 **영균** - 경희대 인지과 25학번  

---

## 📍 **프로젝트 개요**

Khuthon 2025의 주제는 **농업의 기술화**입니다.  
우리는 농업의 효율성과 생산성을 극대화할 수 있는 **데이터 기반 농업 관리 솔루션**을 개발합니다.  
농작물의 성장 데이터를 기록하고 시각화하여 농업 환경을 모니터링합니다.

---

## 🌐 **프로젝트 목표**

- **데이터 입력:** 각 작물의 높이, 기온, 토양 수분 데이터를 저장하고 관리  
- **데이터 시각화:** 기록된 데이터를 시각화하여 성장 추이 및 환경 변화를 한눈에 파악  
- **데이터 관리:** 데이터베이스에 저장된 정보를 사용하여 데이터 저장 환경 최적화  

---

## ✅ **주요 기능**

1. **데이터 입력:**  
   - 각 작물의 **높이, 기온, 토양 수분**을 입력받아 저장  

2. **데이터 시각화:**  
   - 그래프를 이용하여 **데이터 변화를 시각화**하여 한눈에 파악  

3. **데이터 관리:**  
   - JSON 파일 기반의 **데이터베이스 구축** 및 관리  

---

## 🛠️ **기술 스택**

- **Backend:**  
  - Node.js - 서버 환경 구축 및 데이터 처리  
  - Express.js - RESTful API 구현 및 라우팅 관리  
  - File System (fs) - JSON 파일 기반 데이터베이스 관리  

- **Frontend:**  
  - HTML5 - 구조 및 콘텐츠 작성  
  - CSS3 - 사용자 인터페이스 디자인  
  - EJS - 동적 페이지 렌더링 및 데이터 바인딩  
  - Chart.js - 데이터 시각화  

---

## 🚀 **프로젝트 구조**

```
/khuthon
├── /bin
│ └── www.js # Express 애플리케이션에서 서버를 시작하는 엔트리 포인트 파일
├── /data
│ ├── db.json # 데이터베이스 파일 (JSON 형식으로 저장)
│ └── readData.js
├── /public # 정적 파일 저장 폴더 (이미지, CSS, JS 등)
│ ├── /images
│ │ └── logo.png
│ ├── /javascripts
│ │ ├── main.js
│ │ └── record.js
│ └── /stylesheets
│ ├── add.css
│ ├── crops.css
│ ├── login.css
│ ├── main.css
│ ├── record.css
│ └── style.css
├── /routes # 라우트 정의 폴더
│ ├── crops.js
│ ├── index.js
│ ├── login.js
│ ├── main.js
│ └── record.js
├── /views # EJS 템플릿 폴더
│ ├── index.ejs
│ ├── login.ejs
│ ├── record.ejs
│ └── crops.ejs
├── .gitignore # Git에서 제외할 파일 목록
├── app.js # 서버의 메인 엔트리 포인트 파일
├── package-lock.json # 종속성 관리 파일
├── package.json # 프로젝트 설정 및 종속성 관리 파일
└── README.md # 프로젝트 설명서
```

---

## ⚡️ **실행 방법**

1. **Dependencies 설치:**

```bash
npm install
```

2. **서버 실행:**

```bash
node ./bin/www
```

3. **브라우저에서 확인:**  
[http://localhost:3000](http://localhost:3000)

---

## 📦 **데이터 형식 (`db.json` 예시)**

```json
{
  "당근": [
    { "date": "20250501", "height": "10", "temperature": "21", "soilMoisture": "35" },
    { "date": "20250505", "height": "12", "temperature": "23", "soilMoisture": "40" },
    { "date": "20250510", "height": "15", "temperature": "25", "soilMoisture": "38" },
    { "date": "20250515", "height": "18", "temperature": "26", "soilMoisture": "42" }
  ]
}
```

---

## 📬 **문의 및 연락처**

- 🏊 **수영:** [GitHub: suykr](https://github.com/suykr)  
- 🎯 **인선:** [GitHub: seoninj](https://github.com/seoninj)  
- 🚀 **영균:** 

---

**© 2025 Khuthon - 근면성실**
