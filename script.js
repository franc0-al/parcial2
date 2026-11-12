var slides = document.getElementsByClassName("slide");
var actual = 0;

function mostrar() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("activa");
  }
  slides[actual].classList.add("activa");
  document.getElementById("numero").innerHTML = (actual + 1) + " / " + slides.length;
}

function siguiente() {
  if (actual < slides.length - 1) {
    actual = actual + 1;
    mostrar();
  }
}

function anterior() {
  if (actual > 0) {
    actual = actual - 1;
    mostrar();
  }
}

document.onkeydown = function (evento) {
  if (evento.key == "ArrowRight") {
    siguiente();
  }
  if (evento.key == "ArrowLeft") {
    anterior();
  }
};

mostrar();