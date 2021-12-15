SetupJobs = function() {
    $(".jobs-list").html("");
    $(".no2-jobs-list").html("");
    $(".no3-jobs-list").html("");
    $(".no4-jobs-list").html("");
    $(".no5-jobs-list").html("");
    var element = '<div class="no-job-list"><div class="no-jobs">Trucking<p>Deliver boxes to stores.</div></div>'
    var element2 = '<div class="no2-job-list"><div class="no2-jobs">Taxi Driver<p>Helping people go places.</div></div>'
    var element3 = '<div class="no3-job-list"><div class="no3-jobs">Towing<p>Tow vehicles around.</div></div>'
    var element4 = '<div class="no4-job-list"><div class="no4-jobs">Freelance Journalist<p>Write your own stories!.</div></div>'
    var element5 = '<div class="no5-job-list"><div class="no5-jobs">Sanitation<p>Clean up the streets.</div></div>'
    $(".jobs-list").append(element);
    $(".no2-jobs-list").append(element2);
    $(".no3-jobs-list").append(element3);
    $(".no4-jobs-list").append(element4);
    $(".no5-jobs-list").append(element5);
}

$(document).on('click', '.no-job-list', function(e){
    $.post('https://qb-phone/ApplyJob1');
    QB.Phone.Notifications.Add("fas fa-university", "Job Centre", "You have got the job!<br/>Check your GPS", "#7e0082", 10000);
});

$(document).on('click', '.no2-job-list', function(e){
    $.post('https://qb-phone/ApplyJob2');
    QB.Phone.Notifications.Add("fas fa-university", "Job Centre", "You have got the job!<br/>Check your GPS", "#7e0082", 10000);
});

$(document).on('click', '.no3-job-list', function(e){
    $.post('https://qb-phone/ApplyJob3');
    QB.Phone.Notifications.Add("fas fa-university", "Job Centre", "You have got the job!<br/>Check your GPS", "#7e0082", 10000);
});

$(document).on('click', '.no4-job-list', function(e){
    $.post('https://qb-phone/ApplyJob4');
    QB.Phone.Notifications.Add("fas fa-university", "Job Centre", "You have got the job!<br/>Check your GPS", "#7e0082", 10000);
});

$(document).on('click', '.no5-job-list', function(e){
    $.post('https://qb-phone/ApplyJob5');
    QB.Phone.Notifications.Add("fas fa-university", "Job Centre", "You have got the job!<br/>Check your GPS", "#7e0082", 10000);
});