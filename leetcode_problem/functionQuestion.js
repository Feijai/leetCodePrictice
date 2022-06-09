const obj = {
    dev: 'bfe',
    a: function() {
      return this.dev
    },
    b() {
      return this.dev
    },
    c: () => {
      return this.dev
    },
    d: function() {
      return (() => {
        return this.dev
      })()
    },
    e: function() {
      return this.b()
    },
    f: function() {
      return this.b
    },
    g: function() {
      return this.c()
    },
    h: function() {
      return this.c
    },
    i: function() {
      return () => {
        return this.dev
      }
    }
  }
  
  console.log(obj.a()) //bfe
  console.log(obj.b()) //bfe
  console.log(obj.c())
  // 當使用箭頭函數時, this 指的是

  console.log(obj.d())
  console.log(obj.e())
  console.log(obj.f()())
  console.log(obj.g())
  console.log(obj.h()())
  console.log(obj.i()())