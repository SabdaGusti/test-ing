document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    let isValid = true;

    const amountInput = document.getElementById('amount');
    const amountValue = parseFloat(amountInput.value.trim());
    const simbolAmount = document.getElementById('simbolAmount');

    const yearsInput = document.getElementById('years');
    const yearsValue = parseFloat(yearsInput.value.trim());
    const simbolYears = document.getElementById('simbolYears');

    const rateInput = document.getElementById('rate');
    const rateValue = parseFloat(rateInput.value.trim());
    const simbolRate = document.getElementById('simbolRate');

    const radioInput = document.querySelector('input[name="radio"]:checked');
    const radioError = document.getElementById('radioError');

    // Validasi amount
    if (isNaN(amountValue)) {
        document.getElementById('amountError').style.display = 'inline';
        simbolAmount.classList.add('red');
        isValid = false;
    } else {
        document.getElementById('amountError').style.display = 'none';
        simbolAmount.classList.remove('red');
    }

    // Validasi years
    if (isNaN(yearsValue)) {
        document.getElementById('yearsError').style.display = 'inline';
        simbolYears.classList.add('red');
        isValid = false;
    } else {
        document.getElementById('yearsError').style.display = 'none';
        simbolYears.classList.remove('red');
    }

    // Validasi rate
    if (isNaN(rateValue)) {
        document.getElementById('rateError').style.display = 'inline';
        simbolRate.classList.add('red');
        isValid = false;
    } else {
        document.getElementById('rateError').style.display = 'none';
        simbolRate.classList.remove('red');
    }

    // Validasi radio button
    if (!radioInput) {
        radioError.style.display = 'inline';
        isValid = false;
    } else {
        radioError.style.display = 'none';
    }

    // Remove display green Amount
    if (isValid = true) {
        simbolAmount.classList.remove('green');
    }

    // Menyembunyikan elemen hasil jika semua input valid
    if (isValid) {
        const monthlyRate = rateValue / 100 / 12;
        const numberOfPayments = yearsValue * 12;
        let monthlyRepayment, totalRepayment;

        if (radioInput.id === 'repayment') {
            // Perhitungan untuk Repayment
            monthlyRepayment = (amountValue * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
        } else {
            // Perhitungan untuk Interest Only
            monthlyRepayment = amountValue * monthlyRate;
        }

        totalRepayment = monthlyRepayment * numberOfPayments;

        // Tampilkan hasil
        document.getElementById('displayMountly').value = monthlyRepayment.toFixed(2);
        document.getElementById('displayTotal').value = totalRepayment.toFixed(2);

        // Sembunyikan beforeResultBox dan tampilkan afterResultBox
        document.getElementById('beforeResultBox').style.display = 'none';
        document.getElementById('afterResultBox').style.display = 'block';
    }

});

//Mengubah warna radio ketika diklik
document.querySelectorAll('.radio-button input[type="radio"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
        document.querySelectorAll('.radio-button').forEach(function (rb) {
            rb.classList.remove('selected');
        });
        this.parentElement.classList.add('selected');
    });
});

// Tombol Clear
document.getElementById('clear').addEventListener('click', function () {
    // Menghapus nilai pada semua input number
    document.querySelectorAll('input[type="number"]').forEach(function (input) {
        input.value = '';
    });

    // Menghapus centang pada semua radio button
    document.querySelectorAll('input[name="radio"]').forEach(function (radio) {
        radio.checked = false;
    });

    document.querySelectorAll('.radio-button').forEach(function (rb) {
        rb.classList.remove('selected');
    });

    // Menghapus pesan error dan kelas 'red' dan 'green' dari elemen yang memiliki error dan status input
    document.querySelectorAll('.error').forEach(function (errorElement) {
        errorElement.style.display = 'none';
    });

    document.querySelectorAll('.simbol').forEach(function (simbolElement) {
        simbolElement.classList.remove('red', 'green');
    });

    document.getElementById('beforeResultBox').style.display = 'block';
    document.getElementById('afterResultBox').style.display = 'none';

});


// Dapatkan elemen input dan container simbol
const amountInput = document.getElementById('amount');
const simbolAmount = document.getElementById('simbolAmount');

// Tambahkan event listener untuk mendeteksi perubahan pada input
amountInput.addEventListener('input', function () {
    // Jika input tidak kosong, tambahkan kelas green pada simbolAmount
    if (amountInput.value.trim() !== '') {
        simbolAmount.classList.add('green');
    } else {
        simbolAmount.classList.remove('green');
    }
});

