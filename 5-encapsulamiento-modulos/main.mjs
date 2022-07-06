function videoPlay(id) {
    const urlSecreta = "https://platzi.com/clases/2332-javascript-poo/38627-modulos-de-ecmascript-6/" + id;
    console.log("Se está reproduciendo desde: " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platzi.com/clases/2332-javascript-poo/38627-modulos-de-ecmascript-6/" + id;
    console.log("Se pauso desde: " + urlSecreta);
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this._name = name;
        this._videoID = videoID;
    }

    reproducir() {
        videoPlay(this._videoID);
    }

    pausar() {
        videoStop(this._videoID);
    }
}
