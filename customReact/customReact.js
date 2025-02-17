function customRender(container, mainContainer){
    // const domElement = document.createElement(container.type);
    // domElement.innerHTML = container.children;
    // domElement.setAttribute('href', container.props.href);
    // domElement.setAttribute('target', container.props.target);

    // mainContainer.appendChild(domElement);

    const domElement = document.createElement(container.type);
    domElement.innerHTML = container.children;

    for (const prop in container.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, container.props[prop]);
    }
    mainContainer.appendChild(domElement);
}

const container = {
    type : 'a',
    props : {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(container, mainContainer);