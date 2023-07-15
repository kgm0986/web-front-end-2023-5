// 조건문
// 코드 실행 흐름을 제어, 사용자 입력을 검증, 접근 권한을 제어 등의 로직에 사용

//? if문

//! 입력 값 검증

// age 변수에 사용자로 부터 입력 받은 나이를 할당
// 조건문을 사용해서 0 미만, 200 초과일 경우 알림 창 "Invalid age."

let age = prompt("Please enter your age.");

if (age < 0 || age > 200) {
  alert("Invalid age.");
}

//! 특정 조건에 따른 경고 메시지 출력

// 특정 조건이 충족되면 경고 메시지를 출력하는 등의 동작을 하도록 만들기

let temperature = prompt("Please enter your temperature.");

if (temperature > 37.2) {
  console.log("You may have a fever.");
}

//? else문

//! 사용자의 입력 값 검증

// 사용자의 나이 입력받아 age2 변수에 할당
// 나이가 18세 이상일 경우 알림창에 "You are an adult."
// 아닐 경우 "You are a minor"

let age2 = prompt("Please enter your age.");

if (age2 >= 18) {
  alert("You are an adult.");
} else {
  alert("You are a minor");
}

//! 조건에 따른 다른 동작 수행

// 특정 조건에 따라 서로 다른 동작을 수행하게 만들기

let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("You don't need an umbrella.");
}

//! 로그인 상태에 따른 메시지 출력

// 사용자의 로그인 상태에 따라 다른 메시지를 출력하는 기능

let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Please log in.");
} else {
  console.log("Welcome back!");
}

// if문만을 사용할 때 보다 훨씬 더 많은 로직 구현 가능
// 코드의 유연성과 가독성을 높이는 것이 가능

//? else-if문

//! 사용자 입력 값에 따른 다양한 반응

// 사용자로부터 받은 입력 값에 따라 다양한 메시지를 출력

let ageElseIf = prompt("Please enter your age.");

if (ageElseIf < 13) {
  alert("You are a child.");
} else if (ageElseIf < 18) {
  alert("You are a teenager.");
} else {
  alert("You are an adult.");
}

//! 조건에 따른 다양한 동작 수행

// else if문을 사용하여 여러 조건에 따라 다양한 동작을 수행

let weather = "snowing";

if (weather === "raining") {
  console.log("Take an umbrella.");
} else if (weather === "sunny") {
  console.log("Wear sunglasses.");
} else if (weather === "snowing") {
  console.log("Wear a coat.");
} else {
  console.log("Check the weather forecast.");
}

//! 점수에 따른 등급 부여

// 학생의 점수에 따라 등급 부여하는 예제

// 학생의 점수를 입력받아 score 변수에 할당.
// 100점 초과 0점 미만일 경우 "Invalid Score" 출력
// 90점 이상 "Grade A" 출력
// 80점 이상 "Grade B" 출력
// 70점 이상 "Grade C" 출력
// 60점 이상 "Grade D" 출력
// 그 외에는 "Grade F" 출력

let score = prompt("Please enter your score.");

if (score > 100 || score < 0) {
  console.log("Invalid Score");
} else if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// else if문을 사용하면 여러 개의 조건을 순차적으로 확인하고, 각 조건에 따라 다른 코드 실행 가능

//? switch문

//! 사용자의 직업을 입력받아 job 변수에 할당

// job(doctor, teacher, engineer) 각 case와 동일 할 경우

// doctor 입력 시 alert("You heal people.");
// teacher 입력 시 alert("You teach students.");
// engineer 입력 시 alert("You design and build things.");

// alert("I don't know about that job");

let job = prompt("What is your job?");

switch (job) {
  case "doctor":
    alert("You heal people.");
    break;
  case "teacher":
    alert("You teach students.");
    break;
  case "engineer":
    alert("You design and build things.");
    break;
  default:
    alert("I don't know about that job");
}

//! 요일에 따른 활동 추천

// 현재 요일에 따라 다른 활동을 추천하는 예제

let day = new Date().getDay();
// 주어진 날짜의 요일을 반환합니다. 
// 0은 일요일 1~5는 월~금, 6은 토요일

switch (day) {
  case 0:
    console.log("It's Sunday. Take a rest.");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("It's a weekday. Let's work hard!");
    break;
  case 6:
    console.log("It's Saturday. Enjoy your weekend!");
    break;
  default:
    console.log("Invalid day.");
}

// switch문을 사용하면, 여러 가지 가능한 케이스 중 하나를 선택하여 해당하는 코드 블록을 실행
// 복잡한 else문이나 else-if문을 간결하게 바꾸는 것이 가능

//? 조건 연산자(삼항 연산자)

//! 사용자 입력 값에 따른 메시지 출력

// 사용자로부터 받은 입력 값에 따라 다른 메시지를 출력
// else문 예제와 비교 확인

let ageCondition = prompt("Please enter your age.");
let message = ageCondition >= 18 ? "You are an adult." : "You are a minor.";

alert(message);

//! 조건에 따른 변수 값 할당

// 변수 isRainingCondition에 true값을 할당.
// 해당 값이 참일 경우 "Stay home and read a book" 문자열 값을 activity 변수에 할당
// 해당 값이 거짓일 경우 "Go for a walk" 문자열 값을 activity 변수에 할당

// activity 변수를 console 창에 출력

let isRainingCondition = true;
let activity = isRainingCondition ? "Stay home and read a book." : "Go for a walk.";

console.log(activity);

//! 로그인 상태에 따른 메시지 출력

// 사용자의 로그인 상태에 따라 다른 메시지를 출력하는 것도 가능

let isLoggedInCondition = false;
let messageCondition = isLoggedInCondition ? "Welcome back!" : "Please log in.";

console.log(messageCondition);  // "Please log in."

// 조건 연산자를 사용하면, if-else문을 더 간결하고 가독성 좋게 표현