function enkrip(){
    text = document.getElementById('input1').value;
    key = Number(document.getElementById('input2').value);
    
    let messages = [];
    for (i=0;i<text.length;i++){
        let convertNum = text.charCodeAt(i);
        messages.push(convertNum);
    }
    
    let enkripsi = [];
    for (i=0;i<messages.length;i++){
        let en = (messages[i] + key)
        enkripsi.push(en)
    }
    
    let convertChar = [];
    let outputEnkrip ='';
    for (i=0;i<enkripsi.length;i++){
        let convertC = String.fromCharCode(enkripsi[i]);
        convertChar.push(convertC);
        outputEnkrip = convertChar.join('');
    }
    
    console.log(outputEnkrip);
    document.getElementById('outputEnkripsi').textContent = outputEnkrip;
    document.getElementById('input3').value = outputEnkrip;
}

function deskrip(){
    text = document.getElementById('input3').value;
    key = Number(document.getElementById('input4').value);
    
    let messages = [];
    for (i=0;i<text.length;i++){
        let convertNum = text.charCodeAt(i);
        messages.push(convertNum);
    }
    
    let deskripsi = [];
    for (i=0;i<messages.length;i++){
        let de = (messages[i] - key)
        deskripsi.push(de)
    }
    
    let convertChar = [];
    let outputDeskrip ='';
    for (i=0;i<deskripsi.length;i++){
        let converC = String.fromCharCode(deskripsi[i]);
        convertChar.push(converC);
        outputDeskrip = convertChar.join('');
    }
    
    console.log(outputDeskrip);
    document.getElementById('outputDeskripsi').textContent = outputDeskrip;
}

function reset(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("outputEnkripsi").textContent = "";
    document.getElementById("outputDeskripsi").textContent = "";
}