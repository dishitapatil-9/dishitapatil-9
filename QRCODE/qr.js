function generateQR() {
    const qrText = document.getElementById("qrText");
    const qrimg = document.getElementById("qrimg");
    const imgBox = document.getElementById("imgBox");

    if (qrText.value.length > 0) {
        qrimg.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
            encodeURIComponent(qrText.value);

        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");

        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

function downloadQR() {
    const qrimg = document.getElementById("qrimg");

    const qrText = document.getElementById("qrText");

    if (qrimg.src && qrimg.src.includes("create-qr-code")) {
        const downloadLink = document.createElement("a");

        downloadLink.href = qrimg.src;
        downloadLink.download = "qrimg.png";

        downloadLink.click();
    } else {
        qrText.classList.add("error");

        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}