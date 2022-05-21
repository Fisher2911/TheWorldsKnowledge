package io.github.fisher2911.theworldsknowledge.data.provider;

import io.github.fisher2911.theworldsknowledge.data.InformationPost;
import io.github.fisher2911.theworldsknowledge.data.Post;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Optional;

@Component
public class PostProvider implements Provider<Post, Long> {

    public PostProvider() {
    }

    @Override
    public Optional<Post> get(final Long id) {
        return Optional.of(new InformationPost(
                id,
                "Test Title",
                "Fisher",
                "New Information Post",
                "This is a test post".repeat(50),
                Instant.now().getEpochSecond(),
                new ArrayList<>()
        ));
    }
}
