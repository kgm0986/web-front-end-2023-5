//! 배열 메소드와 타입스크립트를 사용한 학생 점수 처리 프로그램 구현

//? 학생 점수 정보 구조
// 학생의 이름과 점수를 표현할 타입을 정의해봅니다. (StudentScore, name, score)
type StudentScore = {
  name: string;
  score: number;
}

//? 평균 점수 계산하기
// 학생들의 점수 정보 배열을 입력 받아, 평균 점수를 계산하는 calculateAverage 함수를 만들어보세요.
// reduce() 사용
function calculateAverage(score: StudentScore[]): number {
  let total = score.reduce((sum, score) => sum + score.score, 0);
  return total / score.length;
}

//? 최고 점수 학생 찾기
// 학생들의 점수 정보 배열을 입력 받아, 가장 점수가 높은 학생의 정보를 반환하는 findTopStudent 함수를 생성
// reduce() 사용, 삼항 연산자
function findTopStudent(score: StudentScore[]): StudentScore {
  return score.reduce((topStudent, student) => (student.score > topStudent.score ? student : topStudent), score[0]);
}

//? //? 합격자 목록 만들기
// 학생들의 점수 정보 배열을 입력 받아, 특정 점수 이상인 학생들의 목록을 반환하는 getPassList 함수생성
// filter() 사용
function getPassList(score: StudentScore[], passScore: number): StudentScore[] {
  return score.filter(score => score.score >= passScore);
}

//? 구현 테스트
let studentScores: StudentScore[] = [
  { name: 'A', score: 85 },
  { name: 'B', score: 75 },
  { name: 'C', score: 100 },
  { name: 'D', score: 95 },
  { name: 'E', score: 80 },
];

console.log(calculateAverage(studentScores));
console.log(findTopStudent(studentScores));
console.log(getPassList(studentScores, 85));
