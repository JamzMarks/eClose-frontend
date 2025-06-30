
import { FeedComponent } from "./components/PostScrool.tsx/FeedComponent";
import NewsAside from "../components/NewsAside/NewsAside";
import CreatePost from "../components/createPost/CreatePost";
import TimedPostsSection from "../components/timedPosts/TimedPostsSection";
import TimedPostsCarousel from "../components/timedPosts/TimedPostsCarousel";

export const FeedPage = () => {
  return (
    <div className="flex justify-center p-4 w-full">
      
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row gap-6">
        <section className="flex-1 flex flex-col gap-6">
          <div>
            <TimedPostsCarousel />
          </div>
          <div>
            <CreatePost />
          </div>
          <FeedComponent />
        </section>

        {/* Sidebar */}
        <aside className="w-full md:w-80 shrink-0">
          <NewsAside />
        </aside>
      </div>
    </div>
  );
};


export default FeedPage;
