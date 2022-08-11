function active(id) {
  document.getElementById(id).classList.add("active");
  if (id == "link1") {
    document.getElementById("link2").classList.remove("active");
    document.getElementById("link3").classList.remove("active");
    document.getElementById("link4").classList.remove("active");
    document.getElementById("link5").classList.remove("active");
    document.getElementById("link6").classList.remove("active");
  } else if (id == "link2") {
    document.getElementById("link1").classList.remove("active");
    document.getElementById("link3").classList.remove("active");
    document.getElementById("link4").classList.remove("active");
    document.getElementById("link5").classList.remove("active");
    document.getElementById("link6").classList.remove("active");
  } else if (id == "link3") {
    document.getElementById("link1").classList.remove("active");
    document.getElementById("link2").classList.remove("active");
    document.getElementById("link4").classList.remove("active");
    document.getElementById("link5").classList.remove("active");
    document.getElementById("link6").classList.remove("active");
  } else if (id == "link4") {
    document.getElementById("link1").classList.remove("active");
    document.getElementById("link3").classList.remove("active");
    document.getElementById("link2").classList.remove("active");
    document.getElementById("link5").classList.remove("active");
    document.getElementById("link6").classList.remove("active");
  } else if (id == "link5") {
    document.getElementById("link1").classList.remove("active");
    document.getElementById("link3").classList.remove("active");
    document.getElementById("link4").classList.remove("active");
    document.getElementById("link2").classList.remove("active");
    document.getElementById("link6").classList.remove("active");
  } else if (id == "link6") {
    document.getElementById("link1").classList.remove("active");
    document.getElementById("link3").classList.remove("active");
    document.getElementById("link4").classList.remove("active");
    document.getElementById("link5").classList.remove("active");
    document.getElementById("link2").classList.remove("active");
  }
}
