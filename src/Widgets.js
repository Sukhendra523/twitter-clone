import React from "react";
import "./widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1036192560916705280"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Sukhendra523"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/Sukhendra523"}
          options={{ text: "#reactjs is awesome", via: "Sukhendra523" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
