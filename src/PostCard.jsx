import React, { useState } from "react";

function PostCard() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [comment, setComment] = useState("");

  const post = {
    username: "exeonicdotcom",
    caption: `💼 Job Title: Senior React Native Developer 📱
📍 Location: Faisalabad
🕘 Full-Time, In-Office

🔹 About the Role
From concept to launch, we manage every stage of the development process, delivering fast, scalable, and user-focused apps. Come help us shape the future of mobile experiences and provide cutting-edge solutions to a growing list of clients!

🔹 What We’re Looking For
✅ 2-4 years of React Native development experience
✅ Strong in JavaScript (ES6+), Redux, Context API, & mobile architecture
✅ Proven experience building production-ready apps
✅ Integration of RESTful APIs & third-party libraries
✅ Debugging, optimization, and clean code practices
✅ Excellent communication and collaboration skills

If you're ready to lead, innovate, and grow with us, we want to hear from you!
👉 Apply Here: https://www.exeonic.com/careers/csg5VpRQuBlkqQo2b0Ok

#HiringNow #ReactNative #SeniorDeveloper #TechJobs #FaisalabadJobs #Exeonic #SoftwareCareers #ReactNativeJobs`
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (!isLiked ? prev + 1 : prev - 1));
  };

  const toggleCaption = () => {
    setIsExpanded(!isExpanded);
  };

  const formatCaption = (text) => {
    return text.split(/(\s+)/).map((word, idx) =>
      word.startsWith("#") ? (
        <span key={idx} className="text-blue-600">{word}</span>
      ) : (
        <span key={idx}>{word}</span>
      )
    );
  };

  return (
    <div className="w-[468px] bg-white p-4 mt-1">
      {/* Buttons */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex space-x-4">
          <button className="text-gray-700 hover:text-black" onClick={toggleLike}>
            <img
              className="w-5 h-5 relative right-3 bottom-2 xxs:left-1 xxxs:left-1 md:-left-3 lg:-left-2 xs:left-1"
              src={
                isLiked
                  ? "https://cdn-icons-png.flaticon.com/512/833/833472.png"
                  : "https://brandeps.com/icon-download/H/Heart-icon-vector-33.svg"
              }
              alt="Like"
            />
          </button>
          <button className="text-gray-700 hover:text-black">
            <img
              className="w-5 h-5 relative right-4 bottom-2 xxs:left-1 xxxs:left-1 lg:-left-2 md:-left-3 xs:left-1"
              src="messenger.png"
              alt="Messenger"
            />
          </button>
          <button className="text-gray-700 hover:text-black">
            <img
              className="w-4 h-5 -rotate-[42deg] relative right-4 bottom-3 md:-left-3 xxs:left-1 xxxs:left-1 lg:-left-2 xs:left-1"
              src="send.png"
              alt="Send"
            />
          </button>
        </div>
        <button className="text-gray-700 hover:text-black">
          <img
            className="w-6 h-5 relative left-3 bottom-2 md:left-3 lg:left-3 xxxs:-left-1 xs:left-1 xxs:-left-1"
            src="save.png"
            alt="Save"
          />
        </button>
      </div>

      {/* Likes */}
      {likeCount > 0 && (
        <div className="text-sm text-gray-700 mb-1 relative right-3 md:-left-3 lg:-left-2 xxs:left-1 xxxs:left-1 xs:left-1">
          {likeCount} {likeCount === 1 ? "like" : "likes"}
        </div>
      )}

      {/* Caption */}
      <div className="text-sm leading-snug whitespace-pre-line">
        <span className="font-semibold relative right-3 xxs:left-1 xxxs:left-1 md:-left-3 lg:-left-2 xs:left-1">
          {post.username}
        </span>
        <span className="relative right-3 xs:left-1 xxs:left-1 xxxs:left-1 md:-left-3 lg:-left-2 ml-1">
          {" "}
          We’re Hiring.
          {!isExpanded && (
            <span
              className="text-gray-500 cursor-pointer ml-1"
              onClick={toggleCaption}
            >
              more
            </span>
          )}
        </span>
        {isExpanded && (
          <div className="relative right-3 mt-2 xxs:left-1 xxxs:left-1 md:-left-3 lg:-left-2 xs:left-1 text-sm text-gray-800 whitespace-pre-line">
            {formatCaption(post.caption)}
            <span
              className="text-gray-500 cursor-pointer ml-2"
              onClick={toggleCaption}
            >
              less
            </span>
          </div>
        )}
      </div>

      {/* Comment Field */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="text-sm text-gray-700 w-[468px] outline-none relative right-2"
        />
        <div className="relative left-5 group w-10 ">
          <img
            src="emoji.png"
            alt="emoji"
            className="w-5 h-5 cursor-pointer"
          />
          <div className="absolute bottom-[-80px] left-0 hidden group-hover:flex bg-white border border-gray-300 rounded shadow-md p-2 gap-1 z-[9999] w-44 flex-wrap text-xl">
            <span className="cursor-pointer">😀</span>
            <span className="cursor-pointer">😂</span>
            <span className="cursor-pointer">😍</span>
            <span className="cursor-pointer">😎</span>
            <span className="cursor-pointer">🥲</span>
            <span className="cursor-pointer">😢</span>
            <span className="cursor-pointer">🥰</span>
            <span className="cursor-pointer">👍</span>
          </div>
        </div>
      </div>

      {/* Line under comment */}
      <hr className="mt-3 border-t border-gray-300 w-[468px] relative right-3 " />
    </div>
  );
}

export default PostCard;
