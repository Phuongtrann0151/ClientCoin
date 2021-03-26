jQuery(document).ready(function($) {
    var totalBalance = 0;
    var totalClick = 0;
    var totalLead = 0;
    $.each($(".balance"), function(index, ele) {
        totalBalance += Number($(this).text())
    });
    $.each($(".clicks"), function(index, ele) {
        totalClick += Number($(this).text())
    });
    $.each($(".leadCount"), function(index, ele) {
        totalLead += Number($(this).text())
    });
    $(".totalLead").text(totalLead)
    $(".totalClicks").text(totalClick)
    $(".totalBalance").text(totalBalance)
});