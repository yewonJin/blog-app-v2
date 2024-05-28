"use client";

import { PostCard, Post } from "@/entities/post";
import { useStore } from "@/entities/category";
import { StyledPostRecentList } from "./PostRecentList.styled";
import { getDate } from "@/shared/lib";

export function PostRecentList({ posts }: { posts: Post[] }) {
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
            date={getDate(post.date)}
          />
        ))}
    </StyledPostRecentList>
  );
}
