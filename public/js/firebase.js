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

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
//firebase.initializeApp(config);
var messagesRef = firebase.database().ref('emails');
document.getElementById('newsletterForm').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    function getInput(id){
        return document.getElementById(id).value;
    }

    function saveMessage(nome, sobrenome, email, tipo, data_hora, ip){
        var newMsgRef = messagesRef.push();
        newMsgRef.set({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            tipo: tipo,
            data_hora: data_hora,
            ip: ip
        });
    }

    var nome = getInput("nome");
    var sobrenome = getInput("sobrenome");
    var email = getInput("email");
    var email = getInput("tipo");
    var ip = 0;
    var data_hora = new Date;
    saveMessage(nome, sobrenome, email, tipo, data_hora, ip);

    document.getElementById("mensagem-sucesso").style.display = "block";
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tipo").value = "";
}
