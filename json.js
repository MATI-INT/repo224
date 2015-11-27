_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var todos = {
  list: [
    {
      name: 'Clean up',
      place: 'Home',
      completed: false
    },
    {
      name: 'Do coding',
      place: 'Office',
      completed: true
    }
  ]
};

$(document).ready(function() {
  $('.text-larger').click(function() {
    var current_size = parseInt($('body').css('font-size'), 10);
    current_size += 2;
    $('body').css('font-size', current_size + 'px');
  });

  $('.text-smaller').click(function() {
    var current_size = parseInt($('body').css('font-size'), 10);
    current_size -= 2;
    $('body').css('font-size', current_size + 'px');
  });

  var todos_block = $('#todos');

  todos_block.on('click', '.delete', function(e) {
    e.preventDefault();
    if(confirm('Are you sure?')) {
      var parent = $(this).parent();
      var index = parent.data('index');
      $.ajax({
        method: 'post',
        url: '/todos/delete/' + index,
        success: function () {
          todos.list.splice(index, 1);
          parent.remove();
        },
        error: function() {
          alert('Error');
        }
      });
    }
  });

  $.each(todos.list, function(index) {
    var temp = _.template($('#todo_template').html());
    var new_el = $(temp({
      name: this.name,
      index: index,
      place: this.place
    }));
    if (this.completed) {
      new_el.addClass('completed');
    }
    todos_block.append(new_el);
  });
});