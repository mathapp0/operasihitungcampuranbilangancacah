let userlink = document.getElementById('namalihat');
// let signoutlink = document.getElementById('signoutlink');
let namas = sessionStorage.getItem('nama');
var currentUser = null;

// Function;
function getName() {
    if (namas == null) {
        Swal.fire({
            icon: 'info',
            title: 'Silahkan Login Terlebih Dahulu',
        }).then(() => {
            window.location = '../index.html';
        });
    } else {
        userlink.innerText = namas;
    }
}

getName();

function logout() {
    Swal.fire({
        title: 'Apakah Anda yakin ingin keluar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Keluar Akun!',
    }).then((result) => {
        if ((result.isConfirmed)) {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Keluar',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                window.location = '../index.html';
                sessionStorage.removeItem('nama');
                sessionStorage.removeItem('nis');
            });
        }
    });
}

// Mathjax
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)'], ['#', '#']]
    },
    svg: {
        fontCache: 'global'
    }
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    document.head.appendChild(script);
})();

function stopVideo(y) {
    const videoHide = document.getElementById(y);
    videoHide.hidden = false
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



function page12() {
    document.getElementById("btnkembali").classList.add('disabled');
    document.getElementById("btnlanjut").classList.remove('disabled');
    document.getElementById("btnlanjut").hidden = false;
    document.getElementById("page1").hidden = false;
    document.getElementById("page2").hidden = true;
    document.getElementById("lanjut").setAttribute("onClick", "javascript: page22();");
}

function page22() {
    document.getElementById("btnkembali").classList.remove('disabled');
    document.getElementById("btnlanjut").classList.add('disabled');
    document.getElementById("btnlanjut").hidden = true;
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").hidden = false;
    document.getElementById("kembali").setAttribute("onClick", "javascript: page12();");
    document.getElementById("btnmaterilanjut").hidden = false;
}

function page1() {
    document.getElementById("btnkembali").classList.add('disabled');
    document.getElementById("btnlanjut").classList.remove('disabled');
    document.getElementById("page1").hidden = false;
    document.getElementById("page2").hidden = true;
    document.getElementById("page3").hidden = true;
    document.getElementById("lanjut").setAttribute("onClick", "javascript: page2();");
}

function page2() {
    document.getElementById("btnkembali").classList.remove('disabled');
    document.getElementById("btnlanjut").classList.remove('disabled');
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").hidden = false;
    document.getElementById("page3").hidden = true;
    document.getElementById("kembali").setAttribute("onClick", "javascript: page1();");
    document.getElementById("lanjut").setAttribute("onClick", "javascript: page3();");
}

function page3() {
    document.getElementById("btnkembali").classList.remove('disabled');
    document.getElementById("btnlanjut").classList.add('disabled');
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").hidden = true;
    document.getElementById("page3").hidden = false;
    document.getElementById("kembali").setAttribute("onClick", "javascript: page2();");
    document.getElementById("btnmaterilanjut").hidden = false;
}

//latihan materi 1

function benar1() {
    let soalmuncul1 = document.getElementById('soalmuncul1');
    soalmuncul1.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option1 = document.getElementById('option1');
        option1.hidden = true;
    });

}

function salah1(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar12() {
    let soalmuncul1 = document.getElementById('soalmuncul2');
    soalmuncul1.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option12 = document.getElementById('option12');
        option12.hidden = true;
    });

}

function salah12(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

let soal1_1 = document.getElementById('soal1_1');
let soal1_2 = document.getElementById('soal1_2');
let soal1_3 = document.getElementById('soal1_3');
let soal1_4 = document.getElementById('soal1_4');
let soal1_5 = document.getElementById('soal1_5');
let soal1_6 = document.getElementById('soal1_6');

function ceksoal1_1() {
    if ((soal1_1.value == '') || (soal1_2.value == '') || (soal1_3.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal1_1.value.toLowerCase() == 210) {
            soal1_1.classList.add('warna-success');
            soal1_1.disabled = true;
        } else {
            soal1_1.classList.add('warna-danger');
        }

        if (soal1_2.value.toLowerCase() == 10) {
            soal1_2.classList.add('warna-success');
            soal1_2.disabled = true;
        } else {
            soal1_2.classList.add('warna-danger');
        }

        if (soal1_3.value.toLowerCase() == 21) {
            soal1_3.classList.add('warna-success');
            soal1_3.disabled = true;
        } else {
            soal1_3.classList.add('warna-danger');
        }

        if ((soal1_1.value.toLowerCase() == 210) && (soal1_2.value.toLowerCase() == 10) && (soal1_3.value.toLowerCase() == 21)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                
                document.getElementById('btnjawab1').hidden = true;
                document.getElementById('option12').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal1_2() {
    if ((soal1_4.value == '') || (soal1_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal1_4.value.toLowerCase() == 200) {
            soal1_4.classList.add('warna-success');
            soal1_4.disabled = true;
        } else {
            soal1_4.classList.add('warna-danger');
        }

        if (soal1_5.value.toLowerCase() == 21) {
            soal1_5.classList.add('warna-success');
            soal1_5.disabled = true;
        } else {
            soal1_5.classList.add('warna-danger');
        }

        if ((soal1_4.value.toLowerCase() == 200) && (soal1_5.value.toLowerCase() == 21)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul3').hidden = false;
                document.getElementById('btnjawab2').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal1_3() {
    if ((soal1_6.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal1_6.value.toLowerCase() == 221) {
            soal1_6.classList.add('warna-success');
            soal1_6.disabled = true;
        } else {
            soal1_6.classList.add('warna-danger');
        }


        if (soal1_6.value.toLowerCase() == 221) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut latihan berikutnya',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soal2').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function benar2() {
    let soalmuncul2_1 = document.getElementById('soalmuncul2_1');
    soalmuncul2_1.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option2 = document.getElementById('option2');
        option2.hidden = true;
    });

}

function salah2(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar22() {
    let soalmuncul2_2 = document.getElementById('soalmuncul2_2');
    soalmuncul2_2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option22 = document.getElementById('option22');
        option22.hidden = true;
    });

}

function salah22(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}


let soal2_1 = document.getElementById('soal2_1');
let soal2_2 = document.getElementById('soal2_2');
let soal2_3 = document.getElementById('soal2_3');
let soal2_4 = document.getElementById('soal2_4');
let soal2_5 = document.getElementById('soal2_5');
let soal2_6 = document.getElementById('soal2_6');

function ceksoal2_1() {
    if ((soal2_1.value == '') || (soal2_2.value == '') || (soal2_3.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal2_1.value.toLowerCase() == 21) {
            soal2_1.classList.add('warna-success');
            soal2_1.disabled = true;
        } else {
            soal2_1.classList.add('warna-danger');
        }

        if (soal2_2.value.toLowerCase() == 230) {
            soal2_2.classList.add('warna-success');
            soal2_2.disabled = true;
        } else {
            soal2_2.classList.add('warna-danger');
        }

        if (soal2_3.value.toLowerCase() == 12) {
            soal2_3.classList.add('warna-success');
            soal2_3.disabled = true;
        } else {
            soal2_3.classList.add('warna-danger');
        }

        if ((soal2_1.value.toLowerCase() == 21) && (soal2_2.value.toLowerCase() == 230) && (soal2_3.value.toLowerCase() == 12)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab1').hidden = true;
                document.getElementById('option22').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal2_2() {
    if ((soal2_4.value == '') || (soal2_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal2_4.value.toLowerCase() == 251) {
            soal2_4.classList.add('warna-success');
            soal2_4.disabled = true;
        } else {
            soal2_4.classList.add('warna-danger');
        }

        if (soal2_5.value.toLowerCase() == 12) {
            soal2_5.classList.add('warna-success');
            soal2_5.disabled = true;
        } else {
            soal2_5.classList.add('warna-danger');
        }

        if ((soal2_4.value.toLowerCase() == 251) && (soal2_5.value.toLowerCase() == 12)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul2_3').hidden = false;
                document.getElementById('btnjawab2').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal2_3() {
    if ((soal2_6.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal2_6.value.toLowerCase() == 239) {
            soal2_6.classList.add('warna-success');
            soal2_6.disabled = true;
        } else {
            soal2_6.classList.add('warna-danger');
        }


        if (soal2_6.value.toLowerCase() == 239) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut latihan berikutnya',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soal3').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
                soal2_6.classList.add('warna-success')
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function benar3() {
    let soalmuncul3_1 = document.getElementById('soalmuncul3_1');
    soalmuncul3_1.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option3 = document.getElementById('option3');
        option3.hidden = true;
    });

}

function salah3(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar33() {
    let soalmuncul3_2 = document.getElementById('soalmuncul3_2');
    soalmuncul3_2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option33 = document.getElementById('option33');
        option33.hidden = true;
    });

}

function salah33(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}
let soal3_1 = document.getElementById('soal3_1');
let soal3_2 = document.getElementById('soal3_2');
let soal3_3 = document.getElementById('soal3_3');
let soal3_4 = document.getElementById('soal3_4');
let soal3_5 = document.getElementById('soal3_5');
let soal3_6 = document.getElementById('soal3_6');

function ceksoal3_1() {
    if ((soal3_1.value == '') || (soal3_2.value == '') || (soal3_3.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal3_1.value.toLowerCase() == 345) {
            soal3_1.classList.add('warna-success');
            soal3_1.disabled = true;
        } else {
            soal3_1.classList.add('warna-danger');
        }

        if (soal3_2.value.toLowerCase() == 10) {
            soal3_2.classList.add('warna-success');
            soal3_2.disabled = true;
        } else {
            soal3_2.classList.add('warna-danger');
        }

        if (soal3_3.value.toLowerCase() == 80) {
            soal3_3.classList.add('warna-success');
            soal3_3.disabled = true;
        } else {
            soal3_3.classList.add('warna-danger');
        }

        if ((soal3_1.value.toLowerCase() == 345) && (soal3_2.value.toLowerCase() == 10) && (soal3_3.value.toLowerCase() == 80)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab1').hidden = true;
                document.getElementById('option33').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal3_2() {
    if ((soal3_4.value == '') || (soal3_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal3_4.value.toLowerCase() == 335) {
            soal3_4.classList.add('warna-success');
            soal3_4.disabled = true;
        } else {
            soal3_4.classList.add('warna-danger');
        }

        if (soal3_5.value.toLowerCase() == 80) {
            soal3_5.classList.add('warna-success');
            soal3_5.disabled = true;
        } else {
            soal3_5.classList.add('warna-danger');
        }

        if ((soal3_4.value.toLowerCase() == 335) && (soal3_5.value.toLowerCase() == 80)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul3_3').hidden = false;
                document.getElementById('btnjawab2').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal3_3() {
    if ((soal3_6.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal3_6.value.toLowerCase() == 415) {
            soal3_6.classList.add('warna-success');
            soal3_6.disabled = true;
        } else {
            soal3_6.classList.add('warna-danger');
        }


        if (soal3_6.value.toLowerCase() == 415) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut latihan berikutnya',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soal4').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function benar4() {
    let soalmuncul4_1 = document.getElementById('soalmuncul4_1');
    soalmuncul4_1.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option4 = document.getElementById('option4');
        option4.hidden = true;
    });

}

function salah4(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar44() {
    let soalmuncul4_2 = document.getElementById('soalmuncul4_2');
    soalmuncul4_2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option44 = document.getElementById('option44');
        option44.hidden = true;
    });

}

function salah44(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}
let soal4_1 = document.getElementById('soal4_1');
let soal4_2 = document.getElementById('soal4_2');
let soal4_3 = document.getElementById('soal4_3');
let soal4_4 = document.getElementById('soal4_4');
let soal4_5 = document.getElementById('soal4_5');
let soal4_6 = document.getElementById('soal4_6');

function ceksoal4_1() {
    if ((soal4_1.value == '') || (soal4_2.value == '') || (soal4_3.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal4_1.value.toLowerCase() == 180) {
            soal4_1.classList.add('warna-success');
            soal4_1.disabled = true;
        } else {
            soal4_1.classList.add('warna-danger');
        }

        if (soal4_2.value.toLowerCase() == 48) {
            soal4_2.classList.add('warna-success');
            soal4_2.disabled = true;
        } else {
            soal4_2.classList.add('warna-danger');
        }

        if (soal4_3.value.toLowerCase() == 12) {
            soal4_3.classList.add('warna-success');
            soal4_3.disabled = true;
        } else {
            soal4_3.classList.add('warna-danger');
        }

        if ((soal4_1.value.toLowerCase() == 180) && (soal4_2.value.toLowerCase() == 48) && (soal4_3.value.toLowerCase() == 12)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab1').hidden = true;
                document.getElementById('option44').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal4_2() {
    if ((soal4_4.value == '') || (soal4_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal4_4.value.toLowerCase() == 132) {
            soal4_4.classList.add('warna-success');
            soal4_4.disabled = true;
        } else {
            soal4_4.classList.add('warna-danger');
        }

        if (soal4_5.value.toLowerCase() == 12) {
            soal4_5.classList.add('warna-success');
            soal4_5.disabled = true;
        } else {
            soal4_5.classList.add('warna-danger');
        }

        if ((soal4_4.value.toLowerCase() == 132) && (soal4_5.value.toLowerCase() == 12)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul4_3').hidden = false;
                document.getElementById('btnjawab2').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal4_3() {
    if ((soal4_6.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal4_6.value.toLowerCase() == 144) {
            soal4_6.classList.add('warna-success');
            soal4_6.disabled = true;
        } else {
            soal4_6.classList.add('warna-danger');
        }


        if (soal4_6.value.toLowerCase() == 144) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut latihan berikutnya',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soal5').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function benar5() {
    let soalmuncul4_1 = document.getElementById('soalmuncul5_1');
    soalmuncul4_1.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option5 = document.getElementById('option5');
        option5.hidden = true;
    });

}

function salah5(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar55() {
    let soalmuncul5_2 = document.getElementById('soalmuncul5_2');
    soalmuncul5_2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option55 = document.getElementById('option55');
        option55.hidden = true;
    });

}

function salah55(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

let soal5_1 = document.getElementById('soal5_1');
let soal5_2 = document.getElementById('soal5_2');
let soal5_3 = document.getElementById('soal5_3');
let soal5_4 = document.getElementById('soal5_4');
let soal5_5 = document.getElementById('soal5_5');
let soal5_6 = document.getElementById('soal5_6');

function ceksoal5_1() {
    if ((soal5_1.value == '') || (soal5_2.value == '') || (soal5_3.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal5_1.value.toLowerCase() == 582) {
            soal5_1.classList.add('warna-success');
            soal5_1.disabled = true;
        } else {
            soal5_1.classList.add('warna-danger');
        }

        if (soal5_2.value.toLowerCase() == 330) {
            soal5_2.classList.add('warna-success');
            soal5_2.disabled = true;
        } else {
            soal5_2.classList.add('warna-danger');
        }

        if (soal5_3.value.toLowerCase() == 22) {
            soal5_3.classList.add('warna-success');
            soal5_3.disabled = true;
        } else {
            soal5_3.classList.add('warna-danger');
        }

        if ((soal5_1.value.toLowerCase() == 582) && (soal5_2.value.toLowerCase() == 330) && (soal5_3.value.toLowerCase() == 22)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab1').hidden = true;
                document.getElementById('option55').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal5_2() {
    if ((soal5_4.value == '') || (soal5_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal5_4.value.toLowerCase() == 252) {
            soal5_4.classList.add('warna-success');
            soal5_4.disabled = true;
        } else {
            soal5_4.classList.add('warna-danger');
        }

        if (soal5_5.value.toLowerCase() == 22) {
            soal5_5.classList.add('warna-success');
            soal5_5.disabled = true;
        } else {
            soal5_5.classList.add('warna-danger');
        }

        if ((soal5_4.value.toLowerCase() == 252) && (soal5_5.value.toLowerCase() == 22)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul5_3').hidden = false;
                document.getElementById('btnjawab2').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal5_3() {
    if ((soal5_6.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal5_6.value.toLowerCase() == 274) {
            soal5_6.classList.add('warna-success');
            soal5_6.disabled = true;
        } else {
            soal5_6.classList.add('warna-danger');
        }


        if (soal5_6.value.toLowerCase() == 274) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, latihan selesai',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soal5').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

// Latihan Materi 2
function benar2_1() {
    let soalmuncul21_1 = document.getElementById('soalmuncul21_1');
    soalmuncul21_1.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option2_1 = document.getElementById('option2_1');
        option2_1.hidden = true;
    });

}

function salah2_1(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar221() {
    let soalmuncul21_2 = document.getElementById('soalmuncul21_2');
    soalmuncul21_2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option221 = document.getElementById('option221');
        option221.hidden = true;
    });

}

function salah221(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

let soal21_1 = document.getElementById('soal21_1');
let soal21_2 = document.getElementById('soal21_2');
let soal21_3 = document.getElementById('soal21_3');
let soal21_4 = document.getElementById('soal21_4');
let soal21_5 = document.getElementById('soal21_5');
let soal21_6 = document.getElementById('soal21_6');

function ceksoal21_1() {
    if ((soal21_1.value == '') || (soal21_2.value == '') || (soal21_3.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal21_1.value.toLowerCase() == 125) {
            soal21_1.classList.add('warna-success');
            soal21_1.disabled = true;
        } else {
            soal21_1.classList.add('warna-danger');
        }

        if (soal21_2.value.toLowerCase() == 105) {
            soal21_2.classList.add('warna-success');
            soal21_2.disabled = true;
        } else {
            soal21_2.classList.add('warna-danger');
        }

        if (soal21_3.value.toLowerCase() == 15) {
            soal21_3.classList.add('warna-success');
            soal21_3.disabled = true;
        } else {
            soal21_3.classList.add('warna-danger');
        }

        if ((soal21_1.value.toLowerCase() == 125) && (soal21_2.value.toLowerCase() == 105) && (soal21_3.value.toLowerCase() == 15)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab1').hidden = true;
                document.getElementById('option221').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal21_2() {
    if ((soal21_4.value == '') || (soal21_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal21_4.value.toLowerCase() == 125) {
            soal21_4.classList.add('warna-success');
            soal21_4.disabled = true;
        } else {
            soal21_4.classList.add('warna-danger');
        }

        if (soal21_5.value.toLowerCase() == 7) {
            soal21_5.classList.add('warna-success');
            soal21_5.disabled = true;
        } else {
            soal21_5.classList.add('warna-danger');
        }

        if ((soal21_4.value.toLowerCase() == 125) && (soal21_5.value.toLowerCase() == 7)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul21_3').hidden = false;
                document.getElementById('btnjawab2').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal21_3() {
    if ((soal21_6.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal21_6.value.toLowerCase() == 132) {
            soal21_6.classList.add('warna-success');
            soal21_6.disabled = true;
        } else {
            soal21_6.classList.add('warna-danger');
        }


        if (soal21_6.value.toLowerCase() == 132) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut latihan berikutnya',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soal2').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function benar2_2() {
    let soalmuncul22_1 = document.getElementById('soalmuncul22_1');
    soalmuncul22_1.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option2_2 = document.getElementById('option2_2');
        option2_2.hidden = true;
    });

}
function salah2_2(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar222() {
    let soalmuncul22_2 = document.getElementById('soalmuncul22_2');
    soalmuncul22_2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option222 = document.getElementById('option222');
        option222.hidden = true;
    });

}
function salah222(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

let soal22_1 = document.getElementById('soal22_1');
let soal22_2 = document.getElementById('soal22_2');
let soal22_3 = document.getElementById('soal22_3');
let soal22_4 = document.getElementById('soal22_4');
let soal22_5 = document.getElementById('soal22_5');
let soal22_6 = document.getElementById('soal22_6');

function ceksoal22_1() {
    if ((soal22_1.value == '') || (soal22_2.value == '') || (soal22_3.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal22_1.value.toLowerCase() == 12) {
            soal22_1.classList.add('warna-success');
            soal22_1.disabled = true;
        } else {
            soal22_1.classList.add('warna-danger');
        }

        if (soal22_2.value.toLowerCase() == 5) {
            soal22_2.classList.add('warna-success');
            soal22_2.disabled = true;
        } else {
            soal22_2.classList.add('warna-danger');
        }

        if (soal22_3.value.toLowerCase() == 5) {
            soal22_3.classList.add('warna-success');
            soal22_3.disabled = true;
        } else {
            soal22_3.classList.add('warna-danger');
        }

        if ((soal22_1.value.toLowerCase() == 12) && (soal22_2.value.toLowerCase() == 5) && (soal22_3.value.toLowerCase() == 5)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab1').hidden = true;
                document.getElementById('option222').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal22_2() {
    if ((soal22_4.value == '') || (soal22_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal22_4.value.toLowerCase() == 12) {
            soal22_4.classList.add('warna-success');
            soal22_4.disabled = true;
        } else {
            soal22_4.classList.add('warna-danger');
        }

        if (soal22_5.value.toLowerCase() == 1) {
            soal22_5.classList.add('warna-success');
            soal22_5.disabled = true;
        } else {
            soal22_5.classList.add('warna-danger');
        }

        if ((soal22_4.value.toLowerCase() == 12) && (soal22_5.value.toLowerCase() == 1)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul22_3').hidden = false;
                document.getElementById('btnjawab2').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal22_3() {
    if ((soal22_6.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal22_6.value.toLowerCase() == 13) {
            soal22_6.classList.add('warna-success');
            soal22_6.disabled = true;
        } else {
            soal22_6.classList.add('warna-danger');
        }


        if (soal22_6.value.toLowerCase() == 13) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut latihan berikutnya',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soal3').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function benar2_3() {
    let soalmuncul23_1 = document.getElementById('soalmuncul23_1');
    soalmuncul23_1.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option2_3 = document.getElementById('option2_3');
        option2_3.hidden = true;
    });

}

function salah2_3(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar223() {
    let soalmuncul23_2 = document.getElementById('soalmuncul23_2');
    soalmuncul23_2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option223 = document.getElementById('option223');
        option223.hidden = true;
    });

}

function salah223(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}


let soal23_1 = document.getElementById('soal23_1');
let soal23_2 = document.getElementById('soal23_2');
let soal23_3 = document.getElementById('soal23_3');
let soal23_4 = document.getElementById('soal23_4');
let soal23_5 = document.getElementById('soal23_5');
let soal23_6 = document.getElementById('soal23_6');

function ceksoal23_1() {
    if ((soal23_1.value == '') || (soal23_2.value == '') || (soal23_3.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal23_1.value.toLowerCase() == 221) {
            soal23_1.classList.add('warna-success');
            soal23_1.disabled = true;
        } else {
            soal23_1.classList.add('warna-danger');
        }

        if (soal23_2.value.toLowerCase() == 60) {
            soal23_2.classList.add('warna-success');
            soal23_2.disabled = true;
        } else {
            soal23_2.classList.add('warna-danger');
        }

        if (soal23_3.value.toLowerCase() == 5) {
            soal23_3.classList.add('warna-success');
            soal23_3.disabled = true;
        } else {
            soal23_3.classList.add('warna-danger');
        }

        if ((soal23_1.value.toLowerCase() == 221) && (soal23_2.value.toLowerCase() == 60) && (soal23_3.value.toLowerCase() == 5)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab1').hidden = true;
                document.getElementById('option223').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal23_2() {
    if ((soal23_4.value == '') || (soal23_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal23_4.value.toLowerCase() == 221) {
            soal23_4.classList.add('warna-success');
            soal23_4.disabled = true;
        } else {
            soal23_4.classList.add('warna-danger');
        }

        if (soal23_5.value.toLowerCase() == 12) {
            soal23_5.classList.add('warna-success');
            soal23_5.disabled = true;
        } else {
            soal23_5.classList.add('warna-danger');
        }

        if ((soal23_4.value.toLowerCase() == 221) && (soal23_5.value.toLowerCase() == 12)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul23_3').hidden = false;
                document.getElementById('btnjawab2').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal23_3() {
    if ((soal23_6.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal23_6.value.toLowerCase() == 209) {
            soal23_6.classList.add('warna-success');
            soal23_6.disabled = true;
        } else {
            soal23_6.classList.add('warna-danger');
        }


        if (soal23_6.value.toLowerCase() == 209) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut latihan berikutnya',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soal4').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function benar2_4() {
    let soalmuncul24_1 = document.getElementById('soalmuncul24_1');
    soalmuncul24_1.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option2_4 = document.getElementById('option2_4');
        option2_4.hidden = true;
    });

}

function salah2_4(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar224() {
    let soalmuncul24_2 = document.getElementById('soalmuncul24_2');
    soalmuncul24_2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option224 = document.getElementById('option224');
        option224.hidden = true;
    });

}

function salah224(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}


let soal24_1 = document.getElementById('soal24_1');
let soal24_2 = document.getElementById('soal24_2');
let soal24_3 = document.getElementById('soal24_3');
let soal24_4 = document.getElementById('soal24_4');
let soal24_5 = document.getElementById('soal24_5');
let soal24_6 = document.getElementById('soal24_6');

function ceksoal24_1() {
    if ((soal24_1.value == '') || (soal24_2.value == '') || (soal24_3.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal24_1.value.toLowerCase() == 65) {
            soal24_1.classList.add('warna-success');
            soal24_1.disabled = true;
        } else {
            soal24_1.classList.add('warna-danger');
        }

        if (soal24_2.value.toLowerCase() == 50) {
            soal24_2.classList.add('warna-success');
            soal24_2.disabled = true;
        } else {
            soal24_2.classList.add('warna-danger');
        }

        if (soal24_3.value.toLowerCase() == 10) {
            soal24_3.classList.add('warna-success');
            soal24_3.disabled = true;
        } else {
            soal24_3.classList.add('warna-danger');
        }

        if ((soal24_1.value.toLowerCase() == 65) && (soal24_2.value.toLowerCase() == 50) && (soal24_3.value.toLowerCase() == 10)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab1').hidden = true;
                document.getElementById('option224').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal24_2() {
    if ((soal24_4.value == '') || (soal24_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal24_4.value.toLowerCase() == 65) {
            soal24_4.classList.add('warna-success');
            soal24_4.disabled = true;
        } else {
            soal24_4.classList.add('warna-danger');
        }

        if (soal24_5.value.toLowerCase() == 5) {
            soal24_5.classList.add('warna-success');
            soal24_5.disabled = true;
        } else {
            soal24_5.classList.add('warna-danger');
        }

        if ((soal24_4.value.toLowerCase() == 65) && (soal24_5.value.toLowerCase() == 5)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul24_3').hidden = false;
                document.getElementById('btnjawab2').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal24_3() {
    if ((soal24_6.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal24_6.value.toLowerCase() == 70) {
            soal24_6.classList.add('warna-success');
            soal24_6.disabled = true;
        } else {
            soal24_6.classList.add('warna-danger');
        }


        if (soal24_6.value.toLowerCase() == 70) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut latihan berikutnya',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soal5').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function benar2_5() {
    let soalmuncul25_1 = document.getElementById('soalmuncul25_1');
    soalmuncul25_1.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option2_5 = document.getElementById('option2_5');
        option2_5.hidden = true;
    });

}

function salah2_5(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar225() {
    let soalmuncul25_2 = document.getElementById('soalmuncul25_2');
    soalmuncul25_2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option225 = document.getElementById('option225');
        option225.hidden = true;
    });

}

function salah225(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}


let soal25_1 = document.getElementById('soal25_1');
let soal25_2 = document.getElementById('soal25_2');
let soal25_3 = document.getElementById('soal25_3');
let soal25_4 = document.getElementById('soal25_4');
let soal25_5 = document.getElementById('soal25_5');
let soal25_6 = document.getElementById('soal25_6');

function ceksoal25_1() {
    if ((soal25_1.value == '') || (soal25_2.value == '') || (soal25_3.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal25_1.value.toLowerCase() == 126) {
            soal25_1.classList.add('warna-success');
            soal25_1.disabled = true;
        } else {
            soal25_1.classList.add('warna-danger');
        }

        if (soal25_2.value.toLowerCase() == 2) {
            soal25_2.classList.add('warna-success');
            soal25_2.disabled = true;
        } else {
            soal25_2.classList.add('warna-danger');
        }

        if (soal25_3.value.toLowerCase() == 43) {
            soal25_3.classList.add('warna-success');
            soal25_3.disabled = true;
        } else {
            soal25_3.classList.add('warna-danger');
        }

        if ((soal25_1.value.toLowerCase() == 126) && (soal25_2.value.toLowerCase() == 2) && (soal25_3.value.toLowerCase() == 43)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab1').hidden = true;
                document.getElementById('option225').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal25_2() {
    if ((soal25_4.value == '') || (soal25_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal25_4.value.toLowerCase() == 63) {
            soal25_4.classList.add('warna-success');
            soal25_4.disabled = true;
        } else {
            soal25_4.classList.add('warna-danger');
        }

        if (soal25_5.value.toLowerCase() == 43) {
            soal25_5.classList.add('warna-success');
            soal25_5.disabled = true;
        } else {
            soal25_5.classList.add('warna-danger');
        }

        if ((soal25_4.value.toLowerCase() == 63) && (soal25_5.value.toLowerCase() == 43)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul25_3').hidden = false;
                document.getElementById('btnjawab2').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal25_3() {
    if ((soal25_6.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal25_6.value.toLowerCase() == 106) {
            soal25_6.classList.add('warna-success');
            soal25_6.disabled = true;
        } else {
            soal25_6.classList.add('warna-danger');
        }


        if (soal25_6.value.toLowerCase() == 106) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, latihan selesai',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soal5').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}


//Latihan materi 3 nomor 1
function salah3_1(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar331() {
    let soalmuncul2 = document.getElementById('soalmuncul2');
    soalmuncul2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option331 = document.getElementById('option331');
        option331.hidden = true;
    });

}

function salah331(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

function benar332() {
    let soalmuncul3 = document.getElementById('soalmuncul3');
    soalmuncul3.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option332 = document.getElementById('option332');
        option332.hidden = true;
    });

}

function salah332(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

let soal31_1 = document.getElementById('soal31_1');
let soal31_2 = document.getElementById('soal31_2');
let soal31_3 = document.getElementById('soal31_3');
let soal31_4 = document.getElementById('soal31_4');
let soal31_5 = document.getElementById('soal31_5');
let soal31_6 = document.getElementById('soal31_6');
let soal31_7 = document.getElementById('soal31_7');
let soal31_8 = document.getElementById('soal31_8');
let soal31_9 = document.getElementById('soal31_9');

function ceksoal31_1() {
    if ((soal31_1.value == '') ||
        (soal31_2.value == '') ||
        (soal31_3.value == '') ||
        (soal31_4.value == '') ||
        (soal31_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal31_1.value.toLowerCase() == 1000) {
            soal31_1.classList.add('warna-success');
            soal31_1.disabled = true;
        } else {
            soal31_1.classList.add('warna-danger');
        }

        if (soal31_2.value.toLowerCase() == 750) {
            soal31_2.classList.add('warna-success');
            soal31_2.disabled = true;
        } else {
            soal31_2.classList.add('warna-danger');
        }

        if (soal31_3.value.toLowerCase() == 750) {
            soal31_3.classList.add('warna-success');
            soal31_3.disabled = true;
        } else {
            soal31_3.classList.add('warna-danger');
        }

        if (soal31_4.value.toLowerCase() == 50) {
            soal31_4.classList.add('warna-success');
            soal31_4.disabled = true;
        } else {
            soal31_4.classList.add('warna-danger');
        }

        if (soal31_5.value.toLowerCase() == 200) {
            soal31_5.classList.add('warna-success');
            soal31_5.disabled = true;
        } else {
            soal31_5.classList.add('warna-danger');
        }

        if ((soal31_1.value.toLowerCase() == 1000) &&
            (soal31_2.value.toLowerCase() == 750) &&
            (soal31_3.value.toLowerCase() == 750) &&
            (soal31_4.value.toLowerCase() == 50) &&
            (soal31_5.value.toLowerCase() == 200)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab1').hidden = true;
                document.getElementById('option331').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal31_2() {
    if ((soal31_6.value == '') || (soal31_7.value == '') || (soal31_8.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal31_6.value.toLowerCase() == 2500) {
            soal31_6.classList.add('warna-success');
            soal31_6.disabled = true;
        } else {
            soal31_6.classList.add('warna-danger');
        }

        if (soal31_7.value.toLowerCase() == 50) {
            soal31_7.classList.add('warna-success');
            soal31_7.disabled = true;
        } else {
            soal31_7.classList.add('warna-danger');
        }

        if (soal31_8.value.toLowerCase() == 200) {
            soal31_8.classList.add('warna-success');
            soal31_8.disabled = true;
        } else {
            soal31_8.classList.add('warna-danger');
        }

        if ((soal31_6.value.toLowerCase() == 2500) && (soal31_7.value.toLowerCase() == 50) && (soal31_8.value.toLowerCase() == 200)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab2').hidden = true;
                document.getElementById('option332').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal31_3() {
    if ((soal31_9.value == '') || (soal31_10.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal31_9.value.toLowerCase() == 125000) {
            soal31_9.classList.add('warna-success');
            soal31_9.disabled = true;
        } else {
            soal31_9.classList.add('warna-danger');
        }

        if (soal31_10.value.toLowerCase() == 200) {
            soal31_10.classList.add('warna-success');
            soal31_10.disabled = true;
        } else {
            soal31_10.classList.add('warna-danger');
        }

        if ((soal31_9.value.toLowerCase() == 125000) && (soal31_10.value.toLowerCase() == 200)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul4').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal31_4() {
    if ((soal31_11.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal31_11.value.toLowerCase() == 625) {
            soal31_11.classList.add('warna-success');
            soal31_11.disabled = true;
        } else {
            soal31_11.classList.add('warna-danger');
        }


        if (soal31_11.value.toLowerCase() == 625) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut latihan berikutnya',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('hasil31').hidden = false;
                document.getElementById('soal32').hidden = false;
                document.getElementById('btnjawab3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

// materi 3 Nomor 2

function benar3_2() {
    let soalmuncul32_2 = document.getElementById('soalmuncul32_2');
    soalmuncul32_2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option3_2 = document.getElementById('option3_2');
        option3_2.hidden = true;
    });

}
function salah3_2(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}
function benar3_21() {
    let soalmuncul32_3 = document.getElementById('soalmuncul32_3');
    soalmuncul32_3.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option3_21 = document.getElementById('option3_21');
        option3_21.hidden = true;
    });

}

function salah3_21(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

let soal32_1 = document.getElementById('soal32_1');
let soal32_2 = document.getElementById('soal32_2');
let soal32_3 = document.getElementById('soal32_3');
let soal32_4 = document.getElementById('soal32_4');
let soal32_5 = document.getElementById('soal32_5');
let soal32_6 = document.getElementById('soal32_6');
let soal32_7 = document.getElementById('soal32_7');
let soal32_8 = document.getElementById('soal32_8');
let soal32_9 = document.getElementById('soal32_9');

function ceksoal32_1() {
    if ((soal32_1.value == '') ||
        (soal32_2.value == '') ||
        (soal32_3.value == '') ||
        (soal32_4.value == '') ||
        (soal32_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal32_1.value.toLowerCase() == 200) {
            soal32_1.classList.add('warna-success');
            soal32_1.disabled = true;
        } else {
            soal32_1.classList.add('warna-danger');
        }

        if (soal32_2.value.toLowerCase() == 150) {
            soal32_2.classList.add('warna-success');
            soal32_2.disabled = true;
        } else {
            soal32_2.classList.add('warna-danger');
        }

        if (soal32_3.value.toLowerCase() == 150) {
            soal32_3.classList.add('warna-success');
            soal32_3.disabled = true;
        } else {
            soal32_3.classList.add('warna-danger');
        }

        if (soal32_4.value.toLowerCase() == 50) {
            soal32_4.classList.add('warna-success');
            soal32_4.disabled = true;
        } else {
            soal32_4.classList.add('warna-danger');
        }

        if (soal32_5.value.toLowerCase() == 10) {
            soal32_5.classList.add('warna-success');
            soal32_5.disabled = true;
        } else {
            soal32_5.classList.add('warna-danger');
        }

        if ((soal32_1.value.toLowerCase() == 200) &&
            (soal32_2.value.toLowerCase() == 150) &&
            (soal32_3.value.toLowerCase() == 150) &&
            (soal32_4.value.toLowerCase() == 50) &&
            (soal32_5.value.toLowerCase() == 10)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab32_1').hidden = true;
                document.getElementById('option3_2').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal32_2() {
    if ((soal32_6.value == '') || (soal32_7.value == '') || (soal32_8.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal32_6.value.toLowerCase() == 500) {
            soal32_6.classList.add('warna-success');
            soal32_6.disabled = true;
        } else {
            soal32_6.classList.add('warna-danger');
        }

        if (soal32_7.value.toLowerCase() == 50) {
            soal32_7.classList.add('warna-success');
            soal32_7.disabled = true;
        } else {
            soal32_7.classList.add('warna-danger');
        }

        if (soal32_8.value.toLowerCase() == 10) {
            soal32_8.classList.add('warna-success');
            soal32_8.disabled = true;
        } else {
            soal32_8.classList.add('warna-danger');
        }

        if ((soal32_6.value.toLowerCase() == 500) && (soal32_7.value.toLowerCase() == 50) && (soal32_8.value.toLowerCase() == 10)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab32_2').hidden = true;
                document.getElementById('option3_21').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}
function ceksoal32_3() {
    if ((soal32_9.value == '') || (soal32_10.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal32_9.value.toLowerCase() == 25000) {
            soal32_9.classList.add('warna-success');
            soal32_9.disabled = true;
        } else {
            soal32_9.classList.add('warna-danger');
        }

        if (soal32_10.value.toLowerCase() == 10) {
            soal32_10.classList.add('warna-success');
            soal32_10.disabled = true;
        } else {
            soal32_10.classList.add('warna-danger');
        }

        if ((soal32_9.value.toLowerCase() == 25000) && (soal32_10.value.toLowerCase() == 10)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut isi kotak kosong',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('soalmuncul32_4').hidden = false;
                document.getElementById('btnjawab32_3').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal32_4() {
    if ((soal32_11.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal32_11.value.toLowerCase() == 2500) {
            soal32_11.classList.add('warna-success');
            soal32_11.disabled = true;
        } else {
            soal32_11.classList.add('warna-danger');
        }


        if (soal32_11.value.toLowerCase() == 2500) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut latihan berikutnya',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('hasil32').hidden = false;
                document.getElementById('btnjawab32_4').hidden = true;
                document.getElementById('soal33').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

// materi 3 Nomor 3
function benar3_3() {
    let soalmuncul33_2 = document.getElementById('soalmuncul33_2');
    soalmuncul33_2.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option3_3 = document.getElementById('option3_3');
        option3_3.hidden = true;
    });

}
function salah3_3(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}
function benar3_31() {
    let soalmuncul33_3 = document.getElementById('soalmuncul33_3');
    soalmuncul33_3.hidden = false;
    Swal.fire({
        icon: 'success',
        title: 'Pilihan anda benar, lanjut isi kotak kosong',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let option3_31 = document.getElementById('option3_31');
        option3_31.hidden = true;
    });

}

function salah3_31(pilihan) {
    Swal.fire({
        icon: 'danger',
        title: 'Pilihan anda kurang tepat silahkan coba lagi!',
        showConfirButton: false,
        Timer: 1500,
    }).then(function () {
        let pilihann = document.getElementById(pilihan);
        pilihann.classList.remove('btn-secondary');
        pilihann.classList.add('btn-danger');
    });
}

let soal33_1 = document.getElementById('soal33_1');
let soal33_2 = document.getElementById('soal33_2');
let soal33_3 = document.getElementById('soal33_3');
let soal33_4 = document.getElementById('soal33_4');
let soal33_5 = document.getElementById('soal33_5');
let soal33_6 = document.getElementById('soal33_6');
let soal33_7 = document.getElementById('soal33_7');
let soal33_8 = document.getElementById('soal33_8');
let soal33_9 = document.getElementById('soal33_9');

function ceksoal33_1() {
    if ((soal33_1.value == '') ||
        (soal33_2.value == '') ||
        (soal33_3.value == '') ||
        (soal33_4.value == '') ||
        (soal33_5.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal33_1.value.toLowerCase() == 100) {
            soal33_1.classList.add('warna-success');
            soal33_1.disabled = true;
        } else {
            soal33_1.classList.add('warna-danger');
        }

        if (soal33_2.value.toLowerCase() == 150) {
            soal33_2.classList.add('warna-success');
            soal33_2.disabled = true;
        } else {
            soal33_2.classList.add('warna-danger');
        }

        if (soal33_3.value.toLowerCase() == 100) {
            soal33_3.classList.add('warna-success');
            soal33_3.disabled = true;
        } else {
            soal33_3.classList.add('warna-danger');
        }

        if (soal33_4.value.toLowerCase() == 20) {
            soal33_4.classList.add('warna-success');
            soal33_4.disabled = true;
        } else {
            soal33_4.classList.add('warna-danger');
        }

        if (soal33_5.value.toLowerCase() == 10) {
            soal33_5.classList.add('warna-success');
            soal33_5.disabled = true;
        } else {
            soal33_5.classList.add('warna-danger');
        }

        if ((soal33_1.value.toLowerCase() == 100) &&
            (soal33_2.value.toLowerCase() == 150) &&
            (soal33_3.value.toLowerCase() == 100) &&
            (soal33_4.value.toLowerCase() == 20) &&
            (soal33_5.value.toLowerCase() == 10)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab33_1').hidden = true;
                document.getElementById('option3_3').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal33_2() {
    if ((soal33_6.value == '') || (soal33_7.value == '') || (soal33_8.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal33_6.value.toLowerCase() == 350) {
            soal33_6.classList.add('warna-success');
            soal33_6.disabled = true;
        } else {
            soal33_6.classList.add('warna-danger');
        }

        if (soal33_7.value.toLowerCase() == 20) {
            soal33_7.classList.add('warna-success');
            soal33_7.disabled = true;
        } else {
            soal33_7.classList.add('warna-danger');
        }

        if (soal33_8.value.toLowerCase() == 10) {
            soal33_8.classList.add('warna-success');
            soal33_8.disabled = true;
        } else {
            soal33_8.classList.add('warna-danger');
        }

        if ((soal33_6.value.toLowerCase() == 350) && (soal33_7.value.toLowerCase() == 20) && (soal33_8.value.toLowerCase() == 10)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab33_2').hidden = true;
                document.getElementById('option3_31').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal33_3() {
    if ((soal33_9.value == '') || (soal33_10.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal33_9.value.toLowerCase() == 7000) {
            soal33_9.classList.add('warna-success');
            soal33_9.disabled = true;
        } else {
            soal33_9.classList.add('warna-danger');
        }

        if (soal33_10.value.toLowerCase() == 10) {
            soal33_10.classList.add('warna-success');
            soal33_10.disabled = true;
        } else {
            soal33_10.classList.add('warna-danger');
        }

        if ((soal33_9.value.toLowerCase() == 7000) && (soal33_10.value.toLowerCase() == 10)) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, lanjut pilih operasi hitung yang tepat',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('btnjawab33_3').hidden = true;
                document.getElementById('soalmuncul33_4').hidden = false;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

function ceksoal33_4() {
    if ((soal33_11.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {
        if (soal33_11.value.toLowerCase() == 700) {
            soal33_11.classList.add('warna-success');
            soal33_11.disabled = true;
        } else {
            soal33_11.classList.add('warna-danger');
        }


        if (soal33_11.value.toLowerCase() == 700) {
            Swal.fire({
                icon: 'success',
                title: 'Jawaban anda benar, latihan selesai',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                document.getElementById('hasil33').hidden = false;
                document.getElementById('btnjawab33_4').hidden = true;
            });
        } else {
            sweetAlert(
                "Oops...",
                "Jawaban anda masih ada yang kurang tepat",
                "error"
            );
        }
    }
}

const salah = '<span style="color : red;">Salah</span>'
const benar = '<span style="color : green;">Benar</span>'


    // Function to open the pop-up
    function openPopup(message) {
        var popup = document.getElementById('popup');
        var popupMessage = document.getElementById('popupMessage');
        popupMessage.innerHTML = message;
        popup.style.display = 'block';
    }

    // Function to close the pop-up
    function closePopup() {
        var popup = document.getElementById('popup');
        popup.style.display = 'none';
    }

    // Function to check the answer
    function cekJawaban() {
        // Your logic to check the answer goes here
        // For example, let's assume the answer is correct
        var isCorrect = true;

        if (isCorrect) {
            openPopup("Jawaban Anda Benar!");
        } else {
            openPopup("Jawaban Anda Salah. Silakan coba lagi.");
        }
    }

    