(function () {

	var toDo = new TodoService();
	var todos = toDo.getTodos()


	$('form').on('submit', function (e) {
		e.preventDefault();
		
		var form = this;
		var input = form.toDoInput.value

		todos.push(input)
		console.log(todos)
		toDo.saveTodos(todos)
		update()
	})


	$('.clear-tasks').on('click', function(){
		todos = [];
		update()
	})


	$('#list').on('click','.item', function () {
        var id = $(this).data('id')
        removeUserByName(id);
        update();
    })
/*ANOTHER OPTION
$('#list').on('click', 'li', function(event){
	var task = $(event.target).text();
})

*/

    function removeUserByName(id) {
        
        for (var i = 0; i < todos.length; i++) {
            var item = todos[i];
            if (i == id) {
                 todos.splice(i, 1)
            }
        }
		toDo.saveTodos(todos)
                update();
    }





	function update() {
		$('#list').empty();
		$('#toDoInput').val('');
		var total = todos.length
		for (var i = 0; i < todos.length; i++) {
			var item = todos[i]
			
			$('#list').append(`<li class="item" data-id="${i}"><h3 >${item}</h3></li>`)
		}
		$('#list').prepend(`<h4>Total Tasks = ${total}<h4>`)

	}
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage

update();


} ())
