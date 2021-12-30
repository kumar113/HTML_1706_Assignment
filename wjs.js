function reviewForm() {
    var fname = document.getElementById("take_input").value;
    fname = fname.trim();
    if(fname == ""){
        alert("*Name field is required*");
        document.getElementById("take_input").value="";
        window.location.href="index.html";
    } 
}