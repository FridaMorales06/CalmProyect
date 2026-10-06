document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Lógica del Escáner Sensorial Grounding (5-4-3-2-1)
    const sensoryItems = document.querySelectorAll('.sensory-item');
    const progressBar = document.getElementById('grounding-progress');
    const progressText = document.getElementById('progress-text');
    const successAlert = document.getElementById('grounding-complete-alert');
    let completedCount = 0;
    const totalCount = sensoryItems.length; // 15 elementos en total

    sensoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (!this.classList.contains('completed')) {
                this.classList.add('completed');
                if (icon) {
                    icon.classList.replace('fa-circle', 'fa-circle-check');
                    icon.classList.replace('fa-regular', 'fa-solid');
                }
                completedCount++;
            } else {
                this.classList.remove('completed');
                if (icon) {
                    icon.classList.replace('fa-circle-check', 'fa-circle');
                    icon.classList.replace('fa-solid', 'fa-regular');
                }
                completedCount--;
            }

            // Actualizar barra y texto de progreso
            if (progressBar && progressText) {
                const percentage = (completedCount / totalCount) * 100;
                progressBar.style.width = `${percentage}%`;
                progressText.textContent = `${completedCount} de ${totalCount} completados`;
            }

            // Notificación final
            if (successAlert) {
                if (completedCount === totalCount) {
                    successAlert.classList.remove('d-none');
                } else {
                    successAlert.classList.add('d-none');
                }
            }
        });
    });

    // 2. Botón flotante para subir
    const btnBackTop = document.getElementById('btnBackTop');
    if (btnBackTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnBackTop.style.display = 'flex';
            } else {
                btnBackTop.style.display = 'none';
            }
        });

        btnBackTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});