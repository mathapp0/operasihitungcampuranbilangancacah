const dbkkm = db.ref("db_kkm/").on("value", kkmSuccess, handleError);

let loop1;

let kkm1 = 0;

let tokenNew = 0;

let nama = sessionStorage.getItem('nama');
let nisn = sessionStorage.getItem('nisn');
let sekolah = sessionStorage.getItem('sekolah');
let kelas = sessionStorage.getItem('kelas');

const namasiswa = document.getElementById('namasiswa');
const nisnsiswa = document.getElementById('nisnsiswa');
const kelassiswa = document.getElementById('kelassiswa');
const sekolahsiswa = document.getElementById('sekolahsiswa');

namasiswa.innerHTML = nama;
nisnsiswa.innerHTML = nisn;
kelassiswa.innerHTML = kelas;
sekolahsiswa.innerHTML = sekolah;

localStorage.setItem("nama", nama);
localStorage.setItem("sekolah", sekolah);
localStorage.setItem("kelas", kelas);

function kkmSuccess(items1) {
  kkm1 = items1.val()[0]["kkm"];
}

function handleError(error) {
  console.log(error);
}

let jawabB = [];

function formkuis() {
  document.getElementById("petunjukkuis").hidden = true;
  document.getElementById("soalkuis").hidden = false;

  listsoal1();
}

function listsoal1() {
  let noSoal = 1;

  function getSoal(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.response);
        } else if (XPathEvaluator.status === 404) {
          error();
        }
      }
    };
    xhr.open("get", url);
    xhr.send();
  }

  getSoal(
    "../assets/banksoal/kuis1.json",
    (results) => {
      const listSoalJson = JSON.parse(results);
      let soal = "";
      let soalRand = [];
      let soalRandom = [];
      let i = 0;

      while (i < listSoalJson.length) {
        let rand = Math.floor(Math.random() * listSoalJson.length);
        soalRand[i] = listSoalJson[rand];
        soalRandom = Array.from(new Set(soalRand));
        i = soalRandom.length;
      }

      soalRandom.forEach((s) => {
        soal += tampilSoal(s);
      });

      const listSoal = document.querySelector(".list-soal");
      listSoal.innerHTML = soal;

      document.getElementById("id1").hidden = false;
      document.getElementById("id2").hidden = true;
      document.getElementById("id3").hidden = true;
      document.getElementById("id4").hidden = true;
      document.getElementById("id5").hidden = true;
      document.getElementById("id6").hidden = true;
      document.getElementById("id7").hidden = true;
      document.getElementById("id8").hidden = true;
      document.getElementById("id9").hidden = true;
      document.getElementById("id10").hidden = true;
    },
    () => { }
  );

  countDownDate = new Date().getTime();
  //waktu 15 menit
  countDownDate += 1801000;

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Perhitungan waktu untuk menit dan detik
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("waktu").innerHTML = minutes + ":" + seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("waktu").innerHTML = "Waktu Selesai";
      nilaiwktu = 1;
      cekKuis1TO();
    }
  }, 1000);

  let idx = 0;
  function tampilSoal(s) {
    jawabB[idx++] = s.jawaban;
    return `<div id="id${idx}">
                <form>
                <p>${noSoal++}. ${s.soal}</p>
                <input type="radio" id="jA${s.id
      }" onclick="cek${idx}(this.value);" name="jawab${s.id
      }" value="A">
                <label for="jA${s.id}">${s.a}</label><br>
                <input type="radio" id="jB${s.id
      }" onclick="cek${idx}(this.value);" name="jawab${s.id
      }" value="B">
                <label for="jB${s.id}">${s.b}</label><br>
                <input type="radio" id="jC${s.id
      }" onclick="cek${idx}(this.value);" name="jawab${s.id
      }" value="C">
                <label for="jC${s.id}">${s.c}</label><br>
                <input type="radio" id="jD${s.id
      }" onclick="cek${idx}(this.value);" name="jawab${s.id
      }" value="D">
                <label for="jD${s.id}">${s.d}</label><br>
                </form>
                </div>`;
  }
}

let kuis1_1 = "";
let kuis1_2 = "";
let kuis1_3 = "";
let kuis1_4 = "";
let kuis1_5 = "";
let kuis1_6 = "";
let kuis1_7 = "";
let kuis1_8 = "";
let kuis1_9 = "";
let kuis1_10 = "";

let nilai = 0;
function cek1(pilih) {
  kuis1_1 = pilih;
  document.getElementById("soal1").classList.add("text-white", "btn-primary");
  document.getElementById("soal1").classList.remove("btn-outline-primary");
}
function cek2(pilih) {
  kuis1_2 = pilih;
  document.getElementById("soal2").classList.add("text-white", "btn-primary");
  document.getElementById("soal2").classList.remove("btn-outline-primary");
}
function cek3(pilih) {
  kuis1_3 = pilih;
  document.getElementById("soal3").classList.add("text-white", "btn-primary");
  document.getElementById("soal3").classList.remove("btn-outline-primary");
}
function cek4(pilih) {
  kuis1_4 = pilih;
  document.getElementById("soal4").classList.add("text-white", "btn-primary");
  document.getElementById("soal4").classList.remove("btn-outline-primary");
}
function cek5(pilih) {
  kuis1_5 = pilih;
  document.getElementById("soal5").classList.add("text-white", "btn-primary");
  document.getElementById("soal5").classList.remove("btn-outline-primary");
}

function cek6(pilih) {
  kuis1_6 = pilih;
  document.getElementById("soal6").classList.add("text-white", "btn-primary");
  document.getElementById("soal6").classList.remove("btn-outline-primary");
}
function cek7(pilih) {
  kuis1_7 = pilih;
  document.getElementById("soal7").classList.add("text-white", "btn-primary");
  document.getElementById("soal7").classList.remove("btn-outline-primary");
}
function cek8(pilih) {
  kuis1_8 = pilih;
  document.getElementById("soal8").classList.add("text-white", "btn-primary");
  document.getElementById("soal8").classList.remove("btn-outline-primary");
}
function cek9(pilih) {
  kuis1_9 = pilih;
  document.getElementById("soal9").classList.add("text-white", "btn-primary");
  document.getElementById("soal9").classList.remove("btn-outline-primary");
}
function cek10(pilih) {
  kuis1_10 = pilih;
  document.getElementById("soal10").classList.add("text-white", "btn-primary");
  document.getElementById("soal10").classList.remove("btn-outline-primary");
}

$(function () {
  setInterval(cek, 1000);
});

let kuis1 = [];
function cek() {
  kuis1 = [
    kuis1_1,
    kuis1_2,
    kuis1_3,
    kuis1_4,
    kuis1_5,
    kuis1_6,
    kuis1_7,
    kuis1_8,
    kuis1_9,
    kuis1_10,
  ];
}

function cekKuis1TO() {
  const soalkuis = document.getElementById("soalkuis");
  soalkuis.hidden = true;
  const hasilkuis = document.getElementById("hasilkuis");
  hasilkuis.hidden = false;
  for (let a = 0; a < jawabB.length; a++) {
    if (kuis1[a] == jawabB[a]) {
      nilai = nilai + 10;
    }
  }

  localStorage.setItem("nkuis1", nilai);
  var namaS = localStorage.getItem("nama");
  var kelasS = localStorage.getItem("kelas");
  var sekolahS = localStorage.getItem("sekolah");

  let harinya = hari();
  let waktunya = waktu();

  if (nilai < kkm1) {
    const namaHTL = document.getElementById("namaHTL");
    namaHTL.innerHTML = namaS;
    const kelasHTL = document.getElementById("kelasHTL");
    kelasHTL.innerHTML = kelasS;
    const sekolahHTL = document.getElementById("sekolahHTL");
    sekolahHTL.innerHTML = sekolahS;
    const nilaiHTL = document.getElementById("nilaiHTL");
    nilaiHTL.innerHTML = nilai;
    const waktuHTL = document.getElementById("waktuHTL");
    waktuHTL.innerHTML = waktunya;
    const tanggalHTL = document.getElementById("tanggalHTL");
    tanggalHTL.innerHTML = harinya;
    const hasilTL = document.getElementById("hasilTL");
    hasilTL.hidden = false;
    const hasilL = document.getElementById("hasilL");
    hasilL.hidden = true;
  } else {
    const namaHL = document.getElementById("namaHL");
    namaHL.innerHTML = namaS;
    const kelasHL = document.getElementById("kelasHL");
    kelasHL.innerHTML = kelasS;
    const sekolahHL = document.getElementById("sekolahHL");
    sekolahHL.innerHTML = sekolahS;
    const nilaiHL = document.getElementById("nilaiHL");
    nilaiHL.innerHTML = nilai;
    const waktuHTL = document.getElementById("waktuHL");
    waktuHTL.innerHTML = waktunya;
    const tanggalHTL = document.getElementById("tanggalHL");
    tanggalHTL.innerHTML = harinya;
    const hasilTL = document.getElementById("hasilTL");
    hasilTL.hidden = true;
    const hasilL = document.getElementById("hasilL");
    hasilL.hidden = false;
  }



  createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);
}

function dialogSubmit() {
  $("#ModalSubmit1").modal("show");
}

function cekKuis1() {
  if (
    kuis1_1 == "" ||
    kuis1_2 == "" ||
    kuis1_3 == "" ||
    kuis1_4 == "" ||
    (kuis1_5 == "" && kuis1_6 == "") ||
    kuis1_7 == "" ||
    kuis1_8 == "" ||
    kuis1_9 == "" ||
    kuis1_10 == ""
    
  ) {
    $("#ModalKuisKosong").modal("show");
    $("#ModalSubmit1").modal("hide");
  } else {
    $("#ModalSubmit1").modal("hide");
    for (let a = 0; a < jawabB.length; a++) {
      // Periksa apakah file telah diupload
      if (fileInput.files.length === 0) {
        alert("Mohon upload file sebelum melanjutkan."); // Tampilkan pesan kesalahan jika file belum diupload
        break; // Keluar dari loop jika file belum diupload
      }
    
      // Lanjut dengan memeriksa jawaban
      if (kuis1[a] == jawabB[a]) {
        const soalkuis = document.getElementById("soalkuis");
        soalkuis.hidden = true;
        // const hasilkuis = document.getElementById("hasilkuis");
        // hasilkuis.hidden = false;
        nilai = nilai + 10;
      }
    }
    localStorage.setItem("nkuis1", nilai);
    var namaS = localStorage.getItem("nama");
    var kelasS = localStorage.getItem("kelas");
    var sekolahS = localStorage.getItem("sekolah");

    let harinya = hari();
    let waktunya = waktu();

    if (nilai < kkm1) {
      const namaHTL = document.getElementById("namaHTL");
      namaHTL.innerHTML = namaS;
      const kelasHTL = document.getElementById("kelasHTL");
      kelasHTL.innerHTML = kelasS;
      const sekolahHTL = document.getElementById("sekolahHTL");
      sekolahHTL.innerHTML = sekolahS;
      const nilaiHTL = document.getElementById("nilaiHTL");
      nilaiHTL.innerHTML = nilai;
      const waktuHTL = document.getElementById("waktuHTL");
      waktuHTL.innerHTML = waktunya;
      const tanggalHTL = document.getElementById("tanggalHTL");
      tanggalHTL.innerHTML = harinya;
      const hasilTL = document.getElementById("hasilTL");
      hasilTL.hidden = false;
      const hasilL = document.getElementById("hasilL");
      hasilL.hidden = true;
    } else {
      const namaHL = document.getElementById("namaHL");
      namaHL.innerHTML = namaS;
      const kelasHL = document.getElementById("kelasHL");
      kelasHL.innerHTML = kelasS;
      const sekolahHL = document.getElementById("sekolahHL");
      sekolahHL.innerHTML = sekolahS;
      const nilaiHL = document.getElementById("nilaiHL");
      nilaiHL.innerHTML = nilai;
      const waktuHTL = document.getElementById("waktuHL");
      waktuHTL.innerHTML = waktunya;
      const tanggalHTL = document.getElementById("tanggalHL");
      tanggalHTL.innerHTML = harinya;
      const hasilTL = document.getElementById("hasilTL");
      hasilTL.hidden = true;
      const hasilL = document.getElementById("hasilL");
      hasilL.hidden = false;
    }

    createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya, uploadFile());
  }
}

let indeks = document.getElementById("indeks");
indeks.innerHTML = 1;

function soal1() {
  indeks.innerHTML = 1;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("soalPrev").hidden = true;
  document.getElementById("id1").hidden = false;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("coretan").hidden = true;
  document.getElementById("pertanyaan").hidden = false;
  document.getElementById("uploadfilee").hidden = true;
  document.getElementById("uploadcoretan").hidden = true;
  document.getElementById("soalNext").hidden = false;
  document
    .getElementById("soalNext")
    .setAttribute("onClick", "javascript: soal2();");
}

function soal2() {
  indeks.innerHTML = 2;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = false;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("coretan").hidden = true;
  document.getElementById("pertanyaan").hidden = false;
  document.getElementById("uploadfilee").hidden = true;
  document.getElementById("uploadcoretan").hidden = true;
  document.getElementById("soalNext").hidden = false;
  document
    .getElementById("soalPrev")
    .setAttribute("onClick", "javascript: soal1();");
  document
    .getElementById("soalNext")
    .setAttribute("onClick", "javascript: soal3();");
}

function soal3() {
  indeks.innerHTML = 3;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = false;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("coretan").hidden = true;
  document.getElementById("pertanyaan").hidden = false;
  document.getElementById("uploadfilee").hidden = true;
  document.getElementById("uploadcoretan").hidden = true;
  document.getElementById("soalNext").hidden = false;
  document
    .getElementById("soalPrev")
    .setAttribute("onClick", "javascript: soal2();");
  document
    .getElementById("soalNext")
    .setAttribute("onClick", "javascript: soal4();");
}

function soal4() {
  indeks.innerHTML = 4;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = false;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("coretan").hidden = true;
  document.getElementById("pertanyaan").hidden = false;
  document.getElementById("uploadfilee").hidden = true;
  document.getElementById("uploadcoretan").hidden = true;
  document.getElementById("soalNext").hidden = false;
  document
    .getElementById("soalPrev")
    .setAttribute("onClick", "javascript: soal3();");
  document
    .getElementById("soalNext")
    .setAttribute("onClick", "javascript: soal5();");
}

function soal5() {
  indeks.innerHTML = 5;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = false;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("coretan").hidden = true;
  document.getElementById("pertanyaan").hidden = false;
  document.getElementById("uploadfilee").hidden = true;
  document.getElementById("uploadcoretan").hidden = true;
  document.getElementById("soalNext").hidden = false;
  document
    .getElementById("soalPrev")
    .setAttribute("onClick", "javascript: soal4();");
  document
    .getElementById("soalNext")
    .setAttribute("onClick", "javascript: soal6();");
}

function soal6() {
  indeks.innerHTML = 6;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = false;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("coretan").hidden = true;
  document.getElementById("pertanyaan").hidden = false;
  document.getElementById("uploadfilee").hidden = true;
  document.getElementById("uploadcoretan").hidden = true;
  document.getElementById("soalNext").hidden = false;
  document
    .getElementById("soalPrev")
    .setAttribute("onClick", "javascript: soal5();");
  document
    .getElementById("soalNext")
    .setAttribute("onClick", "javascript: soal7();");
}

function soal7() {
  indeks.innerHTML = 7;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = false;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("coretan").hidden = true;
  document.getElementById("pertanyaan").hidden = false;
  document.getElementById("uploadfilee").hidden = true;
  document.getElementById("uploadcoretan").hidden = true;
  document.getElementById("soalNext").hidden = false;
  document
    .getElementById("soalPrev")
    .setAttribute("onClick", "javascript: soal6();");
  document
    .getElementById("soalNext")
    .setAttribute("onClick", "javascript: soal8();");
}

function soal8() {
  indeks.innerHTML = 8;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = false;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("coretan").hidden = true;
  document.getElementById("pertanyaan").hidden = false;
  document.getElementById("uploadfilee").hidden = true;
  document.getElementById("uploadcoretan").hidden = true;
  document.getElementById("soalNext").hidden = false;
  document
    .getElementById("soalPrev")
    .setAttribute("onClick", "javascript: soal7();");
  document
    .getElementById("soalNext")
    .setAttribute("onClick", "javascript: soal9();");
}

function soal9() {
  indeks.innerHTML = 9;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = false;
  document.getElementById("id10").hidden = true;
  document.getElementById("coretan").hidden = true;
  document.getElementById("pertanyaan").hidden = false;
  document.getElementById("uploadfilee").hidden = true;
  document.getElementById("uploadcoretan").hidden = true;
  document.getElementById("soalNext").hidden = false;
  document
    .getElementById("soalPrev")
    .setAttribute("onClick", "javascript: soal8();");
  document
    .getElementById("soalNext")
    .setAttribute("onClick", "javascript: soal10();");
}

function soal10() {
  indeks.innerHTML = 10;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = false;
  document.getElementById("coretan").hidden = true;
  document.getElementById("pertanyaan").hidden = false;
  document.getElementById("uploadfilee").hidden = true;
  document.getElementById("uploadcoretan").hidden = false;
  document.getElementById("soalNext").hidden = true;
  
  document
    .getElementById("soalPrev")
    .setAttribute("onClick", "javascript: soal9();");

    document
    .getElementById("uploadcoretan")
    .setAttribute("onClick", "javascript: coretan();");
    
}
function coretan() {
  document.getElementById("uploadcoretan").hidden = true;
  document.getElementById("uploadfilee").hidden = false;
  document.getElementById("pertanyaan").hidden = true;
  let id10 = document.getElementById('id10');
  id10.hidden = true;
  let soalNext = document.getElementById('soalNext');
  soalNext.hidden = true;
  document
  .getElementById("soalPrev")
  .setAttribute("onClick", "javascript: soal10();");

  let coretan = document.getElementById('coretan');
  coretan.hidden = false;
}

 function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
      // Create a storage reference
      const storageRef = storage.ref (`KUIS 1/${nisn}/${file.name=counter}`);

      // Upload file
      const uploadTask = storageRef.put(file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Progress
          var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        document.getElementById("progress").value = percentage;
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error(error.message);
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            // Save file details to the database
            saveFileToDatabase(file.name, downloadURL, showSuccessNotice(), clearProgress()); 
          });
        }
      );
    } else {
      console.error('No file selected');
    }
  }

  function saveFileToDatabase(fileName, downloadURL) {
    // Save file details to the database
    const fileDetails = {
      name: fileName,
      url: downloadURL
    };

    // Generate a unique key for the file entry
    const fileKey = database.ref('files').push().key;

    // Set the file details in the database under the 'files' node with the generated key
    database.ref('files/' + fileKey).set(fileDetails)
      .then(() => {
        console.log('File details saved to the database');
      })
      .catch((error) => {
        console.error('Error saving file details to the database:', error);
      });
  }

  function showSuccessNotice() {
    // You can customize this function to display a modal or use a library for a more sophisticated notification.
    alert('File uploaded successfully!');
  }

  function clearProgress() {
    // You can hide the progress bar or set its value to 0%
    document.getElementById("progress").value = 0;

    const hasilkuis = document.getElementById("hasilkuis");
    hasilkuis.hidden = false;
  }

  document.getElementById('fileInput').addEventListener('change', function(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file && !file.type.startsWith('image/')) {
            alert('Hanya file gambar yang diperbolehkan!');
            fileInput.value = ''; // Reset input
        }
    });
  