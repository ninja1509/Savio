function calculate(){

    var monthlySalary = document.getElementById("monthlySal").value
    var leaves = document.getElementById("leave").value;
    var days= document.getElementById("days").value;
    
    if(monthlySalary==undefined ||monthlySalary<=0 || leaves==undefined || leaves<0 ||days>31){
        alert("Enter all fields with valid values");
        return
    }
    else{
        var salPerDay = monthlySalary / days;
        var minus = leaves * salPerDay;
        var pay = monthlySalary - minus;

        document.getElementById("finalSal").innerHTML=" <mark>"+pay+"</mark>";
    }
}
