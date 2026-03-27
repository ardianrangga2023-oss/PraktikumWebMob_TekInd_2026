const btnMaintenance = document.createElement("button");
btnMaintenance.innerText = "Maintenance Mode";
document.body.appendChild(btnMaintenance);

btnMaintenance.addEventListener("click", function() {
    statusIndicator.className = "alert alert-light";
    teksStatus.innerText = "MAINTENANCE";
});