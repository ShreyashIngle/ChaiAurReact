function customRender(reactElement,container){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(let key in reactElement.props){
        domElement.setAttribute(key,reactElement.props[key])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com/',
        target:'_blank',
    },
    children:'click me to visit react'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)