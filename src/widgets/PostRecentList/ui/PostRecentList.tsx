"use client";

import { PostCard, TPost } from "@/entities/post";
import { useStore } from "@/entities/category";
import { StyledPostRecentList } from "./PostRecentList.styled";

export function PostRecentList({ posts }: { posts: TPost[] }) {
  const category = useStore((state) => state.sortBy);

  return (
    <StyledPostRecentList>
      {posts
        .filter((x) => (category === "" ? true : x.category === category))
        .map((post) => (
          <PostCard
            key={post.postNumber}
            postNumber={post.postNumber.toString()}
            title={post.title}
            summary={post.summary}
            category={post.category}
            date={new Date(post.date).toISOString().split("T")[0]}
          />
        ))}
    </StyledPostRecentList>
  );
}
