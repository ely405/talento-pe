'use strict';

const createResendCodeScreen = (updatePageFunction, userPhoneNumber)=>{
  let resendWrapper = $('<section/>',{'class':'row valign-wrapper flex-column container bg-no-repeat h-100vh flex-center', 'id':'message-container'});
  let resendTitle = $('<h4/>',{'class':'center'}).html('Ahora ingresa tu código');
  let resendPar = $('<p/>',{'class':'center'}).html('Enviamos un código de validación al número');
  let phoneToSend = $('<strong/>').html(userPhoneNumber);
  resendPar.append(phoneToSend);
  let inpCode = $('<input/>',{'type':'text', 'class':'validate p-l-126 col s11 bg-contain bg-no-repeat', 'placeholder':'- - - - -'});
  let retryPara = $('<p/>',{'class':'center'}).html('Reintentar en ');
  let clockIcon = $('<i/>',{'id':'clock-icon','clas':'bg-contain bg-no-repeat');
  let countDown = $('<span/>',{'id':'count-down'}).html('time');
  retryPara.append(clockIcon, countDown);
  resendWrapper.append(resendTitle, resendPar, inpCode, retryPara);
  return resendWrapper;
}
