// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-Rl01Heb8s4iYiWqGrqeDXBLHusDbM08",
    authDomain: "bilangan-cacah.firebaseapp.com",
    projectId: "bilangan-cacah",
    storageBucket: "bilangan-cacah.appspot.com",
    messagingSenderId: "583359796819",
    appId: "1:583359796819:web:72cb29c67a32b05945d8a6",
    measurementId: "G-N6TCBMGLWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const db = getDatabase();

// References
const password = document.getElementById("password");
const username = document.getElementById("nisn");
const submit = document.getElementById("login");

// Auntentifikasi
function AunthenticateUser() {
    const dbref = ref(db);

    get(child(dbref, "db_siswa/" + username.value)).then((snapshot) => {
        if (snapshot.exists()) {
            let usernamedb = snapshot.val().nisn;
            let passworddb = snapshot.val().password;
            let namadb = snapshot.val().nama;
            let kelasdb = snapshot.val().kelas;
            let sekolahdb = snapshot.val().sekolah;
            if (usernamedb == username.value && passworddb == password.value) {
                sessionStorage.setItem("nisn", usernamedb);
                sessionStorage.setItem("password", passworddb);
                sessionStorage.setItem("nama", namadb);
                sessionStorage.setItem("kelas", kelasdb);
                sessionStorage.setItem("sekolah", sekolahdb);
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil Login!',
                    showConfirButton: false,
                    Timer: 1500,
                }).then(function () {
                    window.location = "materi/pendahuluan1.html";
                });

            } else {
                sweetAlert("Oops...", "Username dan Password anda salah", "error");

            }
        } else {
            // alert('Anda belum terdaftar');
            sweetAlert("Oops...", "Akun anda Belum terdaftar", "error");

        }
    });
}


// Assign in events
submit.addEventListener("click", AunthenticateUser);