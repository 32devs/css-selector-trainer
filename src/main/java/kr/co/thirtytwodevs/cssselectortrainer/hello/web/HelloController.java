package kr.co.thirtytwodevs.cssselectortrainer.hello.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/hello")
public class HelloController {

	@GetMapping
	public String hello() {
		return "hello 32devs";
	}

}
