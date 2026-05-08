document.addEventListener('DOMContentLoaded', function () {



    (function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init({
            publicKey: "DT5qDSnFIT-0YPQbo",
        });
    })();

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('online-cv-contact', 'online_cv_contact', this)
            .then(() => {
                console.log('SUCCESS!');
                let messageSentToast = bootstrap.Toast.getOrCreateInstance(
                    document.getElementById('message-sent-toast')
                  );
                  messageSentToast.show();
            }, (error) => {
                console.log('FAILED...', error);
                let messageNotSentToast = bootstrap.Toast.getOrCreateInstance(
                    document.getElementById('message-not-sent-toast')
                  );
                  messageNotSentToast.show();
            });
    });

    document.getElementById('current-year').innerHTML = new Date().getFullYear() + ' © Leon Potgieter';

    var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });

})