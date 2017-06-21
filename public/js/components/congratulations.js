'use strict';

const createCongratulations = (updatePageFunction)=>{
  let congratulations = $('<div/>',{'class':'row valign-wrapper flex-column flex-center h-100vh amber accent-3', 'id':'congratulations'});
  let imgCongr = $('<img/>',{'src':'img/icons/check.png', 'alt':'Check', 'class':'col s7 m3 m-inherit'});
  let titleGood = $('<h5/>').html('¡Bien!');
  let parGood = $('<p/>').html('Ahora puedes usar Yape.');
  congratulations.append(imgCongr, titleGood, parGood);
  return congratulations;
}
