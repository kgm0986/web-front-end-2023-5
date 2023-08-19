//! 배열 메소드와 타입스크립트를 사용한 쇼핑 카트(장바구니) 기능

//? 장바구니 구조 - 상품 정보 타입 지정
type Product = {
  id: number;
  name: string;
  price: number;
}

//? 장바구니에 상품 추가
// addProduct 함수
function addProduct(cart: Product[], product: Product): Product[] {
  return [...cart, product];
}

// a = [1, 2, 3, 4, 5];
// b = 6
// c = [...a, b]
// c = [1, 2, 3, 4, 5, 6]

//? 장바구니에 상품 제거
// removeProduct 함수
function removeProduct(cart: Product[], productId: number): Product[] {
  // productId가 일치한 값을 제거
  // 일치하지 않은 값들을 새로운 배열로 반환
  return cart.filter(product => product.id !== productId);
}

//? 장바구니의 총 금액 계산
// calculateTotal 함수
function calculateTotal(cart: Product[]): number {
  return cart.reduce((total, product) => total + product.price, 0);
}

// {
//   id: number;
//   name: string;
//   price: number;
// }

//? 장바구니 실행
let cart: Product[] = [];

//^ 장바구니 추가
cart = addProduct(cart, {id: 1, name: "Apple", price: 1000});
cart = addProduct(cart, {id: 2, name: "Banana", price: 2000});
cart = addProduct(cart, {id: 3, name: "Orange", price: 5000});
cart = addProduct(cart, {id: 4, name: "Mango", price: 3500});

console.log(cart);

//^ 장바구니 제품의 총 합계
console.log(calculateTotal(cart)); // 11500

//^ 장바구니 제품 삭제
cart = removeProduct(cart, 2);
console.log(cart);
console.log(calculateTotal(cart)); // 9500