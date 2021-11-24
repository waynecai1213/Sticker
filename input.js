
let checkedNum;
let whyTags = document.getElementById("whyTags").getElementsByTagName('input');
let whyLabels = document.getElementById("whyTags").getElementsByTagName('label');

for (i = 0; i < whyTags.length; i++) {
    whyTags[i].addEventListener("input", updateSticker);
}

let whyTxt='';
let updatePalette;

function updateSticker(){
    
    console.log(whyTags);
    eyeDownTxt='';
    updatePalette=[];
    for (i = 0; i < whyTags.length; i++) {
        if (whyTags[i].checked) {
            // whyTxt = whyTxt +' * '+ whyTags[i].value;
            eyeDownTxt = eyeDownTxt+' * '+whyLabels[i].innerHTML  ;
            console.log(palette[whyTags[i].value]);
            updatePalette.push(palette[whyTags[i].value]);
            document.getElementById(`checkbox${i+1}L`).style.backgroundColor=palette[whyTags[i].value];

            
        }else{
            document.getElementById(`checkbox${i+1}L`).style.backgroundColor= 'rgba(255, 255, 255, .9)';
        }

      }

      eyeDown.getElementsByTagName('textPath')[0].innerHTML = eyeDownTxt.toUpperCase()+' * ';
      
      console.log(eyeDownTxt);

    drawEyeBg();
    drawEye();

    drawColor(updatePalette,updatePalette.length);
    
    draw();

}