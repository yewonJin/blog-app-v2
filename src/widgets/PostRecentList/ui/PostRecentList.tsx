import { Post, PostCard } from "@/entities/post";
import { StyledPostRecentList } from "./PostRecentList.styled";

type Props = {
  posts: Omit<Post, "content">[];
};

export function PostRecentList({ posts }: Props) {
  return (
    <div>
      <StyledPostRecentList>
        {posts.map((post) => (
          <PostCard
            key={post.postNumber}
            postNumber={post.postNumber.toString()}
            title={post.title}
            summary={post.summary}
            category={post.category}
            date={post.date.toISOString().split("T")[0]}
          />
        ))}
      </StyledPostRecentList>
    </div>
  );
}
