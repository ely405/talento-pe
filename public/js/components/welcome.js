'use strict';

const createWelcome = (updatePageFunction)=>{
  console.log(state.screen);
  let welcomeWrapper = $('<section/>',{'class':'row valign-wrapper flex-column space-around h-100vh'});

  let carouselContainer = $('<div/>',{'class':'col s12 m5 l6 carousel carousel-slider center m-auto', 'data-indicators':'true'});

  let carouselItem1  = $('<div/>',{'class':'carousel-item center white'});
  let img1 = $('<img/>',{'src':'img/icons/icon-people.png', 'alt':'People', 'class':'col offset-s3 s6'})
  let carouTitle1 = $('<h2/>',{'class':'col s12'}).html('Paga a tus amigos');
  let carouParagraph1 = $('<p/>',{'class':'col s12'}).html('Paga a quien quieras desde donde quieras, sin usar efectivo.');
  carouselItem1.append(img1, carouTitle1, carouParagraph1);

  let carouselItem2  = $('<div/>',{'class':'carousel-item center white'});
  let img2 = $('<img/>',{'src':'img/icons/happy-person.png', 'alt':'Happy person', 'class':'col offset-s3 s6'})
  let carouTitle2 = $('<h2/>',{'class':'col s12'}).html('Sin número de cuenta');
  let carouParagraph2 = $('<p/>',{'class':'col s12'}).html('Elige a quién pagar desde tu lista de contactos.');
  carouselItem2.append(img2, carouTitle2, carouParagraph2);

  let carouselItem3  = $('<div/>',{'class':'carousel-item center white'});
  let img3 = $('<img/>',{'src':'img/icons/group-people.png', 'alt':'Group people', 'class':'col offset-s3 s6'})
  let carouTitle3 = $('<h2/>',{'class':'col s12'}).html('Gratis y seguro');
  let carouParagraph3 = $('<p/>',{'class':'col s12'}).html('La transferencia es inmediata y gratuita de una cuenta a otra.');
  carouselItem3.append(img3, carouTitle3, carouParagraph3);
  carouselContainer.append(carouselItem1, carouselItem2, carouselItem3);

  let buttonContainer = $('<div/>',{'class':'col s10 row'});
  let btnRegister = $('<button/>',{'type':'button', 'class':'waves-effect amber darken-1 btn col s12'}).html('Regístrame');

  welcomeWrapper.append(carouselContainer, buttonContainer.append(btnRegister));

  btnRegister.click(()=>{
    state.screen = 'registerNumberScreen';
    reRender(welcomeWrapper, updatePageFunction, createRegisterNumber(), 'registerNumberScreen');
  })
  return welcomeWrapper;
}
