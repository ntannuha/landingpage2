function validasi () {
    let pesan = document.getElementById("pesan").value ;
    let mail = document.getElementById("mail").value ;
    let nama = document.getElementById("saya").value;

    if (pesan!= "" && mail!="" && nama!="") {
        console.log ("pesan     : " + pesan);
        console.log ("E-mail    : " +mail);
        console.log("nama       : "+ nama);
       window.alert ("pesan anda sudah terkirim");
       window.open("index.html");
    }
    else {
        window.alert("masukkan pesan, nama dan email anda !") ;
        return False
    }
}