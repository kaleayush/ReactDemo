import React, { useState, useEffect } from "react";
import storageService from "../appwrite/StorageService";
import databaseService from "../appwrite/DatabaseService";
import { Container, PostCard } from "../Components/index";

// function AllPosts() {
//   const [post, setPost] = useState([]);
//   useEffect(() => {
//     databaseService.getAllPosts([]).then((posts) => {
//       console.log(posts.documents, "all posts");
//       if (posts) {
//         setPost(posts.documents);
//         console.log(post, "post of setPost");
//       }
//     });
//   }, []);
//   return (
//     <div className="w-full py-8">
//       {/* <Container> */}
//       <div className="flex flex-wrap">
//         {post?.map((postitem) => (
//           <div key={postitem.$id} className="p-2 w-1/4">
//             <PostCard post={post} />
//           </div>
//         ))}
//       </div>
//       {/* </Container> */}
//     </div>
//   );
// }
function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    databaseService.getAllPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
