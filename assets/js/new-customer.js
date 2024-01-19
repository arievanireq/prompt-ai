document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.tampilkanHasil');
    button.addEventListener('click', function () {
        const isipesan = document.querySelector('.isipesan select').value;
        const isinama = document.querySelector('.isinama input').value;
        const isiposisi = document.querySelector('.isiposisi select').value;

        const kalimat = generateSentence(isipesan, isinama, isiposisi);

        const isihasil = document.querySelector('.isihasil p');
        isihasil.textContent = kalimat;
    });

    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', function () {
        location.reload();
    });

    const copyLink = document.querySelector('.copyHasil');
    copyLink.addEventListener('click', function (event) {
        event.preventDefault();
        const isihasil = document.querySelector('.isihasil p').textContent;

        navigator.clipboard.writeText(isihasil).then(function () {
            showToast('📝 Teks berhasil disalin');
        }).catch(function (error) {
            showToast('Gagal menyalin teks');
        });
    });
});

function generateSentence(isipesan, isinama, isiposisi) {
    return `Hai, tolong buatkan kalimat ${isipesan}. Di awal paragraph masukan kalimat ucapan terimakasih karena telah mendaftar Akun Chipo. Paragraph selanjutnya perkenalkan diri sebagai ${isinama} ${isiposisi}, Jasa Import Barang China, untuk menyapa pelanggan Chipo. Paragraph selanjutnya informasikan mengenai mendapatkan kontak customer dari formulir dan website Chipo. Paragraph selanjutnya buatkan link untuk melihat website Chipo. Link Website : https://idchipo.com/. Paragraph selanjutnya buatkan kalimat agar tidak mereport / melaporkan sebagai spam. Paragraph selanjutnya jika customer tidak berkenan untuk melanjutkan, maka ketik Lain Kali. Paragraph selanjutnya jika customer berkenan untuk melanjutkan, maka ketik Oke. Di Akhir kalimat masukan kalimat berikut :
    ${isinama}
    ${isiposisi}
    Chipo Indonesia
    Soho Pancoran Tower Noble, lantai 15,
    Jl. Letnan MT Haryono, Kav. 2-3 Pancoran,
    Jakarta, Indonesia, Jakarta.
    https://idchipo.com/`;
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(function () {
        toast.classList.add('show');
    }, 100);

    setTimeout(function () {
        toast.classList.remove('show');
        setTimeout(function () {
            toast.remove();
        }, 300);
    }, 2000);
}