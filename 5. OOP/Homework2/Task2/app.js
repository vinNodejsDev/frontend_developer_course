// Реализовать конструктор и методы в ES6 синтаксисе:

// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }

// Component.prototype.setText = function (text) { 
//   this.node.textContent = text;
// };

class Component {
    constructor(tagName='div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }

    setText(text) {
        this.node.textContent = text;
    }
}