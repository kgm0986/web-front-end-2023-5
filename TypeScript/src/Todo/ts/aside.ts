class AsideEvent {
  // 싱글톤 패턴
  // : 특정 클래스의 인스턴스가 하나만 생성되도록 제한하는 패턴

  // 싱글톤 패턴을 구현하는데에 사용
  private static instance: AsideEvent | null = null;

  public static getInstance(): AsideEvent {

    // instance가 null인 경우(인스턴스 생성되지 않은 경우에만)
    // : 새 인스턴스를 생성
    if(this.instance === null) {
      this.instance = new AsideEvent();
    }
    // 생성된 인스턴스를 반환
    return this.instance;
  }

  // 메뉴 버튼 클릭 이벤트를 추가하는 함수
  public addEventShowMenuButton(): void {
    // '.menu-button' 클래스를 가진 HTML 요소를 선택하여 해당 요소를 변수에 할당
    const menuButton: HTMLElement | null = document.querySelector('.menu-button');

    // menuButton이 존재할 경우, 클릭 이벤트를 추가
    if (menuButton) {
      menuButton?.addEventListener('click', () => {
        // '.menu-aside'클래스를 가진 HTML 요소를 선택해서 'menuAside'에 할당
        const menuAside: HTMLElement | null = document.querySelector('.menu-aside');

        // 'menuAside'에 'hidden-menu' 클래스가 있으면, 해당 클래스를 제거하고, 메뉴 버튼의 텍스트를 ◀로 변경
        if (menuAside?.classList.contains('hidden-menu')) {
          menuAside.classList.remove('hidden-menu');
          menuButton.textContent = "◀";
        } else {
          menuAside?.classList.add('hidden-menu');
          menuButton.textContent = "▶";
        }
      });
    }
  }

  // 각 메뉴 아이템 클릭 시 메인 컨텐츠를 변경하는 이벤트를 추가하는 함수
  public addEventMainChange(): void {
    // '.menu-items' 클래스를 가진 모든 HTML요소를 menuItems에 할당
    const menuItems: NodeListOf<HTMLElement> = document.querySelectorAll('.menu-items');
    // menuItems의 각 요소에 대해 반복문 실행
    menuItems.forEach((menuItem, index) => {
      // 각 메뉴 아이템에 클릭 이벤트를 추가
      menuItem.onclick = () => {
        // '.main-container 클래스를 가진 모든 HTML 요소를 선택해서 mainContainers에 할당
        const mainContainers: NodeListOf<HTMLElement> = document.querySelectorAll('.main-container');

        // '.menu-aside'클래스를 가진 HTML 요소를 menuAside에 할당
        const menuAside: HTMLElement | null = document.querySelector('.menu-aside');

        // mainContainers의 각 요소에 대해 반복문을 실행하여 main-hidden 클래스를 추가
        mainContainers.forEach(mainContainer => {
          mainContainer.classList.add('main-hidden');
        });

        // 클릭된 메뉴 아이템에 해당하는 mainContainers의 요소에서 main-hidden 클래스를 제거
        mainContainers[index].classList.remove('main-hidden');

        // menuAside에 hidden-menu 클래스를 추가하여 메뉴를 숨김
        menuAside?.classList.add('hidden-menu');
      }
    })
  }
}