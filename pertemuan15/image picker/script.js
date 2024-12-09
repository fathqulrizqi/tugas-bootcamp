function imgPicker(){
    let picker = document.getElementById('selectImg').value;
    let image = document.getElementById('imgFigure');

    if (picker == "normal"){
        image.src = 'img/Eeve.png';
        image.width = 300;
        alert('Ini adalah gambar Eeve');

    } else if (picker == "fire"){
        image.src = 'img/Flareon.png';
        image.width = 300;
        alert('Ini adalah gambar Flareon');
    } else if (picker == "water"){
        image.src = 'img/Vaporeon.png';
        image.width = 300;
        alert('Ini adalah gambar Vaporeon');
    } else if (picker == "electric"){
        image.src = 'img/Jolteon.png';
        image.width = 300;
        alert('Ini adalah gambar Jolteon');
    } else if (picker == "dark"){
        image.src = 'img/Umbreon.png';
        image.width = 300;
        alert('Ini adalah gambar Umbreon');
    } else if (picker == "psyhic"){
        image.src = 'img/Espeon.png';
        image.width = 300;
        alert('Ini adalah gambar Espeon');
    } else if (picker == "fairy"){
        image.src = 'img/Sylveon.png';
        image.width = 300;
        alert('Ini adalah gambar Sylveon');
    } else if (picker == "grass"){
        image.src = 'img/Leafeon.png';
        image.width = 300;
        alert('Ini adalah gambar Leafeon');
    } else if (picker == "ice"){
        image.src = 'img/Glaceon.png';
        image.width = 300;
        alert('Ini adalah gambar Glaceon');
    } else {
        alert('Tidak Valid!');
    }
}