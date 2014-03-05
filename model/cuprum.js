/**
 * Created by Konstantin on 3/3/14.
 */
$(function() {
    var Images = $("#sky div"), Timers = [];
    Images.each(function() {
        fly = function(Id,Range,Duration,Direction) {
            var Way1 = {}, Way2 = {};
            Way1[Direction] = '+='+Range;
            Way2[Direction] = '-='+Range;
            $('#'+Id).animate(Way1,Duration).animate(Way2,Duration);
        };
        var Image = $(this),
            Id = Image.attr('id'),
            Range = Image.attr('data-fly-range'),
            Duration = parseInt(Image.attr('data-fly-duration')),
            Direction = Image.attr('data-fly-direction');
        Timers[Id] = setInterval('fly("'+Id+'","'+Range+'",'+Duration+',"'+Direction+'")',Duration*2);
        fly(Id,Range,Duration,Direction);
    });
    function recFunction(arrMetall, funCaller){
        uberExec:if (arrMetall) {
            x='object';

        } else {
            x = 'array';
            continue uberExec;
        }
    }
});

function(uberexec){
    uberExec
};
