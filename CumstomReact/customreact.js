// function customRender(ReactElement,mainContaier){
//   const domElement=document.createElement(ReactElement.type)
//   domElement.innerHTML=ReactElement.childern
//   domElement.setAttribute('href',ReactElement.props.href)
//   domElement.setAttribute('target',ReactElement.props.target)
//   mainContaier.appendChild(domElement)
// }
function customRender(ReactElement,mainContaier){
  const domElement=document.createElement(ReactElement.type);
  domElement.innerHTML=ReactElement.childern;
  for(let prop in ReactElement.props){
    if(prop=='childern') continue;
    domElement.setAttribute(prop,ReactElement.props[prop])
  }
  mainContaier.appendChild(domElement)
}
const ReactElement={
  type:'a',
  props:{
    href:"www.google.com",
    target:'_blank'
  },
  childern:"click me"
}
const mainContaier=document.querySelector('#root')


customRender(ReactElement,mainContaier)

