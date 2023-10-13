function carregar() {
    var men = window.document.getElementById('msg1');
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        img1.src = 'src/imagens/manha.jpg';
        document.body.style.backgroundColor = '#E2CC81';
        msg.innerHTML = 'Bom Dia';
    } else if(hora >= 12 && hora <= 18){
        img.src = 'src/imagens/tarde.jpg';
        document.body.style.backgroundColor = '#85563A';
        msg1.innerHTML = 'Boa Tarde';
    }else{
        img.src = 'src/imagens/noite.jpg';
        document.body.style.backgroundColor = '#19254B';
        msg1.innerHTML = 'Boa Noite';
    }
}
