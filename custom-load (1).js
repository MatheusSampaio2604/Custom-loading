document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {

        hideLoading();

    }, 1500);
});

function hideLoading() {
    document.getElementById("loadingProcesso").style.display = "none";
}

function showLoading() {
    document.getElementById("loadingProcesso").style.display = "flex";
}