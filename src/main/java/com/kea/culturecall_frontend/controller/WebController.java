package com.kea.culturecall_frontend.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/search")
    public String index() {
        return "search";
    }

    @GetMapping("/about")
    public String about() {return "about";    }

    @GetMapping("/favorites")
    public String favorites() {
        return "favorites";
    }

    @GetMapping("/profile")
    public String profile() {
        return "profile";
    }

    @GetMapping("/payment")
    public String payment() {
        return "payment";
    }

    @GetMapping("/event")
    public String newBookingController(){
        return "event";
    }

    @GetMapping("/eventtable")
    public String adminController(){
        return "eventtable";
    }
}
