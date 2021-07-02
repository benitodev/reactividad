const Component = (function () {
  const Constructor = function(options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  //Funciones prototipicas (fuera del Constructor asi no deriva cada objeto cada metodo)
  Constructor.prototype.render = function () {
    const $el = document.querySelector(this.el)
  if (!$el) return;
    $el.innerHTML = this.template(this.data)


  }

  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
        
      }
    }
    this.render();
  };

  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data))
  }
  return Constructor;
})();