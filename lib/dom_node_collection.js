class DOMNodeCollection {
  constructor(nodes){
    this.nodes = nodes;
  }
  
  html(string){
    if (string === undefined) return this.nodes[0].innerHTML;
    
    for (var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].innerHTML = string;
    }
  }
  
  empty(){
    this.html('');
  }
  
  append(...args){
    for (var i = 0; i < this.nodes.length; i++) {
      for (var j = 0; j < args.length; j++) {
        this.nodes[i].innerHTML += args[j];
      }
    }
  }
  
  attr(attrName, attrValue){
    for (var i = 0; i < this.nodes.length; i++) {
      if (attrValue === undefined) { 
        return this.nodes[i].className;
      } else {
        this.nodes[i].className = attrValue;
        return this.nodes[i];
      }
    }
  }
  
  addClass(className) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].className === "") {
        this.nodes[i].className = className;
      } else {
        this.nodes[i].className += (' ' + className);
        return this.nodes[i];
      }
    }
  }
  
  removeClass(removeName) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (removeName === undefined) {
        this.nodes[i].className = '';
        return this.nodes[i];
      } else {
        let classNameStr = this.nodes[i].className;
        const classNameArr = classNameStr.split(' ');
        classNameArr.splice(classNameArr.indexOf(removeName), 1);
        classNameStr = classNameArr.join(' ');
        this.nodes[i].className = classNameStr;
        return this.nodes[i];
      }
    }
  }
  
  children() {
    for (var i = 0; i < this.nodes.length; i++) {
      return new DOMNodeCollection(this.nodes[i].children);
    }
  }
  
  parent() {
    for (var i = 0; i < this.nodes.length; i++) {
      return new DOMNodeCollection(this.nodes[i].parentNode);
    }
  }
  
  find(el) {
    for (var i = 0; i < this.nodes.length; i++) {
      return new DOMNodeCollection(this.nodes[i].querySelectorAll(el));
    }
  }
  
  remove() {
    for (var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].innerHTML = "";
    }
  }
  
  on(eventType, callback){
    for (var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].addEventListener(eventType, callback);
      const eventKey = `jqliteEvents-${eventType}`;
      if (this.nodes[i][eventKey] === undefined) {
        this.nodes[i][eventKey] = callback;
      }
    }
  }
  
  off(eventType) {
    for (var i = 0; i < this.nodes.length; i++) {
      const eventKey = `jqliteEvents-${eventType}`;
      const callback = this.nodes[i][eventKey];
      // debugger;
      console.log(callback);
      this.nodes[i].removeEventListener(eventType, callback);
      // const eventKey = `jqliteEvents-${eventType}`;
      // this.nodes[i][eventKey] = undefined;
    }
  }
  
  
}



module.exports = DOMNodeCollection;
