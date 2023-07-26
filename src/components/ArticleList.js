import React from "react";
import Article from "./Article";

function ArticleList ({posts}) {
    return (
        <main>
            {
        posts.map((data, i) => {
          return (
            <Article
              key={i}
                id={posts[i].id}
                title={posts[i].title}
                date={posts[i].date}
                preview={posts[i].preview}
                minutes={posts[i].minutes}
            />
          );
          })}
        </main>
    );
}

export default ArticleList;