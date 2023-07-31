console.log("Script running...");
document.querySelector(".wrong").style.display = "none";
document.querySelector(".ham1").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebargo");
  if (document.querySelector(".sidebar").classList.contains("sidebargo")) {
    document.querySelector(".ham1").style.display = "inline";
    document.querySelector(".wrong").style.display = "none";
  } else {
    document.querySelector(".ham").style.display = "none";
    setTimeout(() => {
      document.querySelector(".wrong").style.display = "inline";
    }, 300);
  }
});
