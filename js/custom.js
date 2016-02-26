$('#btnGo').click(function (e)
{
	var select = $('#select').val();
	var num = $('#noofelements').val();

	var dis = "";

	if(select == "textbox") {
		for (i=0; i<num; i++) {
			dis += "<input type='text' class='form-control' placeholder= 'text'>";
		}
	} else if (select == "button") 
	{
		for (i=0; i<num; i++) 
		{
		dis += "<button class= 'btn btn-primary'>Success</button>";
		} 
	}
	$('#output').html(dis);
});
