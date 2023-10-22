const user = {
  id: 1,
  admin: false,
  becomeAdmin: function() {
    this.admin = true
  }
}

//<button onClick="myClickHundler">Click Me!</button>
// В обработчиках событий this неизвестный, его надо конкретизировать 
function myClickHundler (this: HTMLButtonElement,e: Event) {
  this.disabled = true
}