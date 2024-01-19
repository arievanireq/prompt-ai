document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.tampilkanHasil');
    button.addEventListener('click', function () {
        const isipesan = document.querySelector('.isipesan select').value;
        const isinama = document.querySelector('.isinama input').value;
        const isiposisi = document.querySelector('.isiposisi select').value;
        const isimateri = document.querySelector('.isimateri input').value;
        const isitune = document.querySelector('.isitune select').value;
        const isitarget = document.querySelector('.isitarget select').value;

        const kalimat = generateSentence(isipesan, isinama, isiposisi, isimateri, isitune, isitarget);

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

function generateSentence(isipesan, isinama, isiposisi, isimateri, isitune, isitarget) {
    return `Buat kalimat ${isipesan}, perkenalan diri sebagai ${isinama}, ${isiposisi} untuk menyapa pelanggan Chipo. Jelaskan tentang ${isimateri}. Gunakan gaya kalimat ${isitune}. Target ${isitarget}. Judul harus menarik tidak boleh lebih dari 80 karakter. Pada bagian akhir, Ajukan pertanyaan dan buat kalimat ajakan untuk berinteraksi.`;
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