//! 타입스크립트의 동기 & 비동기 처리

//! 동기(Synchronous) 처리
//? 1. 동기 처리의 개념
// : 코드가 순차적으로 실행되는 것
// : 한 작업이 완료될 때까지 다음 작업은 대기

//? 2. 동기 처리의 특징
// : 코드의 흐름을 예측하는 것이 용이
// : 한 작업이 완료에 실패하면 다음 작업을 진행하지 않는다.

//! 비동기(Asynchronous) 처리
//? 1. 비동기 처리의 개념
// : 코드의 실행이 완료될 때까지 기다리지 않고, 다음 코드를 실행하는 것

//? 2. 비동기 처리의 특징
// : 웹 애플리케이션은 비동기 작업으로 대부분 처리
// : 작업 완료 여부를 콜백함수, 프로미스, Async & Await등의 방법을 통해 처리

//! 타입스크립트에서의 비동기 처리 - 콜백(Callback) 함수

//? 1. 콜백 함수의 개념
// : 다른 함수의 인자(매개 변수)로 전달되어 실행되는 함수
// : 비동기 작업의 결과를 처리하거나, 작업이 완료되었을 때 호출된다.

//? 2. 콜백 함수 작성

function fetchDataCb(callback: (error: Error | null, data: any) => void) {
  // 비동기 작업 수행
  // 작업이 완료되면 결과를 콜백 함수의 인자로 전달하여 호출
}

fetchDataCb((error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
})

//? 3. 콜백 헬(callBack hell)
// : 콜백 패턴을 중첩하여 사용하는 경우 코드의 가독성이 저해, 디버깅이 어려워지는 것

// 예시) 네트워크에서 문서를 받아온 뒤, 해당 문서를 작성한 유저의 다른 글을 가져오는 가상 코드

// fetchDocument(url, function(err, document) {
//   if (err) {
//     console.log(err);
//   } else {
//     fetchAuthor(document, function(err, author) {
//       if(err) {
//         console.log(err);
//       } else {
//         fetchPostsFromAuthor(author.id, function(err, posts) {
//           if(err) {
//             console.log(err);
//           } else {
//             /* 글을 불러오는 로직을 구현 */
//           }
//         })
//       }
//     })
//   }
// })

//? 콜백 체이닝(callBack Chaining)
// : 콜백 헬을 해결하기 위한 방안
// : 각 비동기 작업의 결과를 다음 작업의 인자로 전달

// asyncFun1()
//   .then((result1) => {
//     return asyncFunc2(result1); 
//   })
//   .then((result2) => {
//     return asyncFuc3(result2);
//   })
//   .then((result3) => {
//     ...
//   })
//   .catch((error) => {
//     console.log(error);
//   })