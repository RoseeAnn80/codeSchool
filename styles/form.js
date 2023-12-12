
document.addEventListener('DOMContentLoaded', function () {
    // Získání formuláře a jeho prvků
    const loginForm = document.querySelector('.panel-form');
    const forgottenPasswordDialog = document.getElementById('forgotten-password');
    
    // Přidání posluchačů událostí na formulář
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Zamezení odeslání formuláře
        
        // Zde můžete prověřit přihlašovací údaje
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulace úspěšného přihlášení
        const validEmail = 'vasemail@example.com';
        const validPassword = 'vaseheslo';

        if (email === validEmail && password === validPassword) {
            showToast('Přihlášení proběhlo v pořádku', 'success');
        } else {
            showToast('Vaše přihlašovací údaje nejsou správné', 'error');
        }
    });

    // Posluchač události pro otevření modálního okna pro zapomenuté heslo
    const openDialogLinks = document.querySelectorAll('.open-dialog');
    openDialogLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            forgottenPasswordDialog.showModal();
        });
    });

    // Posluchač události pro zavření modálního okna pro zapomenuté heslo
    const closeDialogButton = document.querySelector('.close-dialog');
    closeDialogButton.addEventListener('click', function () {
        forgottenPasswordDialog.close();
    });

    // Posluchač události pro odeslání formuláře pro obnovení hesla
    const forgottenPasswordForm = document.querySelector('#forgotten-password form');
    forgottenPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Zamezení odeslání formuláře

        // Zde můžete prověřit údaje pro obnovení hesla
        const regEmail = document.getElementById('reg-email').value;

        // Simulace úspěšného odeslání formuláře pro obnovení hesla
        showToast('Heslo bylo obnoveno', 'success');
        forgottenPasswordDialog.close();
    });

    // Funkce pro zobrazení toast zprávy
    function showToast(message, type) {
        const toastContainer = document.createElement('div');
        toastContainer.classList.add('toast', `toast--${type}`);
        toastContainer.textContent = message;
    
        document.body.appendChild(toastContainer);
    
        // Přidání třídy pro zobrazení
        setTimeout(function () {
            toastContainer.classList.add('toast--show');
        }, 100);
    
        // Automatické skrytí po 5 sekundách
        setTimeout(function () {
            document.body.removeChild(toastContainer);
        }, 5000);
    }
});

