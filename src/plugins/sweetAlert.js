import Swal from "sweetalert2";

const ToastConfirmation = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});

const ToastError = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: true
});

export default {
    install(Vue,) {
        Vue.prototype.$sweetConfirmation = async function(config = {}) {
            let title = config.title
                ? config.title
                : "Confirmer la suppression";

            title = config.value ? `${title} de: ${config.value}` : title;

            const result = await Swal.fire({
                text: title,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: config.confirmText
                    ? config.confirmText
                    : "Oui, confirmer",
                cancelButtonText: config.cancelText ? config.cancelText : "Non",
                reverseButtons: true
            });

            return result.isConfirmed;
        };

        Vue.prototype.$sweetError = function(codeError) {
            ToastError.fire({
                icon: "error",
                title: "Oops...",
                html: `Une erreur est survenue <br> Merci de contacter le support avec le code suivant : <b>${codeError}</b>`
            });
        };

        Vue.prototype.$sweetNotif = function(title) {
            ToastConfirmation.fire({
                icon: "success",
                title: title ? title : "Opération réussie"
            });
        };
    }
};
