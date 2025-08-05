document.addEventListener("DOMContentLoaded", () => {
    const ramos = document.querySelectorAll(".ramo");

    ramos.forEach(ramo => {
        ramo.addEventListener("click", () => {
            if (ramo.classList.contains("bloqueado")) return;

            ramo.classList.toggle("aprobado");

            if (ramo.classList.contains("aprobado")) {
                desbloquear(ramo.dataset.id);
            } else {
                bloquearDependientes(ramo.dataset.id);
            }
        });
    });

    function desbloquear(id) {
        ramos.forEach(ramo => {
            if (ramo.dataset.req === id) {
                ramo.classList.remove("bloqueado");
            }
        });
    }

    function bloquearDependientes(id) {
        ramos.forEach(ramo => {
            if (ramo.dataset.req === id) {
                ramo.classList.add("bloqueado");
                ramo.classList.remove("aprobado");
                bloquearDependientes(ramo.dataset.id);
            }
        });
    }
});
