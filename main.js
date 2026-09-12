function enkrip(){
    // Mengambil data dari input box 1 & 2
    text = document.getElementById('input1').value;
    key = Number(document.getElementById('input2').value);
    
    // Mengubah data karakter dari input 1 menjadi kode ASCII dan disimpan dalam array
    let messages = [];
    for (i=0;i<text.length;i++){
        let convertNum = text.charCodeAt(i);
        messages.push(convertNum);
    }

    // Validasi input key agar tidak melebihi 26 & operasi matematika Caesar Cipher
    for (i=0;i<messages.length;i++){
        if (messages[i] >= 65 && messages[i] <= 90){
            messages[i] = ((messages[i] - 65 + key) % 26) + 65;
        }else if (messages[i] >= 97 && messages[i] <= 122){
            messages[i] = ((messages[i] - 97 + key) % 26) + 97;
        }else{
            messages[i] = messages[i];
        }
    }

    // Mengubah kode ASCII yang sudah di enkripsi dan disimpan ke dalam variabel string
    let convertChar = [];
    let outputEnkrip ='';
    for (i=0;i<messages.length;i++){
        let convertC = String.fromCharCode(messages[i]);
        convertChar.push(convertC);
        outputEnkrip = convertChar.join('');
    }
    
    // Mengirim data enkripsi ke html untuk ditampilkan
    console.log(outputEnkrip);
    document.getElementById('outputEnkripsi').value = outputEnkrip;
}

function deskrip(){
    // Mengambil data dari input box 3 & 4
    text = document.getElementById('outputEnkripsi').value;
    key = Number(document.getElementById('input2').value) % 26;
    
    // Mengubah data karakter dari input 3 menjadi kode ASCII dan disimpan dalam array
    let messages = [];
    for (i=0;i<text.length;i++){
        let convertNum = text.charCodeAt(i);
        messages.push(convertNum);
    }
    
    // Validasi input key agar tidak melebihi 26 & operasi matematika Caesar Cipher dibalikkan
    for (i=0;i<messages.length;i++){
        if (messages[i] >= 65 && messages[i] <= 90){
            messages[i] = ((messages[i] - 65 - key + 26) % 26) + 65;
        }else if (messages[i] >= 97 && messages[i] <= 122){
            messages[i] = ((messages[i] - 97 - key + 26) % 26) + 97;
        }else{
            messages[i] = messages[i];
        }
    }
    
    // Mengubah kode ASCII yang sudah di deskripsi dan disimpan ke dalam variabel string
    let convertChar = [];
    let outputDeskrip ='';
    for (i=0;i<messages.length;i++){
        let converC = String.fromCharCode(messages[i]);
        convertChar.push(converC);
        outputDeskrip = convertChar.join('');
    }
    
    // Mengirim data enkripsi ke html untuk ditampilkan
    console.log(outputDeskrip);
    document.getElementById('outputDeskripsi').value = outputDeskrip;
}

function reset(){
    // Menghapus element yang ada di html
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("outputEnkripsi").value = "";
    document.getElementById("outputDeskripsi").value = "";
}