package io.github.fisher2911.theworldsknowledge.data;

public class Comment implements Message {

    private final long post;
    private final long id;
    private final String category;
    private final String authorId;
    private final String content;
    private final long timePosted;
    // -1 if none
    private final long repliedTo;

    public Comment(final long post, final long id, final String category, final String authorId, final String content, final long timePosted, final long repliedTo) {
        this.post = post;
        this.id = id;
        this.category = category;
        this.authorId = authorId;
        this.content = content;
        this.timePosted = timePosted;
        this.repliedTo = repliedTo;
    }

    public long getPost() {
        return post;
    }

    @Override
    public long getId() {
        return id;
    }

    public String getCategory() {
        return category;
    }

    @Override
    public String getAuthorId() {
        return authorId;
    }

    @Override
    public String getContent() {
        return content;
    }

    @Override
    public long getTimePosted() {
        return timePosted;
    }

    public long getRepliedTo() {
        return repliedTo;
    }
}
