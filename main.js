(() => {
  "use strict";
  const t = class {
    constructor(t, e, o) {
      (this.name = t),
        (this.priority = e),
        (this.dueDate = o ? new Date(o) : new Date()),
        (this.todo = []);
    }
    addTodo(t) {
      this.todo.push(t);
    }
  };
  (function () {
    let e = [];
    return {
      addProject: function (o, s, r) {
        let c = new t(o, s, r);
        e.push(c);
      },
      projects: e,
    };
  })().addProject("best world project", 1, "2011-10-1");
})();
//# sourceMappingURL=main.js.map
