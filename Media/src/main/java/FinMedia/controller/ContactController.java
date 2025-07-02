package FinMedia.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import FinMedia.service.EmailService;

@CrossOrigin(origins = "https://thehealthandtouristguide.com")
 // Use only for local dev
@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public String sendMessage(@RequestParam Map<String, String> requestParams) {
        String name = requestParams.get("name");
        String email = requestParams.get("email");
        String phone = requestParams.get("phone");  // Capture phone number
        String subject = requestParams.get("subject");
        String message = requestParams.get("message");

        if (name == null || email == null || phone == null || subject == null || message == null) {
            return "Error: Missing form fields";
        }

        // Send confirmation email to the visitor
        String visitorMessage = "Dear " + name + ",\n\nThank you for contacting us. We have received your message:\n" + message +
                                "\n\nWe will get back to you shortly.\n\nBest regards,\nHTGA Team";
        emailService.sendEmail(email, "Thank you for contacting us", visitorMessage);

       // Send visitor's details to your email
        String ownerMessage = "New Contact Form Submission:\n\nName: " + name + "\nEmail: " + email +
        "\nPhone: " + phone + "\nSubject: " + subject + "\nMessage: " + message;
        emailService.sendEmail("thehealthtouristguide@gmail.com", "New Contact Form Submission", ownerMessage);

        return "Message sent successfully!";
    }
}

