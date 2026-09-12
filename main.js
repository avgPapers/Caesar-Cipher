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
    
    // Operasi matematika dari Caesar Cipher dan disimpan ke dalam array baru
    let enkripsi = [];
    for (i=0;i<messages.length;i++){
        let en = (messages[i] + key)
        enkripsi.push(en)
    }
    
    // Mengubah kode ASCII yang sudah di enkripsi dan disimpan ke dalam variabel string
    let convertChar = [];
    let outputEnkrip ='';
    for (i=0;i<enkripsi.length;i++){
        let convertC = String.fromCharCode(enkripsi[i]);
        convertChar.push(convertC);
        outputEnkrip = convertChar.join('');
    }
    
    // Mengirim data enkripsi ke html untuk ditampilkan
    console.log(outputEnkrip);
    document.getElementById('outputEnkripsi').textContent = outputEnkrip;
    document.getElementById('input3').value = outputEnkrip;
}

function deskrip(){
    // Mengambil data dari input box 3 & 4
    text = document.getElementById('input3').value;
    key = Number(document.getElementById('input4').value);
    
    // Mengubah data karakter dari input 3 menjadi kode ASCII dan disimpan dalam array
    let messages = [];
    for (i=0;i<text.length;i++){
        let convertNum = text.charCodeAt(i);
        messages.push(convertNum);
    }
    
    // Operasi matematika dari Caesar Cipher dan disimpan ke dalam array baru
    let deskripsi = [];
    for (i=0;i<messages.length;i++){
        let de = (messages[i] - key)
        deskripsi.push(de)
    }
    
    // Mengubah kode ASCII yang sudah di enkripsi dan disimpan ke dalam variabel string
    let convertChar = [];
    let outputDeskrip ='';
    for (i=0;i<deskripsi.length;i++){
        let converC = String.fromCharCode(deskripsi[i]);
        convertChar.push(converC);
        outputDeskrip = convertChar.join('');
    }
    
    // Mengirim data enkripsi ke html untuk ditampilkan
    console.log(outputDeskrip);
    document.getElementById('outputDeskripsi').textContent = outputDeskrip;
}

function reset(){
    // Menghapus element yang ada di html
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("outputEnkripsi").textContent = "";
    document.getElementById("outputDeskripsi").textContent = "";
}