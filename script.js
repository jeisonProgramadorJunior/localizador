function updateDateTime() {
    const now = new Date();

    // Formatear la hora
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `Hora: ${hours}:${minutes}:${seconds}`;

    // Formatear la fecha
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const year = now.getFullYear();
    document.getElementById('date').textContent = `Fecha: ${day}/${month}/${year}`;
}

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude.toFixed(2);
            const longitude = position.coords.longitude.toFixed(2);
            document.getElementById('location-text').textContent = `Ubicación: Lat ${latitude}, Lon ${longitude}`;
        }, error => {
            document.getElementById('location-text').textContent = `Ubicación: No disponible`;
        });
    } else {
        document.getElementById('location-text').textContent = `Ubicación: Geolocalización no soportada`;
    }
}

// Actualizar cada segundo
setInterval(updateDateTime, 1000);
updateDateTime(); // Llamar inicialmente para mostrar inmediatamente
updateLocation();
