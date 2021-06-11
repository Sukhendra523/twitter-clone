import React, { useState } from "react";
import "./tweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Sukhendra Rajawat",
      username: "sukhendra523",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "data:image/jpeg;base64,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",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="data:image/jpeg;base64,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" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;