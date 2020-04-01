package com.simpsolu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.simpsolu.service.MessagingStorage;

@SpringBootApplication
public class SpringbootAngularjsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootAngularjsApplication.class, args);
	}
	
	@Bean
	protected MessagingStorage getMessagingStorage() {
		return new MessagingStorage();
	}
}
