var countDownTP = new Date("Jun 21, 2021 22:09:00").getTime();
var countDownJurnal = new Date("Jun 21, 2020 22:09:00").getTime();
var tpTime = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownTP - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdownTP").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(tpTime);
        document.getElementById("countdownTP").innerHTML = "TIMED OUT";
    }
}, 1000);


var jurnalTime = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownJurnal - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdownJurnal").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(jurnalTime);
        document.getElementById("countdownJurnal").innerHTML = "TIMED OUT";
    }
}, 1000);

$('#submitFIle').on('change',function(){
    //get the file name
    var fileName = document.getElementById("submitFIle").files[0].name;
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
})