'use strict';

const update = ()=>{
  render(documentRoot);
}
const render = (documentRoot)=>{
  documentRoot.empty();
  const wrapper = $('<div/>', {'class':'wrapper'});

  // wrapper.append(createHeader(update), createSelect(update));
  // documentRoot.append(wrapper);
}

const state={
  screen : null,
  btnCheckTerms : false
}

const documentLoad = ()=>{
  state.screen = 'welcome';
  let rootToLoad = $('.root');
  render(rootToLoad);
}

$(documentLoad);
