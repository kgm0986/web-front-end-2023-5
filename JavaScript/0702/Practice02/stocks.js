// 주식 추가 함수
// newElement라는 함수를 정의
// 이 함수는 사용자가 '추가' 버튼을 클릭했을 때 호출
function newElement() {
  // 테이블 참조 및 행 추가
  // getElementById 함수를 사용하여 HTML 문서에서 "stockTable"이라는 ID를 가진 요소 (여기서는 테이블)를 찾는다.
  // 그 후, insertRow 함수를 이용하여 테이블에 새로운 행을 추가
  // -1을 인자로 전달하면 새 행이 테이블의 마지막에 추가
  var table = document.getElementById("stockTable");
  var row = table.insertRow(-1);

  // 입력 필드에서 값 얻기
  // 각 입력 필드에서 사용자가 입력한 값을 얻는다.
  // .value 속성은 입력 필드의 현재 값을 반환합니다.
  var stockName = document.getElementById("stockName").value;
  var purchasePrice = document.getElementById("purchasePrice").value;
  var quantity = document.getElementById("quantity").value;

  // 입력 유효성 검사
  // 모든 입력 필드가 채워져 있는지 확인, 만약 하나라도 비어 있다면,
  // alert 함수를 사용하여 사용자에게 모든 필드를 채워야 한다는 메시지를 보여준다.
  if (stockName === "" || purchasePrice === "" || quantity === "") {
    alert("All fields must be filled out!");
  } else {
    // 행에 셀 추가 및 값 채우기
    // insertCell 함수를 이용하여 새 행에 셀을 추가합
    // 그 다음, 각 셀의 innerHTML 속성을 이용하여 해당 셀에 사용자가 입력한 값으로 채운다.
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = stockName;
    cell2.innerHTML = purchasePrice;
    cell3.innerHTML = quantity;

    // 삭제 버튼 추가 및 이벤트 리스너 설정
    // 마지막으로 새 행에 삭제 버튼을 추가
    // innerHTML 속성을 이용하여 HTML 버튼 요소를 추가하고, 이 버튼에 'deleteBtn'이라는 클래스를 부여
    // 그 후, querySelector 함수를 사용하여 이 버튼을 찾아내고, addEventListener 함수를 이용하여
    // 이 버튼에 'click' 이벤트 리스너를 설정
    // 이 리스너의 콜백 함수에서는 remove 메소드를 이용하여 클릭된 버튼이 속한 행을 삭제
    let cell4 = row.insertCell(3);
    cell4.innerHTML = '<button class="deleteBtn">Delete</button>';
    cell4.querySelector(".deleteBtn").addEventListener("click", function () {
      this.parentElement.parentElement.remove();
    });
  }

  // 입력 필드 초기화
  // 마지막으로, 모든 입력 필드를 빈 문자열로 설정하여 초기화
  document.getElementById("stockName").value = "";
  document.getElementById("purchasePrice").value = "";
  document.getElementById("quantity").value = "";
}

// 이벤트 리스너 등록
// 추가 버튼에 이벤트 리스너 추가
// 마지막 줄에서는 'addBtn'이라는 ID를 가진 요소 (여기서는 버튼)에 'click' 이벤트 리스너를 추가
// 이 리스너는 사용자가 '추가' 버튼을 클릭할 때 newElement 함수를 호출하도록 설정
document.getElementById("addBtn").addEventListener("click", newElement);
