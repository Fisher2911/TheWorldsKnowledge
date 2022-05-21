package io.github.fisher2911.theworldsknowledge.data;

import io.github.fisher2911.theworldsknowledge.data.provider.Provider;

public abstract class Post implements Message, Provider<Comment, Long> {

    private long id;
    private String title;
    private String authorId;
    private String authorName;
    private String content;
    private long timePosted;

    public Post() {}

    public Post(final long id, final String title, final String authorId, final String authorName, final String content, final long timePosted) {
        this.id = id;
        this.title = title;
        this.authorId = authorId;
        this.content = content;
        this.authorName = authorName;
        this.timePosted = timePosted;
    }

    @Override
    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    @Override
    public String getAuthorId() {
        return this.authorId;
    }

    public String getAuthorName() {
        return authorName;
    }

    @Override
    public String getContent() {
        return this.content;
    }

    @Override
    public long getTimePosted() {
        return this.timePosted;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", authorId='" + authorId + '\'' +
                ", authorName='" + authorName + '\'' +
                ", content='" + content + '\'' +
                ", timePosted=" + timePosted +
                '}';
    }

}
