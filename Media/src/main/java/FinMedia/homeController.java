package FinMedia;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class homeController {

    @GetMapping
    public String defaultHome() {
        return "index"; // Loads home page
    }

    @GetMapping("home")
    public String home() {
        return "index"; // Loads templates/index.html
    }

    @GetMapping("about")
    public String about() {
        return "about"; // Loads about.html
    }

    @GetMapping("contact")
    public String contact() {
        return "contact"; // Loads contact.html
    }

    @GetMapping("gallery")
    public String gallery() {
        return "gallery"; // Loads gallery.html
    }



}
