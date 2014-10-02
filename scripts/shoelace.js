// shoelace.js v.0.1
// Copyright 2014
// Author: John Petroviak

$(document).ready(function ()
{
	// Back to Top
    $(window).scroll(function ()
	{
        if ($(this).scrollTop() > 200)
		{
            $('.backtotop').fadeIn(200);
        }
        else
		{
            $('.backtotop').fadeOut(200);
        }
    });
    
    $('.backtotop').on('click', function ()
	{
        $('html, body').animate({ scrollTop: 0 }, 300);
        return false;
    });
});