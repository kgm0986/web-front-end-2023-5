//! 배열 메소드와 제네릭를 사용한 회원 관리 프로그램 구현

// 회원 정보: name, age, active
// 추가(addMember), 검색(findMember), 제거(removeMember), 활성회원만 조회(filterActiveMember)

// 회원 정보를 관리하는 Member 클래스
class Member {
  constructor(
    public name: string, 
    public age: number, 
    public active: boolean = true
    ) {}
}

// 회원 관리 기능을 제공하는 Membership 클래스
class MemberShip<T extends Member> {
  private members: T[] = [];

  addMember(member: T): void {
    this.members.push(member);
  }

  findMember(name: string): T | undefined {
    // find(): 입력값에 해당하는 첫 번째 요소를 찾고 반환
    return this.members.find(member => member.name === name);
  }

  removeMember(name: string): void  {
    // findIndex 일치하는 값이 없다면 -1을 반환
    const index = this.members.findIndex(member => member.name === name);
    if (index !== -1) {
      // splice() 해당 인덱스를 수정
      
      this.members.splice(index, 1);
    }
  }

  filterActiveMember(): T[] {
    return this.members.filter(member => member.active);
  }
}

//! 구현 테스트
let membership = new MemberShip<Member>();
membership.addMember(new Member("seungah", 90, false));
membership.addMember(new Member("dokyung", 80));
membership.addMember(new Member("jungook", 70, false));
membership.addMember(new Member("sunhee", 85));

console.log(membership.findMember('sunhee'));
console.log(membership.findMember('junhun'));
membership.removeMember('seungah');
console.log(membership);

let activeMember = membership.filterActiveMember()
console.log(activeMember)


//? splice() 해당 인덱스를 수정
let array = [1, 2, 3, 4 ,5];
let removed = array.splice(1, 3);
// 인덱스가 1번인 요소부터 요소의 개수를 3개 제거
console.log(removed);
console.log(array);

array.splice(1, 0, 11, 22, 33);
// splice(추가할 위치, 제거할 요소의 개수, 추가할 요소값, ...)
// 인덱스가 1번인 위치에 이후에 나오는 요소를 추가
console.log(array);