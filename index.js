var options = {
  strings: ['a Programer', 'a Mechatronic Maintenance Technician', 'a Mechanical Engineering Student'],
  typeSpeed: 100,
  backspeed: 100,
  loop: true
};

var typed = new Typed('.typing', options);
let contact_element = document.getElementById("contact_box");
let btn_change = document.getElementById("button_change");
let hidden = true;


function show(){
  if (hidden){
    contact_element.style.display = "grid";
    btn_change.style.color = "#01132d";
    btn_change.style.background = "rgba(253, 189, 49)";
    hidden = false ;
  }else{
    contact_element.style.display = "none";
    btn_change.style.color = "#fff";
    btn_change.style.background = "transparent";
    hidden = true;
  }
}