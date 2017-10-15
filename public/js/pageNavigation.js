function showModal() {
    document.getElementById("imageModal").style.display = 'table';
}

function closeModal() {
    document.getElementById("imageModal").style.display = 'none';
}

document.getElementsByClassName("lightwidget__image-wrapper").onclick = function showModal() {
    
}

function goBack() {
    window.history.back();
}

function navigateToGallery() {
    window.location.href = '/gallery'
}

function navigateToSound() {
    window.location.href = '/zvuk.html'
}

function navigateToSoundRider() {
    window.location.href = '/services/sound'
}

function navigateToLightRider() {
    window.location.href = '/services/light'
}
function navigateToLight() {
    window.location.href = '/svitlo.html'
}

function navigateToScene() {
    window.location.href = '/services/scene'
}

function navigateToLed() {
    window.location.href = '/gallery/svitlodiodni_ekrany'
}

