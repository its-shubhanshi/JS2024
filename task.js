"use strict";

for (let year = 1990; year <= 2024; year++) {
    document.querySelector(".year").innerHTML += `<option>${year}</option>`;
    
for (let month = 1; month <= 12; month++) {
    document.querySelector(
        ".month"
      ).innerHTML += `<option>${month}</option>`;
    
    if(month==4|| month==6|| month==9|| month==11){
        for(let date=1; date<=30; date++){
            document.querySelector(".date").innerHTML+=`<option>${date}</option>`
        }
    }
    else if(month==2){
        if (year % 400 == 0 || year % 4 == 0 || year % 100 != 0){
            for(let date=1; date<=28; date++){
                document.querySelector(".date").innerHTML+=`<option>${date}</option>`
            }
        }
    } 

}
    
}