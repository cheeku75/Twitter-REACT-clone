import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
  
    const sendTweet = (e) => {
      e.preventDefault();
  
      db.collection("posts").add({
        displayName: "Vishesh",
        username: "cheeku__75",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
      });
  
      setTweetMessage("");
      setTweetImage("");
    };
  
    return (
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar src="https://im.rediff.com/cricket/2023/jan/17kohli1.jpg" />
            <input
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="What's happening?"
              type="text"
            />
          </div>
          <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
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