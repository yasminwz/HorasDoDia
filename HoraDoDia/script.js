function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var dataAtual = new Date();
    var hora = dataAtual.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = 'foto-manha.png';
        document.body.style.background = '#e2af00';
        
    }else if (hora > 12 && hora <= 18) {
        img.src = 'foto-tarde.png';
        document.body.style.background = '#663c45';

    }else {
        img.src = 'foto-noite.png';
        document.body.style.background = '#264980';

    }
}
