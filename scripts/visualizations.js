
var speed = 1000;

input_speed.addEventListener("input",speedCalculator);

function speedCalculator()
{
    var array_speed = input_speed.val;
    switch(parseInt(array_speed))
    {
        case 1: speed = 1;
                break;
        case 2: speed = 10;
                break;
        case 3: speed = 100;
                break;
        case 4: speed = 1000;
                break;
        case 5: speed = 10000;
                break;
    }
    delay_time  = 10000/(Math.floor(input_arr_size/10)*speed); 
}
var delay_time =10000/(Math.floor(input_arr_size/10)*speed); 
var c_delay = 0;

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/input_arr_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            input_arr.disabled=false;
            inp_gen.disabled=false;
            input_speed.disabled=false;
        }
    },c_delay+=delay_time);
}