document.getElementById("a").addEventListener("click",PV1);

function PV1(){
    var e=document.getElementById("e").value;
    var u=document.getElementById("u").value; // .value is for value of an input
    if(u=="" && e==""){
        alert("Both fields cannot be empty");
    }
    else{
        // here we are going to pass the information to the python code
        $.ajax({
            type:"POST",
            url:"http://localhost:5000/PV1", 
            data:JSON.stringify({ epsilon: e, phase: u }),
            success:onsuccess,
            dataType:"json",
            contentType:"application/json"
        });
        
    }
    function onsuccess(res){
        document.getElementById("losslessAnswer").innerHTML = res.fancy + " " + res.value// HTML container res --> (div)
        document.getElementById(res.variable).value= res.value 
        }
}
