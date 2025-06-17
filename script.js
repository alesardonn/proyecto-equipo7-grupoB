// Archivo: script.js

// Alerta en el botón de estadísticas
function mostrarAlerta() {
    alert("Actualización 2025: El desempleo juvenil descendió al 20%, pero sigue siendo crítico en sectores tecnológicos, comercio y servicios.");
}

// Buscador de recursos
function buscarRecursos() {
    const recursos = [
        "Guía para hacer un CV profesional",
        "Tips para entrevistas laborales",
        "Habilidades más demandadas en 2025"
    ];
    const query = document.getElementById("buscador").value.toLowerCase();
    const resultados = recursos.filter(r => r.toLowerCase().includes(query));
    const divResultados = document.getElementById("resultadosBusqueda");
    divResultados.innerHTML = "";

    if (resultados.length > 0) {
        resultados.forEach(r => {
            const p = document.createElement("p");
            p.textContent = r;
            divResultados.appendChild(p);
        });
    } else {
        divResultados.innerHTML = "<p>🔎 No se encontraron resultados.</p>";
    }
}

// Calculadora de empleabilidad
function calcular() {
    const experiencia = parseInt(document.getElementById("experiencia").value);
    const digital = parseInt(document.getElementById("digital").value);
    const estudios = parseInt(document.getElementById("estudios").value);
    const puntaje = experiencia + digital + estudios;

    let resultado = "";
    if (puntaje >= 4) {
        resultado = "🎯 Alta empleabilidad. Tienes buen perfil para iniciar tu búsqueda laboral.";
    } else if (puntaje >= 2) {
        resultado = "🧭 Empleabilidad media. Puedes mejorar tus competencias digitales o sumar experiencia.";
    } else {
        resultado = "⚠ Baja empleabilidad. Necesitas formarte y buscar apoyo en capacitaciones.";
    }

    document.getElementById("resultadoCalculo").innerHTML = resultado;
}

// Validación básica del formulario de Red de Apoyo
document.getElementById("formularioApoyo").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Gracias por enviar tu solicitud. Un mentor se pondrá en contacto contigo pronto.");
});

// Toggle para FAQs
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const toggle = element.querySelector('.faq-toggle');
    
    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        toggle.classList.remove('rotated');
        toggle.textContent = '+';
    } else {
        // Cerrar todas las otras FAQs
        document.querySelectorAll('.faq-answer.active').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.faq-toggle.rotated').forEach(item => {
            item.classList.remove('rotated');
            item.textContent = '+';
        });
        
        // Abrir la FAQ actual
        answer.classList.add('active');
        toggle.classList.add('rotated');
        toggle.textContent = '×';
    }
}

// Suscripción al newsletter
function suscribirNewsletter() {
    const email = document.getElementById("emailNewsletter").value;
    if (email && email.includes('@')) {
        alert("🎉 ¡Suscripción confirmada exitosamente! Recibirás nuestro newsletter semanal en " + email);
        document.getElementById("emailNewsletter").value = '';
    } else {
        alert("⚠️ Por favor, ingresa un email válido.");
    }
}