package com.kea.culturecall_frontend.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WebController {

    @GetMapping("/search")
    public String index() {
        return "search";
    }

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
}
