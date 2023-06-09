var weight = parseInt (document.getElementById (weight).value);

document.getElementById(weight-val).textContent = weight + "kg";

var height = parseInt(document.getElementById(height).value);

document.getElementById(height-val).textContent = height + "cm";

let btn = document.getElementById("btn");

btn.addEventListener("click",GET-MY-BMI);

function btn ();{
    console.log("result")
    alert("click");

}
 function btn() {
     (((weight / ((height * height)
/10000)).toFixed(2)));
 }

 function result() {
    document.getElementById("result").innerHTML = "Your BMI";
  }
