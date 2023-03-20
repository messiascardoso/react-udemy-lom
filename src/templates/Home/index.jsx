import "./styles.css";
import { useEffect, useState, useCallback } from "react";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Botton";
import { TextInput } from "../../components/TextInput";


export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setallPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage ] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = (page + postsPerPage) >= allPosts.length;

  const filteredPosts = searchValue ?
  allPosts.filter(post => {
    return post.title.toLowerCase()
    .includes(searchValue.toLowerCase());
  })
  : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setallPosts(postsAndPhotos)
  }, []);

  useEffect(()=> {
     handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage );
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }

  return (
    <section className="container">

      <TextInput searchValue={searchValue} handleChange={handleChange}/>

      { filteredPosts.length > 0 &&
        (<Posts posts={filteredPosts} />)
      }

      { filteredPosts.length === 0 &&
        (<p>Não existem posts</p>)
      }

      <div className="button-container">
        {!searchValue && (
          <Button
            text="Load more posts"
            onMorePage={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
};

export default Home;
