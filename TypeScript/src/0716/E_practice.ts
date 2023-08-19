// ReadOnlyPerson 인터페이스를 생성
// 읽기 전용 속성 "이름"과 "나이", 그리고 메서드 "생일축하"를 가진 인터페이스

interface ReadOnlyPerson {
  readonly name: string;
  age: number;
  celebrate: () => string;
}
// 해당 인터페이스를 사용해 객체 구현
// 메서드이름: celebrate()
// 메서드에는 해당 필드의 age값을 해당 함수 호출 시 1증가 시킴
// 메서드 반환 값 "생일 축하합니다. name은 이제 age살 입니다."

let readOnlyPerson: ReadOnlyPerson = {
  name: "doKyung",
  age: 29,
  celebrate: function() {
    this.age += 1;
    return "생일 축하합니다." + this.name + " 이제" +  this.age + " 살 입니다.";
  }
}

console.log(readOnlyPerson.celebrate());

//! 0716 종합 예제 문제

// 영화 티켓 판매 시스템 구축

//? Movie 인터페이스를 생성
// title: 영화의 제목 (문자열)
// director: 감독의 이름 (문자열)
// availableSeats: 남은 좌석의 수 (숫자)
// Movie[] 형태의 배열인 movies를 생성, 여러개의 영화를 미리 추가
// let movies: Movie[] = [];

// addMovie(movie: Movie) 함수를 작성
// addMovie 함수는 movies 배열에 새로운 영화를 추가
// push()메서드를 사용

// sellTicket(title: string, number: number) 함수를 작성
// sellTicket 함수는 입력으로 영화의 제목과 판매하려는 티켓 수를 받아, 해당 영화의 availableSeats를 줄인다.
// 만약 availableSeats가 부족하다면, 오류 메시지를 출력하세요.

// 유효성 검사
// 1. 영화가 존재하는지 (!foundMovie)
// 2. 남은 좌석이 충분하지 않을 경우: 오류 메시지
interface Movie {
  title: string;
  director: string;
  availableSeats:number;

}
let movies: Movie[] = [{title:"sdsrd",director:"wdqwf",availableSeats:6},{title:"sdsrd2",director:"wdqwf2",availableSeats:7},{title:"sdsrd3",director:"wdqwf3",availableSeats:8}];

function addMovie(movie: Movie) {
  movies.push(movie);
}
function sellTicket(title: string, number: number) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title = title){
      if ((movies[i].availableSeats-number)>=0){

        movies[i].availableSeats -= number;
        break;
      }else{
        console.log("좌석이 부족합니다");
        break;
      }
    };
  }
  console.log("존제하지 않는 영화입니다");
}