

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert('Respostas enviadas! Verifique o seu progresso.');
});

function loadVideo(title, src) {
    const videoPlayer = document.getElementById('main-video');
    const videoTitle = document.getElementById('video-title');
    videoTitle.textContent = title;
    videoPlayer.src = src;
    videoPlayer.play();
}
