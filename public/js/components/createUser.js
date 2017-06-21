'use strict';

const createUserAccount = (updatePageFunctioon, wrapperContainer)=>{
  let createUserContainer = $('<div/>',{'class':'row valign-wrapper flex-column container', 'id':'create-user-container'});
  let imgLockOne = $('<img/>',{'src':'img/icons/lockone.png', 'alt':'Lock One', 'class':'col s6 m-auto'});
  let userTitle = $('<h5/>',{'class':'center'}).html('Crea tu usuario Yape');
  let userPar = $('<p/>').html('Ingresa un nombre, email y clave de usuario.');

  let formContainer = $('<div/>',{'class':'col m-auto s11 valign-wrapper flex-column'});
  let userName = $('<input/>',{'id':'user-name', 'type':"text", 'class':'validate p-l-126 col s12 bg-icon bg-no-repeat', 'placeholder':'Nombre'});
  let userEmail = $('<input/>',{'id':'user-email', 'type':'email', 'class':'validate p-l-126 col s12 bg-icon bg-no-repeat', 'placeholder':'correo@ejemplo.com'});
  let userPass = $('<input/>',{'id':'user-pass', 'type':'password', 'class':'validate p-l-126 col s12 bg-icon bg-no-repeat', 'placeholder':'Ingresa clave de 6 dígitos'})
  let formPar = $('<p/>',{'class':'center'}).html('Cuida esta clave como oro, es tu clave de acceso a Yape.');
  let btnAccount = $('<button/>',{'type':'button', 'class':'waves-effect btn', 'id':'btn-account'}).html('CREAR CUENTA');
  formContainer.append(userName, userEmail, userPass, formPar, btnAccount);
  createUserContainer.append(imgLockOne, userTitle, userPar, formContainer);
  return createUserContainer;
}
