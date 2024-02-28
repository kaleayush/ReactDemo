import { useEffect, useState } from "react";
import databaseService from "../appwrite/DatabaseService";
import storageService from "../appwrite/StorageService";
import React from "react";
import { Container, PostCard } from "../Components";
import config from "../config/config";
function Home() {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    databaseService.getAllPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        console.log(config.appwriteDataBaseID, "databaseId");
      }
    });
  }, []);
  if (Posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-blod hover:text-gray-500">
                Login to Read Post
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {Posts.map(() => {
            <div className="p-2 w-1/4">
              <PostCard {...Posts} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Home;
