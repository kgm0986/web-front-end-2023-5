// 사용자 정보를 수정하고 저장하는 이벤트를 관리하는 클래스
var InformationEvent = /** @class */ (function () {
    function InformationEvent() {
    }
    // InformationEvent의 인스턴스를 반환하는 메소드
    // 인스턴스가 없으면 생성하여 반환
    InformationEvent.getInstance = function () {
        if (this.instance == null) {
            // (인스턴스가 없을 때 만) 인스턴스 새로 생성
            this.instance = new InformationEvent();
        }
        return this.instance;
    };
    // 사용자의 프로필 사진 클릭 시, 사진 변경을 위한 파일 입력 창을 여는 이벤트
    InformationEvent.prototype.addEventPhotoChangeClick = function () {
        var infoPhoto = document.querySelector('.info-photo');
        if (infoPhoto) {
            infoPhoto.onclick = function () {
                var photoFile = document.querySelector('.photo-file');
                photoFile === null || photoFile === void 0 ? void 0 : photoFile.click(); // 요소가 존재하면 클릭 이벤트 실행
            };
        }
    };
    // 파일 입력창에서 파일이 선택되면 사진을 변경하는 메서드를 호출
    InformationEvent.prototype.addEventPhotoChange = function () {
        var photoFile = document.querySelector('.photo-file');
        if (photoFile) {
            photoFile.onchange = function () {
                FileService.getInstance().changePhoto();
            };
        }
    };
    // 'About Me' 수정 버튼 클릭 이벤트 추가 함수
    InformationEvent.prototype.addEventAboutMeModifyClick = function () {
        // m-aboutme 요소를 찾아서 변수에 저장
        var aboutMeModifyButton = document.querySelector('.m-aboutme');
        if (aboutMeModifyButton) {
            aboutMeModifyButton.onclick = function () {
                // s-aboutme 요소를 변수에 저장
                var aboutMeSaveButton = document.querySelector('.s-aboutme');
                // 'About Me' 저장 버튼을 표시하고, 수정 버튼을 숨김
                aboutMeSaveButton === null || aboutMeSaveButton === void 0 ? void 0 : aboutMeSaveButton.classList.remove('button-hidden');
                aboutMeModifyButton.classList.add('button-hidden');
                // .info-input-container의 모든 요소를 변수에 저장
                var infoInputContainers = document.querySelectorAll('.info-input-container');
                infoInputContainers.forEach(function (infoInputContainer) {
                    // 각 컨테이너 안의 .info-input 요소를 찾아서 변수에 저장
                    var infoInput = infoInputContainer.querySelector('.info-input');
                    if (infoInput) {
                        infoInput.disabled = false;
                    }
                });
            };
        }
    };
    // 'About Me' 저장 버튼 클릭 이벤트 추가
    InformationEvent.prototype.addEventAboutMeSaveClick = function () {
        var aboutMeSaveButton = document.querySelector('.s-aboutme');
        if (aboutMeSaveButton) {
            aboutMeSaveButton.onclick = function () {
                var aboutMeModifyButton = document.querySelector('.m-aboutme');
                aboutMeModifyButton === null || aboutMeModifyButton === void 0 ? void 0 : aboutMeModifyButton.classList.remove('button-hidden');
                aboutMeSaveButton.classList.add('button-hidden');
                var infoInputContainers = document.querySelectorAll('.info-input-container');
                // 사용자 정보를 가져와서 userInfo 변수에 저장
                var userInfo = InformationService.getInstance().userInfo;
                infoInputContainers.forEach(function (infoInputContainer) {
                    var infoInput = infoInputContainer.querySelector('.info-input');
                    if (infoInput) {
                        // 각 입력 필드의 값을 userInfo 객체에 저장, 입력을 비활성화
                        userInfo[infoInput.id] = infoInput.value;
                        infoInput.disabled = true;
                    }
                });
                // userInfo 객체를 로컬 스토리지에 저장
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
            };
        }
    };
    InformationEvent.prototype.addEventIntroduceModifyClick = function () {
        // .m-introduce 요소(수정 버튼)를 찾아서
        // introduceModifyButton 변수에 저장
        var introduceModifyButton = document.querySelector('.m-introduce');
        // 해당 버튼이 존재하면
        // 저장 버튼(.s-introduce)을 찾아서 introduceSaveButton 변수에 저장
        if (introduceModifyButton) {
            introduceModifyButton.onclick = function () {
                var introduceSaveButton = document.querySelector('.s-introduce');
                // 저장 버튼을 표시하고, 수정 버튼을 숨김
                introduceSaveButton === null || introduceSaveButton === void 0 ? void 0 : introduceSaveButton.classList.remove('button-hidden');
                introduceModifyButton.classList.add('button-hidden');
                // 입력 필드(.introduce-input)를
                // introduceInput 변수에 저장
                var introduceInput = document.querySelector('.introduce-input');
                // 입력 필드가 존재하면, 입력을 활성화
                if (introduceInput) {
                    introduceInput.disabled = false;
                }
            };
        }
    };
    InformationEvent.prototype.addEventIntroduceSaveClick = function () {
        var introduceSaveButton = document.querySelector('.s-introduce');
        if (introduceSaveButton) {
            introduceSaveButton.onclick = function () {
                var introduceModifyButton = document.querySelector('m-introduce');
                introduceModifyButton === null || introduceModifyButton === void 0 ? void 0 : introduceModifyButton.classList.remove('button-hidden');
                introduceSaveButton.classList.add('button-hidden');
                var introduceInput = document.querySelector('.introduce-input');
                if (introduceInput) {
                    introduceInput.disabled = true;
                    // 입력된 내용을 userInfo 객체에 저장
                    var userInfo = InformationService.getInstance().userInfo;
                    userInfo['introduce'] = introduceInput.value;
                    localStorage.setItem('userInfo', JSON.stringify(userInfo));
                }
            };
        }
    };
    // InformationEvent 클래스의 유일한 인스턴스를 저장하는 정적 필드
    InformationEvent.instance = null;
    return InformationEvent;
}());
var InformationService = /** @class */ (function () {
    function InformationService() {
        // 사용자 정보를 저장하는 객체
        this.userInfo = {};
    }
    InformationService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new InformationService();
        }
        return this.instance;
    };
    // 정보 로딩
    InformationService.prototype.loadInfo = function () {
        this.loadInfoPhoto();
        this.loadInfoUser();
    };
    // 사진 정보 로딩
    InformationService.prototype.loadInfoPhoto = function () {
        var infoPhotoImg = document.querySelector('.info-photo img');
        if (infoPhotoImg) {
            var infoPhoto = localStorage.getItem('infoPhoto');
            if (infoPhoto == null) {
                infoPhotoImg.src = 'TypeScript\src\Todo\images\noimage.jpg';
            }
            else {
                infoPhotoImg.src = infoPhoto;
            }
        }
    };
    // 사용자 정보 로딩
    InformationService.prototype.loadInfoUser = function () {
        var _this = this;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo') || "{}");
        Object.keys(this.userInfo).forEach(function (key) {
            // 모든 .info-input 요소를 찾아서 반복 처리
            var infoInputs = document.querySelectorAll('.info-input');
            infoInputs.forEach(function (input) {
                // 입력 필드의 id와 userInfo 객체의 키가 일치하면
                // 해당 값으로 설정
                if (input.id == key) {
                    input.value = _this.userInfo[key];
                }
            });
        });
        var introduceInput = document.querySelector('.introduce-input');
        // this.userInfo.introduce: userInfo 객체 안에 introduce라는 키로 저장된 값이 존재하는지 확인
        if (introduceInput && this.userInfo.introduce) {
            introduceInput.value = this.userInfo.introduce;
        }
    };
    InformationService.instance = null;
    return InformationService;
}());
var FileService = /** @class */ (function () {
    function FileService() {
    }
    FileService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new FileService();
        }
        return this.instance;
    };
    //! 사진을 변경하는 함수
    // : 선택된 파일을 폼 데이터로 가지고 와서
    // : 사이즈가 0이 아닌 경우에만 showPreview(미리보기)함수를 호출
    FileService.prototype.changePhoto = function () {
        var photoForm = document.querySelector('.photo-form');
        var formData = new FormData(photoForm);
        var fileValue = formData.get('file');
        if (fileValue.size == 0) {
            return;
        }
        this.showPreview(fileValue);
    };
    //! 선택된 파일의 미리보기를 화면에 표시하는 함수
    FileService.prototype.showPreview = function (fileValue) {
        // FileReader 객체를 생성해서 파일의 내용을 비동기적으로 읽어오기
        var fileReader = new FileReader();
        // 읽어온 파일을 데이터 URL로 읽음.
        fileReader.readAsDataURL(fileValue);
        // 파일이 성공적으로 읽혀졌을 때 실행되는 콜백 함수
        fileReader.onload = function (e) {
            var _a;
            // 읽은 결과물이 e.target?.result에 있을 경우 변수에 할당
            var result = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            // 결과가 존재할 경우
            if (result) {
                // .info-photo img 요소를 가져옴
                var photoImg = document.querySelector('.info-photo img');
                // 요소가 존재하면
                if (photoImg) {
                    photoImg.src = result;
                    // localStorage에 변경된 이미지의 src 값을 저장
                    localStorage.setItem('infoPhoto', photoImg.src);
                }
            }
        };
    };
    FileService.instance = null;
    return FileService;
}());
