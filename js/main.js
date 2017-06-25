$(function() {
	$('.button__order').click(function() {
		$('#application input[type="submit"]').val('Запропонувати проект');
	});

	$('.callback__button').click(function() {
		$('#application input[type="submit"]').val('Передзвоніть мені');
	});

	// Phone mask for phoneCustomer field
 	$("#phoneCustomer").mask('+380 ' + "(99) 999-9999");
 	$("#phoneCustomer").on("blur", function() {
 	    var last = $(this).val().substr($(this).val().indexOf("-") + 1);

 	    if (last.length == 5) {
 	        var move = $(this).val().substr($(this).val().indexOf("-") + 1, 1);
 	        var lastfour = last.substr(1, 4);
 	        var first = $(this).val().substr(0, 9);
 	        $(this).val(first + move + '-' + lastfour);
 	    }
 	});


	// Sent data through Ajax into PHP
	$('#application').submit(function(e) {
		e.preventDefault();

		// Input Data
		var	inputData = {
			name: $('#nameCustomer').val(),
			email: $('#emailCustomer').val(),
			phone: $('#phoneCustomer').val()
		};

		$.ajax({
			type: 'POST',
			url: '../send.php',
			data: inputData,
			success: function() {
				$.fancybox.close();
				swal(
                    'Дякуємо!',
                    "Наш менеджер зв'яжеться з Вами як найшвидше!",
                    'success'
				);

				// Clear the form fields
				$('#application')[0].reset();
			}
		});
	});
});