import React from "react";
import Card from "./component/Card";
import Price from "./component/Price";
import Profile from "./component/profile";
import myimg from "./ETH.jpg"
import myimg2 from "./image-avatar.png"
import "./post.css"

function Post() {
    return(
        <div className="post">
            <Card pic = {myimg} title = "ETH #5665" desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste sit deserunt, ad, aut ipsum ab nesciunt dolorem libero dolore laudantium? A doloremque iure dicta sint cupiditate dignissimos. Obcaecati, quibusdam!" />
            <Price price = "0.05ETH" time = "3 days"/>
            <Profile path = {myimg2} NameProfile = "Abdelali Sid Ahmed"/>
        </div>
    );
};

export default Post;