
var input_arr = document.getElementById('a_size'),input_arr_size = input_arr.value;
var inp_gen = document.getElementById('a_generate');
var input_speed = document.getElementById('a_speed');

var buttons_algos=document.querySelectorAll(".algos button"); // give the button
console.log(buttons_algos)

var div_sizes = [];
var divs =[];
var margin_size;
var container = document.getElementById("array_container");
container.style="flex-direction:row";

//Array generation and updation
inp_gen.addEventListener("click",generate_array);   
input_arr.addEventListener("input",update_array_size);

function generate_array()
{
    container.innerHTML="";
    for(let i=0;i<input_arr_size;i++)
    {
        div_sizes[i] = Math.floor(Math.random()* 0.5*(input_arr.max -input_arr.min))+10;
        divs[i] = document.createElement("div");
        container.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/input_arr_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    input_arr_size = input_arr.value;
    generate_array();
}

window.onload = update_array_size();

for(var i=0;i<buttons_algos.length;i++)
{
    buttons_algos[i].addEventListener("click",runalgo);
}

function disableButton()
{
    for(var i=0;i<buttons_algos.length;i++)
    {
        buttons_algos[i].classList=[];
        buttons_algos[i].classList.add("butt_locked");
        buttons_algos[i].disabled = true;
        input_arr.disabled = true;
        inp_gen.disabled=true;
        input_speed.disabled=true;
    }
}
function runalgo()
{
    disableButton();
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                break;
        case "Selection":Selection_sort();
                break;
        // case "Insertion":Insertion();
        //         break;
        // case "Merge":Merge();
        //         break;
        // case "Quick":Quick();
        //         break;
        // case "Heap":Heap();
        //         break;
    }
}
