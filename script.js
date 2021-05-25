function compute()
{
    p = document.getElementById("principal").value;
    
}
     


 function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function updateResult() 
{
    var principal = document.getElementById("principal").value;
 var rate = document.getElementById("rate").value;
 var years = document.getElementById("years").value;
 var interest = principal * years * rate /100;
 var year = new Date().getFullYear()+parseInt(years);
 if (principal<=0)
    {
         document.getElementById("result").innerText="Value can be only positive numbers ";
    }

else{
    document.getElementById("result").innerText="If you deposit "+principal+"\n at an interest rate of "+rate+"\n You will receive an amount of  "+ interest+"\n in the year "+year;
}
document.getElementById("Ok").style.display="block";
}

function Clearx()
{
        document.getElementById("result").innerText="";
}
