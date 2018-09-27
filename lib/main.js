const DOMNodeCollection = require ('./dom_node_collection.js');


window.$l = (el) => {
  
  switch (typeof el) {
    case "string":
      const nodeList = document.querySelectorAll(el);
      return new DOMNodeCollection(Array.from(nodeList));
    case "object":
      if (el instanceof HTMLElement) {
        return new DomNodeCollection(Array.from(el));
      }
  }
};

