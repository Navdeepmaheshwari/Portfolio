window.onscroll = () => {
  const nav = document.getElementById("navb");
  if (this.scrollY <= 10)
    document.getElementById("navb").classList.remove("scroll");
  else document.getElementById("navb").classList.add("scroll");
};
function myEdu() {
  document.getElementById("education").style.display = "block";
  document.getElementById("experience").style.display = "none";
  document.getElementById("eduheading").innerText = "Education";
  document.getElementById("edbtn").classList.add("selected");
  document.getElementById("exbtn").classList.remove("selected");
}

function myExp() {
  document.getElementById("education").style.display = "none";
  document.getElementById("experience").style.display = "block";
  document.getElementById("eduheading").innerText = "Experience";
  document.getElementById("exbtn").classList.add("selected");
  document.getElementById("edbtn").classList.remove("selected");
}
