function calculate(){

    var monthlySalary = document.getElementById("monthlySal").value
    var leaves = document.getElementById("leave").value;
    var days= document.getElementById("days").value;
    var halfday = document.getElementById("half").value;
    if(halfday==undefined || monthlySalary==undefined ||monthlySalary<=0 || leaves==undefined || leaves<0 ||days>31 || halfday<0){
        alert("Enter all fields with valid values");
        return
    }
    else{
        // var salPerDay = monthlySalary / days;
        // var minus = leaves * salPerDay;
        // var pay = monthlySalary - minus;

        var salPerDay = monthlySalary/days;
        // var halfdaysal = salPerDay/2;
        var halfd = halfday * 0.5;
        var totWorkingDays = (days - leaves) - halfd
        var pay = totWorkingDays * salPerDay
        document.getElementById("finalSal").innerHTML=" <mark>"+pay+"</mark>";
    }
}
