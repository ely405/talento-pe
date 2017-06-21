'use strict';

const update = ()=>{
  render(documentRoot);
}

const render = (documentRoot)=>{
  documentRoot.empty();
  let wrapper = $('<section/>');
  documentRoot.append(wrapper.append(createWelcome(update, wrapper)));
}

const reRender = (resultContainer, update, screenToAppend)=>{
  resultContainer.empty();
  resultContainer.append(screenToAppend);
}

const state={
  screen : null,
  btnCheckTerms : false
}

const documentLoad = ()=>{
  state.screen = 'welcome';
  let rootToLoad = $('#root');
  render(rootToLoad);
}

$(document).ready(function(){
  documentLoad();
  $('.carousel').carousel();
});
