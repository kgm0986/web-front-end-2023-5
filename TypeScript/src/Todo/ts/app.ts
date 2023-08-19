window.onload = (): void => {
  //! 사이드바 이벤트 등록
  // 사이드바 메뉴 표시 이벤트 등록
  AsideEvent.getInstance().addEventShowMenuButton();

  // 메인 콘텐츠 변경 이벤트 등록
  AsideEvent.getInstance().addEventMainChange();

  //! User Information 정보 로드
  // 정보 서비스의 정보를 로드
  InformationService.getInstance().loadInfo();

  //! User Information 이벤트 등록
  // 사진 변경 클릭 이벤트 등록
  InformationEvent.getInstance().addEventPhotoChangeClick();

  // 사진 변경 이벤트 등록
  InformationEvent.getInstance().addEventPhotoChange();

  //! User Information - About Me 이벤트 등록
  InformationEvent.getInstance().addEventAboutMeModifyClick();
  
  InformationEvent.getInstance().addEventAboutMeSaveClick();

  //! User Information - Introduce Self 이벤트 등록
  InformationEvent.getInstance().addEventIntroduceModifyClick();

  InformationEvent.getInstance().addEventIntroduceSaveClick();

  //! 할 일 추가 버튼 클릭 이벤트 등록
  TodoEvent.getInstance().addEventAddTodoClick();

  //! 할 일 추가를 위한 키보드 엔터 이벤트 등록
  TodoEvent.getInstance().addEventAddTodoKeyUp();

  //! 할 일 서비스 초기화(데이터 로드 수행)
  TodoService.getInstance();
} 