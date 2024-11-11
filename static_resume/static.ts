document.getElementById("dawnload")!.addEventListener("click", () => {
    const editdiv = document.getElementById("editdiv");
    if (editdiv) {
        editdiv.style.display = "none";
    }
    const printcontent = document.getElementById("maindiv")!.innerHTML;
    const orgnalcontent = document.body.innerHTML;

    document.body.innerHTML = printcontent;
    window.print();
    document.body.innerHTML = orgnalcontent;

    window.location.reload();
});
