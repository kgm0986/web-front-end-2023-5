//! 회원 관리 프로그램 실습

// Member 회원 데이터 관리 interface 지정
// : name, email

// 위의 인터페이스를 지정받는 members 배열을 생성 및 초기화

// form과 ul태그의 element 요소를 지정해서 변수에 저장

// 위의 form 변수에 .onsubmit 이벤트를 사용
// name에 입력 value값
// email에 입력 value값

// const member변수에 Memeber 타입으로 하는 name과 email 객체를 생성

// memebers배열에 해당 member변수를 push()를 사용해 추가

// updateMemberList(memberList, member) 함수 구현

//! updateMemberList 함수
// 매개변수로 HTMLUListElement타입의 memberList, Member[]타입의 members
// 반환 void

// memberList.innerHTML = '';
// members 배열을 forEach 반복문을 사용해서 각각의 요소마다
// li 요소를 생성해서 li 변수에 담고
// li 요소에 textContent 사용해서 `${member.name} - ${member.email}`;
// li를 memberList의 자식 요소로 추가