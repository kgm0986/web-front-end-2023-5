//! Async & Await
// : ES2017에 도입
// async를 함수에 붙여, 이 키워드가 붙은 함수는 항상 Promise를 반환
// await는 Promise가 resolve될 때까지 기다리는 역할, async 함수 내부에서만 사용 가능

//! async/await 구문 사용법

// async 함수 선언
// async function functionName() {
//   await 키워드 사용(해당 Promsie가 resolve될 때까지 기다림)
//   let value = await promise;
// }

function downloadFile2(filename: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Downloaded file: ${filename}`);
    }, 2000);
  });
}

async function downloadAllFiles() {
  const file1 = await downloadFile2('file1.txt');
  console.log(file1);

  const file2 = await downloadFile2('file2.txt');
  console.log(file2);

  const file3 = await downloadFile2('file3.txt');
  console.log(file3);
}

downloadAllFiles();

//! async 함수
async function hello() {
  return 'Hello';
}

console.log(hello()); // Promise { 'Hello' }

//! await 연산자
// : Promise가 resolve 또는 reject될 때까지 함수의 실행을 중단
async function hello2() {
  const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const result = await promise; // 프로미스가 resolve될 때까지 기다림.
  console.log(result);
}

hello2();

//! async/await로 Promise 체이닝 다루기

// Promise를 사용하는 경우
function getJSON(url: string): Promise<any> {
  return fetch(url).then(response => response.json());
}

getJSON('https://api.github.com/users/github')
  .then(user => 
    getJSON(user.repos_url).then(repos => {
      console.log('First repo : ', repos[0]);
    }
  )
);

// async/await
async function logFirstRepo(url: string) {
  // 에러 처리
  // await 연산자는 Promise가 reject되면 에러를 throw
  // try/catch문을 사용하여 처리
  try {
    const user = await getJSON(url);
    const repos = await getJSON(user.repos_url);

    console.log('Second repo : ', repos[1]);
  } catch(error) {
    console.log('An error occurred: ', error);
  }
}

logFirstRepo('https://api.github.com/users/github');
