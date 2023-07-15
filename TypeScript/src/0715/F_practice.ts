//타입
//
type APIResponseState = "loding"|"success"|"error";
function handleResponse(state: APIResponseState){
  switch(state) {
    case 'loding':
      console.log("loding");
      break;
    case 'success':
      console.log("success");
      break;
    case 'error':
      console.log("error");
      break;
  }
}
handleResponse('loding');
