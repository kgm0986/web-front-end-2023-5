// 사용자 정보를 수정하고 저장하는 이벤트를 관리하는 클래스
class InformationEvent {

  // InformationEvent 클래스의 유일한 인스턴스를 저장하는 정적 필드
  private static instance: InformationEvent | null = null;

  // InformationEvent의 인스턴스를 반환하는 메소드
  // 인스턴스가 없으면 생성하여 반환
  static getInstance(): InformationEvent {
    if(this.instance == null) {
      // (인스턴스가 없을 때 만) 인스턴스 새로 생성
      this.instance = new InformationEvent();
    }
    return this.instance;
  }

  // 사용자의 프로필 사진 클릭 시, 사진 변경을 위한 파일 입력 창을 여는 이벤트
  addEventPhotoChangeClick(): void {
    const infoPhoto = document.querySelector<HTMLElement>('.info-photo');
    if (infoPhoto) {
      infoPhoto.onclick = () => {
        const photoFile = document.querySelector<HTMLInputElement>('.photo-file');
        photoFile?.click(); // 요소가 존재하면 클릭 이벤트 실행
      };
    }
  }

  // 파일 입력창에서 파일이 선택되면 사진을 변경하는 메서드를 호출
  addEventPhotoChange(): void {
    const photoFile = document.querySelector<HTMLInputElement>('.photo-file');
    if (photoFile) {
      photoFile.onchange = () => { // 파일 선택 시
        FileService.getInstance().changePhoto();
      }
    }
  }

  // 'About Me' 수정 버튼 클릭 이벤트 추가 함수
  addEventAboutMeModifyClick(): void {
    // m-aboutme 요소를 찾아서 변수에 저장
    const aboutMeModifyButton = document.querySelector<HTMLElement>('.m-aboutme');

    if (aboutMeModifyButton) {
      aboutMeModifyButton.onclick = () => {
        // s-aboutme 요소를 변수에 저장
        const aboutMeSaveButton = document.querySelector<HTMLElement>('.s-aboutme');
        // 'About Me' 저장 버튼을 표시하고, 수정 버튼을 숨김
        aboutMeSaveButton?.classList.remove('button-hidden');
        aboutMeModifyButton.classList.add('button-hidden');

        // .info-input-container의 모든 요소를 변수에 저장
        const infoInputContainers = document.querySelectorAll('.info-input-container');

        infoInputContainers.forEach((infoInputContainer) => {
          // 각 컨테이너 안의 .info-input 요소를 찾아서 변수에 저장
          const infoInput = infoInputContainer.querySelector<HTMLInputElement>('.info-input');
          if(infoInput) {
            infoInput.disabled = false;
          }
        })
      }
    }
  }

  // 'About Me' 저장 버튼 클릭 이벤트 추가
  addEventAboutMeSaveClick(): void {
    const aboutMeSaveButton = document.querySelector<HTMLButtonElement>('.s-aboutme');
    if (aboutMeSaveButton) {
      aboutMeSaveButton.onclick = () => {
        const aboutMeModifyButton = document.querySelector<HTMLButtonElement>('.m-aboutme');
        aboutMeModifyButton?.classList.remove('button-hidden');
        aboutMeSaveButton.classList.add('button-hidden');

        const infoInputContainers = document.querySelectorAll('.info-input-container');

        // 사용자 정보를 가져와서 userInfo 변수에 저장
        const userInfo = InformationService.getInstance().userInfo;

        infoInputContainers.forEach((infoInputContainer) => {
          const infoInput = infoInputContainer.querySelector<HTMLInputElement>('.info-input');
          if (infoInput) {
            // 각 입력 필드의 값을 userInfo 객체에 저장, 입력을 비활성화
            userInfo[infoInput.id] = infoInput.value;
            infoInput.disabled = true;
          }
        });

        // userInfo 객체를 로컬 스토리지에 저장
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      }
    }
  }

  addEventIntroduceModifyClick(): void {
    // .m-introduce 요소(수정 버튼)를 찾아서
    // introduceModifyButton 변수에 저장
    const introduceModifyButton = document.querySelector<HTMLButtonElement>('.m-introduce');
    // 해당 버튼이 존재하면
    // 저장 버튼(.s-introduce)을 찾아서 introduceSaveButton 변수에 저장
    if (introduceModifyButton) {
      introduceModifyButton.onclick = () => {
        const introduceSaveButton = document.querySelector<HTMLButtonElement>('.s-introduce');
        // 저장 버튼을 표시하고, 수정 버튼을 숨김
        introduceSaveButton?.classList.remove('button-hidden');
        introduceModifyButton.classList.add('button-hidden');

        // 입력 필드(.introduce-input)를
        // introduceInput 변수에 저장
        const introduceInput = document.querySelector<HTMLInputElement>('.introduce-input');
        // 입력 필드가 존재하면, 입력을 활성화
        if (introduceInput) {
          introduceInput.disabled = false;
        }
      };
    }
  }

  addEventIntroduceSaveClick(): void {
    const introduceSaveButton = document.querySelector<HTMLButtonElement>('.s-introduce');
    if (introduceSaveButton) {
      introduceSaveButton.onclick = () => {
        const introduceModifyButton = document.querySelector<HTMLButtonElement>('m-introduce');
        introduceModifyButton?.classList.remove('button-hidden');
        introduceSaveButton.classList.add('button-hidden');

        const introduceInput = document.querySelector<HTMLInputElement>('.introduce-input');
        if (introduceInput) {
          introduceInput.disabled = true;
          // 입력된 내용을 userInfo 객체에 저장
          const userInfo = InformationService.getInstance().userInfo;
          userInfo['introduce'] = introduceInput.value;

          localStorage.setItem('userInfo', JSON.stringify(userInfo));
        }
      }
    }
  }
}

class InformationService {
  private static instance: InformationService | null = null;

  // 사용자 정보를 저장하는 객체
  public userInfo: { [key: string]: string } = {};

  static getInstance(): InformationService {
    if (this.instance == null) {
      this.instance = new InformationService();
    }
    return this.instance;
  }

  // 정보 로딩
  loadInfo(): void {
    this.loadInfoPhoto();
    this.loadInfoUser();
  }

  // 사진 정보 로딩
  loadInfoPhoto(): void {
    const infoPhotoImg = document.querySelector<HTMLImageElement>('.info-photo img');

    if (infoPhotoImg) {
      const infoPhoto = localStorage.getItem('infoPhoto');
      if (infoPhoto == null) {
        infoPhotoImg.src = 'TypeScript\src\Todo\images\noimage.jpg';
      } else {
        infoPhotoImg.src = infoPhoto;
      }
    }
  }

  // 사용자 정보 로딩
  loadInfoUser(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || "{}");

    Object.keys(this.userInfo).forEach((key) => {
      // 모든 .info-input 요소를 찾아서 반복 처리
      const infoInputs = document.querySelectorAll<HTMLInputElement>('.info-input');
      infoInputs.forEach((input) => {
        // 입력 필드의 id와 userInfo 객체의 키가 일치하면
        // 해당 값으로 설정
        if (input.id == key) {
          input.value = this.userInfo[key];
        }
      });
    });

    const introduceInput = document.querySelector<HTMLInputElement>('.introduce-input');
    // this.userInfo.introduce: userInfo 객체 안에 introduce라는 키로 저장된 값이 존재하는지 확인
    if (introduceInput && this.userInfo.introduce) {
      introduceInput.value = this.userInfo.introduce;
    }
  }
}

class FileService {
  private static instance: FileService | null = null;

  static getInstance(): FileService {
    if (this.instance == null) {
      this.instance = new FileService();
    }
    return this.instance;
  }

  //! 사진을 변경하는 함수
  // : 선택된 파일을 폼 데이터로 가지고 와서
  // : 사이즈가 0이 아닌 경우에만 showPreview(미리보기)함수를 호출
  changePhoto(): void {
    const photoForm = document.querySelector('.photo-form') as HTMLFormElement;
    const formData = new FormData(photoForm);
    const fileValue = formData.get('file') as File;
    if (fileValue.size == 0) {
      return;
    }
    this.showPreview(fileValue);
  }

  //! 선택된 파일의 미리보기를 화면에 표시하는 함수
  showPreview(fileValue: File):void {
    // FileReader 객체를 생성해서 파일의 내용을 비동기적으로 읽어오기
    const fileReader = new FileReader();

    // 읽어온 파일을 데이터 URL로 읽음.
    fileReader.readAsDataURL(fileValue);

    // 파일이 성공적으로 읽혀졌을 때 실행되는 콜백 함수
    fileReader.onload = (e) => {
      // 읽은 결과물이 e.target?.result에 있을 경우 변수에 할당
      const result = e.target?.result;

      // 결과가 존재할 경우
      if(result) {
        // .info-photo img 요소를 가져옴
        const photoImg = document.querySelector<HTMLImageElement>('.info-photo img');

        // 요소가 존재하면
        if (photoImg) {
          photoImg.src = result as string;
          // localStorage에 변경된 이미지의 src 값을 저장
          localStorage.setItem('infoPhoto', photoImg.src);
        }
      }
    }
  }
}