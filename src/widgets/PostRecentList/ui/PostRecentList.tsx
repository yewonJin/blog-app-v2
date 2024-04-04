import { PostCard } from "@/entities/post";
import { getPost } from "@/entities/post";
import { StyledPostRecentList } from "./PostRecentList.styled";

export async function PostRecentList() {
  const posts = await getPost();

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
