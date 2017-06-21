'use strict';

const createRegisterNumber = (updatePageFunction, wrapperContainer)=>{
  console.log(state.screen);
  let registerWrapper = $('<section/>',{'class':'valign-wrapper flex-column space-around h-95vh container'});
  let registerContainer = $('<div/>',{'class':'row valign-wrapper flex-column', 'id':'register-container'});
  let phoneImg = $('<img/>',{'src':'img/icons/phone.png', 'alt':'Phone', 'class':'col s6 m-auto'});
  let title = $('<h5/>',{'class':'center'}).html('Para comenzar validemos tu número');
  let paragraphSMS = $('<p/>').html('Recibirás un SMS con un código de validación');

  let inpPhoneContainer = $('<div/>',{'class':'input-field row'});
  let imgPhoneNumber = $('<img/>',{'src':'img/icons/phoneandnumber.png', 'alt':'Phone and number', 'class':'col s4 select-label h-60pr'});
  let inpPhone = $('<input/>',{'id':'phone-number', 'type':'text', 'class':'validate p-l-126 col s12 to-enable'});
  inpPhoneContainer.append(imgPhoneNumber, inpPhone);

  let inpCheckContainer = $('<div/>',{'class':'input-field'});
  let checkTerms = $('<input/>',{'type':'checkbox', 'class':'filled-in to-enable', 'id':'check-terms'});
  let lblTerms = $('<label/>',{'for':'check-terms'}).html('Acepto los ');
  let hrefTerms = $('<a/>',{'href':'#'}).html('Términos y condiciones');
  inpCheckContainer.append(checkTerms, lblTerms.append(hrefTerms));

  registerContainer.append(phoneImg, title, paragraphSMS, inpPhoneContainer, inpCheckContainer);

  let btnContainer = $('<div/>',{'class':'input-field'});
  let btnContinue = $('<button/>',{'type':'button', 'class':'waves-effect btn disabled', 'id':'btn-continue', 'disabled':'disabled'}).html('Continuar');

  registerWrapper.append(registerContainer, btnContainer.append(btnContinue));

  registerContainer.on('change', '.to-enable', ()=>{
    if(inpPhone.val().length > 0 && checkTerms.is(':checked')){
      btnContinue.removeAttr('disabled');
      btnContinue.removeClass('disabled');
    }
  });

  btnContinue.click(()=>{
    state.screen = 'resendCodeScreen';
    reRender(wrapperContainer, updatePageFunction, createResendCodeScreen(updatePageFunction, wrapperContainer));
  })

  return registerWrapper;
}
