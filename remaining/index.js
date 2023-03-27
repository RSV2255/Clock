function nogreet() {
    document.getElementById("msg").setAttribute("style", "display : none")
}
function dateAndTime() {
    var date = new Date();
    var hr = date.getHours();
    var mn = date.getMinutes();
    var sc  = date.getSeconds();
    var dd = date.getDate();
    var mm = date.getMonth();
    var yy = date.getFullYear();
    var day = date.getDay();
    var am_pm = "AM";
    var min = 0;
    var sec = 0;
    if(hr >= 12) {
        am_pm = "PM";
        if (hr >= 13) {
            hr-=12

        }
    }
    if(mn >= 0 && mn <= 9) {
        min = "0"+mn;
    }
    else
    {
        min = mn;
    }
    if(sc >= 0 && sc <= 9) {
        sec = "0"+sc;
    }
    else
    {
        sec = sc;
    }
    switch(mm)
    {
        case 0:
            mm = "Jan";
            break;
        case 1:
            mm = "Feb";
            break;
        case 2:
            mm = "Mar";
            break;
        case 3:
            mm = "Apr";
            break;
        case 4:
            mm = "May";
            break;
        case 5:
            mm = "Jun";
            break;
        case 6:
            mm = "Jul";
            break;
        case 7:
            mm = "Aug";
            break;
        case 8:
            mm = "Sep";
            break;
        case 9:
            mm = "Oct";
            break;
        case 10:
            mm = "Nov";
            break;
        case 11:
            mm = "Dec";
            break;
    }
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    var totalTime = hr+":"+min+" "+am_pm;
    document.getElementById("Time").innerHTML = totalTime;
    var totalDate = dd+"/"+mm+"/"+yy;
    document.getElementById("Date").innerHTML=totalDate;
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=sec;
    var update = setTimeout(function(){dateAndTime()},1000);
}

function greet() {
    var date = new Date();
    var hr = date.getHours();
    if(hr >= 6 && hr < 12)
    {
        document.getElementById("grt").innerHTML="Good Morning";
    }
    else if(hr>= 12 && hr < 15)
    {
        document.getElementById("grt").innerHTML="Good Afternoon";
    }
    else if(hr>= 15 && hr < 19)
    {
        document.getElementById("grt").innerHTML="Good Evening";
    }
    else
    {
        document.getElementById("grt").innerHTML="Good Night";
    }
    dateAndTime();
}


var close = setTimeout(nogreet, 5000);
