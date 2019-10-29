var config = {
    apiKey: "AIzaSyDVd0b-JNdYJQ4K4qeSbaXQ3cy16TM4rXU",
    authDomain: "super-lucro.firebaseapp.com",
    databaseURL: "https://super-lucro.firebaseio.com",
    projectId: "super-lucro",
    storageBucket: "super-lucro.appspot.com",
    messagingSenderId: "514538753685",
    appId: "1:514538753685:web:c1112dd80df3dccc3cd59c",
    measurementId: "G-DXBX8JH18N"
};

firebase.initializeApp(config);
var messagesRef = firebase.database().ref('emails');

document.getElementById('newsletterForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var ip;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", 'http://meuip.com/api/meuip.php');
    xmlhttp.send();
    xmlhttp.onload = function(e) {
        ip = xmlhttp.response;
    }

    var nome = getInput("inputNome");
    var sobrenome = getInput("inputSobrenome");
    var email = getInput("inputEmail");
    var data_hora = today.format('YYYY-MM-DD hh:mm:ss');
    saveMessage(nome, sobrenome, email, data_hora, ip);
    
    console.log("submitForm: "+nome+"-"+sobrenome+"-"+email+"-"+data_hora+"-"+ip);
}

function getInput(id){
    return document.getElementById(id).values;
}

function saveMessage(nome, sobrenome, email, data_hora, ip){
    var newMsgRef = messagesRef.push();
    newMsgRef.set({
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        data_hora: data_hora,
        ip: ip
    });
}