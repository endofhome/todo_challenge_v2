describe('TODOerController', function() {
  beforeEach(module('TODOer'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TODOerController');
  }));

  it('initialises with an empty TODO list', function() {
    expect(ctrl.todoList).toEqual([]);
  });

  describe('adding tasks', function() {
    it('tasks can be added to the list', function() {
      ctrl.addTask('New task');
      expect(ctrl.todoList).toContain( 
        Object({ 
          description: 'New task', 
          completed: false
        })
      );
    });
  });
});