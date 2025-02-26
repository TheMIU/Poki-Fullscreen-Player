function copyCode() {
    let codeBlock = document.getElementById("code").innerText;
    let copyButton = document.getElementById("copyButton");

    navigator.clipboard.writeText(codeBlock).then(() => {
        copyButton.innerText = "Copied! ✅";
        copyButton.classList.add("copied");

        // Reset button text after 2 seconds
        setTimeout(() => {
            copyButton.innerText = "📋 Copy Code";
            copyButton.classList.remove("copied");
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}