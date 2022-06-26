function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        img.src = 'assets/images/manha.jpg';
       document.body.style.backgroundColor = '#ffd861'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'assets/images/tarde.jpg';
        document.body.style.backgroundColor = '#837023'
    } else {
        img.src = 'assets/images/noite.jpg'
        document.body.style.backgroundColor = '#110e21'
    }
}