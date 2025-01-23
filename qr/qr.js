const url = "https://www.youtube.com/watch?v=zzSgzO1E6l8"; // URL del código QR
const logo = "https://i.ibb.co/0mRXFVv/logo.png"; // Ruta de tu logo

// Genera el código QR con colores personalizados
QRCode.toCanvas(document.getElementById('qrcode'), url, {
    width: 800,           // Tamaño del código QR
    color: {
        dark: '#000000',  // Color de los módulos (negro)
        light: '#ffffff'  // Color de fondo (blanco)
    },
    correctLevel: 3 // Nivel de corrección: 3 es el valor numérico para "H"
}, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.log('¡Código QR generado!');
        // Agrega el logo en el centro del código QR
        const canvas = document.getElementById('qrcode');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = function() {
            const logoSize = 180;  // Tamaño del logo
            const x = (canvas.width / 2) - (logoSize / 2);
            const y = (canvas.height / 2) - (logoSize / 2);
            ctx.drawImage(img, x, y, logoSize, logoSize); // Dibuja el logo
        };
        img.src = logo;
    }
});