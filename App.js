function ButtonClick(Event)
{
    document.querySelector(".input").value+=Event;
}

function Delete()
{
    let Screen_Value = document.querySelector(".input").value;
    document.querySelector(".input").value =Screen_Value.substring(0,Screen_Value.length-1);
}

function AllClear()
{
    document.querySelector(".input").value =null;
    document.querySelector(".result").value =null;
}

function Equal()
{
    let Screen_Value = document.querySelector(".input").value;
    let res = eval(Screen_Value);
    document.querySelector(".result").value = res;
}