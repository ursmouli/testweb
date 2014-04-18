$(document).ready(function() {
	$('.sprite').attr('unselectable', 'on');
	$('#bold').click(function() { document.execCommand('bold', false, null); });
	$('#italic').click(function() { document.execCommand('italic', false, null); });
	$('#underline').click(function() { document.execCommand('underline', false, null); });
	$('#strikethrough').click(function() { document.execCommand('strikethrough', false, null); });

	$('#bgcolor').spectrum({
		change: function(color) {
		    color.toHexString(); // #ff0000
		    document.execCommand('backcolor', false, color.toHexString());
		}
	});
	$('#txtcolor').spectrum({
		change: function(color) {
		    color.toHexString(); // #ff0000
		    document.execCommand('forecolor', false, color.toHexString());
		}
	});

	$('#fontSize').change(function() {
		var fSize = $(this).attr('value');
		if (fSize != 0) {
			document.execCommand('fontsize', false, fSize);
		}
		$(this).attr('value', '0')
	});
	$('#fontFamily').change(function() {
		var fSize = $(this).attr('value');
		if (fSize != 0) {
			document.execCommand('fontname', false, fSize);
		}
		$(this).attr('value', '0')
	});
});