// --- Data Login yang Ditentukan ---
const USERNAME_VALID = "ahmad2017";
const PASSWORD_VALID = "integrity";

// --- Fungsi untuk menangani proses Login ---
function handleLogin() {
    // 1. Ambil nilai dari input form
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // 2. Lakukan pengecekan otentikasi
    if (usernameInput === USERNAME_VALID && passwordInput === PASSWORD_VALID) {
        // --- LOGIN SUKSES ---
        
        // 1. Tampilkan Alert Sukses
        alert("Login Sukses: Login Berhasil!");

        // 2. Arahkan ke halaman baru
        // Kita akan membuat halaman baru secara dinamis menggunakan window.open
        const successContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Login Sukses</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        text-align: center; 
                        padding-top: 50px; 
                        background-color: #d4edda; 
                        color: #155724;
                    }
                    h1 {
                        border: 2px solid #155724;
                        display: inline-block;
                        padding: 10px 20px;
                        border-radius: 5px;
                        background-color: #c3e6cb;
                    }
                </style>
            </head>
            <body>
                <h1>Login Sukses: Login Berhasil</h1>
            </body>
            </html>
        `;
        
        // Buka tab atau jendela baru dan tulis konten sukses di dalamnya
        const successWindow = window.open("", "_blank");
        successWindow.document.write(successContent);
        successWindow.document.close();

    } else {
        // --- LOGIN GAGAL ---
        
        // 1. Tampilkan Alert Gagal
        alert("Login Gagal: Username atau Password salah. Silakan coba lagi.");

        // 2. Tidak ada perpindahan halaman (tetap di login.html)
    }
}