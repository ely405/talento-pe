
'use strict';

const update = ()=>{
  render(documentRoot);
}
const render = (documentRoot)=>{
  documentRoot.empty();
  documentRoot.append(createWelcome(update));
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
