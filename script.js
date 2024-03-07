const colorSelect = document.getElementById('colorSelect');
const removeBtn = document.querySelector("input");

removeBtn.addEventListener("click", avojao)

function avojao(e){
    e.preventDefault();
    const options = colorSelect.options;

    let selectedIndex = -1;
    for(let i=0; i<options.length; i++){
        if(options[i].selected){
            selectedIndex = i;
            break;
        }

    }

    if(selectedIndex !==-1){
       colorSelect.remove(selectedIndex);
    }

}

