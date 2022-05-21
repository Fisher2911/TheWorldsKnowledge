package io.github.fisher2911.theworldsknowledge.web;

import io.github.fisher2911.theworldsknowledge.data.InformationPost;
import io.github.fisher2911.theworldsknowledge.data.Post;
import io.github.fisher2911.theworldsknowledge.data.provider.PostProvider;
import io.github.fisher2911.theworldsknowledge.data.provider.UserProvider;
import io.github.fisher2911.theworldsknowledge.util.JSONUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

@Controller
public class WebController {

    private final Map<Long, Post> posts = new HashMap<>();

    @Autowired
    private UserProvider userProvider;
    @Autowired
    private PostProvider postProvider;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("")

    @PostMapping("/")
    public String indexPost() {
        return "index";
    }

    @GetMapping("/view-posts")
    public String viewPosts() {
        return "view-posts";
    }

    @GetMapping("/post/{id}")
    public String viewPost(final HttpServletResponse response, @PathVariable final Long id) {
        if (id == null) {
            return null;
        }
        final Cookie cookie = new Cookie("post-id", String.valueOf(id));
        cookie.setPath("/");
        response.addCookie(cookie);
        System.out.println("Adding cookie: " + String.valueOf(id));
//        final Optional<Post> optional = this.postProvider.get(id);
        //        if (optional.isEmpty()) return "view-posts";
        return "view-post";
//        return this.posts.get(id);
    }

    @PostMapping("/api/post/get/{id}")
    @ResponseBody
    public Map<String, String>/*Post*/ getPost(@PathVariable final String id) {
        final Post post = this.posts.get(Long.valueOf(id));
        if (post == null) return null;
        System.out.println("Sending post: " + post + " for id: " + id);
        return JSONUtil.toJSON(post);
//        return post;
    }

    @GetMapping("/post")
    public String viewPost() {
        return "error";
    }

    @GetMapping("/create-post")
    public String createPost() {
        return "create-post";
    }

    @PostMapping("/api/post/create")
    @ResponseBody
    public String sendPost(@RequestBody final InformationPost informationPost) {
        final long id = informationPost.getId();
        posts.put(id, informationPost);
        System.out.println("Added post: " + informationPost);
        return "create-post";
    }

    @PostMapping("/api/post/next-id")
    @ResponseBody
    public long getNextId() {
        return new Random().nextLong();
    }

    @PostMapping("/view-posts")
    @ResponseBody
    public Collection<Map<String, String>> sendPostsLists() {
        return this.posts.values().
                stream().
                sorted((o1, o2) -> Long.compare(o2.getTimePosted(), o1.getTimePosted())).
                map(JSONUtil::toJSON).
                toList();
    }

}
