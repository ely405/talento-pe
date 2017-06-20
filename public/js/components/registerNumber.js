'use strict';

const reRender = (resultContainer, update)=>{
  resultContainer.empty();
  resultContainer.append(createRegisterNumber());
}

const createRegisterNumber = (updatePageFunction)=>{
  let registerWrapper = $('<section/>',{'class':'valign-wrapper flex-column space-around h-100vh'});
  let registerContainer = $('<div/>',{'class':'row valign-wrapper flex-column'});
  let phoneImg = $('<img/>',{'src':'img/icons/phone.png', 'alt':'Phone', 'class':'col s6 m-auto'});
  let title = $('<h4/>',{'class':'center'}).html('Para comenzar validemos tu número');
  let paragraphSMS = $('<p/>').html('Recibirás un SMS con un código de validación');

  let inpPhoneContainer = $('<div/>',{'class':'input-field row'});
  let imgPhoneNumber = $('<img/>',{'src':'img/icons/phoneandnumber.png', 'alt':'Phone and number', 'class':'col s4 select-label h-60pr'});
  let inpPhoneNumber = $('<input/>',{'id':'phone-number', 'type':'text', 'class':'validate p-l-126 col s12'});
  inpPhoneContainer.append(imgPhoneNumber, inpPhoneNumber);

  let inpCheckContainer = $('<div/>',{'class':'input-field'});
  let checkTerms = $('<input/>',{'type':'checkbox', 'class':'filled-in', 'id':'check-terms'});
  let lblTerms = $('<label/>',{'for':'check-terms'}).html('Acepto los ');
  let hrefTerms = $('<a/>',{'href':'#'}).html('Términos y condiciones');
  inpCheckContainer.append(checkTerms, lblTerms.append(hrefTerms));

  registerContainer.append(phoneImg, title, paragraphSMS, inpPhoneContainer, inpCheckContainer);

  let btnContainer = $('<div/>',{'class':'input-field'});
  let btnContinue = $('<button/>',{'type':'button', 'class':'waves-effect btn disabled', 'id':'btn-continue', 'disabled':'disabled'}).html('Continuar');

  registerWrapper.append(registerContainer, btnContainer.append(btnContinue));
  return registerWrapper;
}

let inpPhone = $('#phone-number');
let checkTerms = $('#check-terms');

const enableContinueButton = ()=>{
  console.log('enable');
  if(inpPhone.val() != '' && checkTerms.prop('checked') == 'true'){
    console.log('lleno');
    $('#btn-continue').removeAttr('disabled');
    $('#btn-continue').removeClass('disabled');
  }
}

$('#container').on('change', '.to-enable', ()=>{
  console.log('cambio');
  console.log(inpPhone.val());
  console.log(checkTerms.prop('checked'));
  if(inpPhone.val() != '' && checkTerms.prop('checked') === 'true'){
    $('#btn-continue').css('color','black');
  }
})


$('#btn-continue').click(()=>{
  console.log('click');
  reRender($('#root'), update);
  $.post('/api/registerNumber', {
    "phone": inpPhone.val(),
    "terms": checkTerms.prop('checked')
  }, (data, status)=>{
    console.log(data);
    console.log(status);
  });
})
