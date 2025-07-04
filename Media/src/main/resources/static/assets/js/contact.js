document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");
    const sendButton = form.querySelector("button");
    let isSubmitting = false; // Prevent multiple submissions

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        if (isSubmitting) return; // Prevent duplicate requests
        isSubmitting = true;

        const formData = new FormData(form);
        const phone = formData.get("phone").trim();

        // Validate phone number (exactly 12 digits)
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            responseMessage.style.color = "red";
            responseMessage.innerText = "Error: Phone number must be exactly 10 digits!";
            isSubmitting = false;
            return;
        }

        // Show loading text
        sendButton.innerText = "Sending...";
        sendButton.disabled = true;
        responseMessage.innerText = "";

        try {
            const response = await fetch("/contact/send", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Failed to send message.");
            }

            responseMessage.style.color = "green";
            responseMessage.innerText = "Message Sent Successfully!";
        } catch (error) {
            console.error("Error:", error);
            responseMessage.style.color = "red";
            responseMessage.innerText = "Error: Message Not Sent!";
        } finally {
            sendButton.innerText = "Send Message";
            sendButton.disabled = false;
            form.reset();
            isSubmitting = false;
        }
    });
});
