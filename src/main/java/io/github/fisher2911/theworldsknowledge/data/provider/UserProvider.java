package io.github.fisher2911.theworldsknowledge.data.provider;

import io.github.fisher2911.theworldsknowledge.data.User;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserProvider implements Provider<User, String> {

    public UserProvider() {
    }

    // TODO: implement
    @Override
    public Optional<User> get(final String id) {
        return Optional.of(new User(id, "Name"));
    }
}
