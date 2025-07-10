
import { Feed } from "./components/Feed";
import NewsAside from "../components/newsAside/NewsAside";
import TimedPostsSection from "../components/timedPosts/TimedPostsSection";
import TimedPostsCarousel from "../components/timedPosts/TimedPostsCarousel";

export const FeedPage = () => {
  return (
    <div className="flex justify-center w-full">
      
      <div className="w-full max-w-[1072px] flex flex-col md:flex-row gap-6">
        <section className="flex-1 flex flex-col gap-6">
          <div>
            <TimedPostsCarousel />
          </div>
          <Feed />
        </section>

        <div className="w-full md:w-80 shrink-0">
          <NewsAside />
        </div>
      </div>
    </div>
  );
};


export default FeedPage;
