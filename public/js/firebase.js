'use strict';

const form = document.querySelector('.form-inline');

const inputNome = form.querySelector('#inputNome');
const inputSobrenome = form.querySelector('#inputSobrenome');
const inputEmail = form.querySelector('#inputEmail');

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


    function firebasePush(inputEmail) {


        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail inputEmail.value
            }
        );

    }

    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            return alert('Deu bom!');
        })
    }