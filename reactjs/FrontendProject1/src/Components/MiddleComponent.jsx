import { PostCard } from "./PostCard";

export const MiddleComponent = () => {
    return (
        <div className="flex-1 h-screen overflow-y-auto px-4 py-4">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    );
};