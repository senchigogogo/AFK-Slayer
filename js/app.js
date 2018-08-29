
$(document).ready(function() {
    var numClicked, dailyXP;
    var currentXP, to99XP, to120XP, to99Days, to120Days;
    
    function fillDays(xp99, xp120) {
        numClicked = $(".clicked").length;
        dailyXP = 50000*numClicked;
        to99Days = Math.ceil(xp99/dailyXP);
        to120Days = Math.ceil(xp120/dailyXP);
        to99Days=$("#daysTo99").text(to99Days);
        to120Days=$("#daysTo120").text(to120Days);
    }
    
    
    $('.unclicked').click(function() {
        $(this).toggleClass('clicked');
        fillDays(to99XP, to120XP);
    });
    
    
    
    
    
    //get the player's current xp
    $("#go-btn").click(function() {
        currentXP = document.getElementById("player-xp-input").value;
        to99XP = 13034431 - parseInt(currentXP);
        to120XP = 104273167 - parseInt(currentXP);
    });
    
    //
});
   
