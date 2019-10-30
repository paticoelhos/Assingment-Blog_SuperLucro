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

var messagesRef = firebase.database().ref('emails');
document.getElementById('newsletterForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    function getIp(callback)
    {
        function response(s) {
            callback(window.userip);

            s.onload = s.onerror = null;
            document.body.removeChild(s);
        }

        function trigger() {
            window.userip = false;

            var s = document.createElement("script");
            s.async = true;
            s.onload = function() {
                response(s);
            };
            s.onerror = function() {
                response(s);
            };

            s.src = "https://l2.io/ip.js?var=userip";
            document.body.appendChild(s);
        }

        if (/^(interactive|complete)$/i.test(document.readyState)) {
            trigger();
        } else {
            document.addEventListener('DOMContentLoaded', trigger);
        }
    }

    function getDate(){
        var current_datetime = new Date();
        var dataFormat = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
        return dataFormat;
     }

    var formNome = getInput("nome");
    var formSobrenome = getInput("sobrenome");
    var formEmail = getInput("email");
    var formTipo = getInput("tipo");
    var dataHora = getDate();

    var getUserIP;
    getIp(function (ip) {
        getUserIP = ip;
        saveMessage(formNome, formSobrenome, formEmail, formTipo, dataHora, getUserIP);  
    });

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
            ip: ip,
        });
    }

    document.getElementById("mensagem-sucesso").style.display = "block";
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tipo").value = "";
}
