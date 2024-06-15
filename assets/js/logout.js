function logout1() {
    Swal.fire({
        title: 'Apakah Anda yakin ingin keluar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Keluar Akun!',
    }).then((result) => {
        if ((result.isConfirmed)) {
            window.location.href = '../index.html';
        }
    });
}