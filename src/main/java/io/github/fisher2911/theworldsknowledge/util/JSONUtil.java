package io.github.fisher2911.theworldsknowledge.util;

import io.github.fisher2911.theworldsknowledge.data.InformationPost;
import io.github.fisher2911.theworldsknowledge.data.Post;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JSONUtil {

    public static Map<String, String> toJSON(final Post post) {
        final Map<String, String> map = new HashMap<>();
        map.put("id", String.valueOf(post.getId()));
        map.put("title", post.getTitle());
        map.put("content", post.getContent());
        map.put("authorId", post.getAuthorId());
        map.put("authorName", post.getAuthorName());
        map.put("timePosted", String.valueOf(post.getTimePosted()));
        return map;
    }

    public static Map<String, String> toJSON(final InformationPost post) {
        final Map<String, String> map = toJSON((Post) post);
        map.put("resources", toJSON(post.getResources()));
        return map;
    }

    public static String toJSON(final List<String> posts) {
        final StringBuilder builder = new StringBuilder();
        builder.append("[");
        for (final String post : posts) {
            builder.append(post);
            builder.append(",");
        }
        builder.deleteCharAt(builder.length() - 1);
        builder.append("]");
        return builder.toString();
    }

}
