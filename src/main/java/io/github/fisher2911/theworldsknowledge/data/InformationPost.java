package io.github.fisher2911.theworldsknowledge.data;

import java.util.List;
import java.util.Optional;

public class InformationPost extends Post {

    private List<String> resources;

    public InformationPost() {}

    public InformationPost(
            final long id,
            final String title,
            final String authorId,
            final String authorName,
            final String content,
            final long timePosted,
            final List<String> resources
    ) {
        super(id, title, authorId, authorName, content, timePosted);
    }

    @Override
    public Optional<Comment> get(final Long aLong) {
        return Optional.empty();
    }

    public List<String> getResources() {
        return resources;
    }
}
