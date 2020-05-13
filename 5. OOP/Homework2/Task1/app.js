// Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
//   }
  
//   Пример вызова:
  
//   const comp = new Component('span');
  
class Component {
    constructor(tagName='div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}

const div = new Component();