/**
 * 
 */
package com.simpsolu;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import com.simpsolu.restful.MessagingApi;

@Component
@ApplicationPath("/api")
public class JaxRSConfig extends ResourceConfig {
    public JaxRSConfig() {
        registerEndpoints();
    }

    private void registerEndpoints() {
        register(MessagingApi.class);
    }
}