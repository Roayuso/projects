//check off and delete todos by clicking
$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
});
$('ul').on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent('li').fadeOut("slow", function(){
		$(this).remove();
	});
});

//create new todos
$('input[type="text"]').on("keypress", function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		if (newTodo.replace(/\s/g, '') == null || newTodo.replace(/\s/g, '') === "") {newTodo = "Learn to fill in input boxes...";}
		$(this).val("");
		$('ul').append("<li><span id='trash'><i class='fa fa-trash'></i></span> "+newTodo+"</li>");
	}
});

$('#plus').click(function(){
	$('input[type="text"]').fadeToggle('slow');
})