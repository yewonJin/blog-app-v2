"use client";

import { PostCard, Post } from "@/entities/post";
import { useCategoryStore } from "@/entities/category";
import { getDate } from "@/shared/lib";
import { StyledPostRecentList } from "./PostRecentList.styled";

export function PostRecentList({ posts }: { posts: Post[] }) {
  const category = useCategoryStore((state) => state.sortBy);

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
