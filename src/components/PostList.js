import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Rafael Maia",
          avatar:
            "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg"
        },
        date: "05 Jun 2019",
        content: "Outro comentário.",
        comments: [
          {
            id: 1,
            author: {
              name: "Arthur",
              avatar:
                "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg"
            },
            content: "Olá."
          },
          {
            id: 2,
            author: {
              name: "Arthur",
              avatar:
                "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg"
            },
            content: "Olá."
          }
        ]
      }
    ]
  };

  render() {
    return this.state.posts.map(post => <Post key={post.id} data={post} />);
  }
}

export default PostList;
