import React from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={12}
        postImg={"/post1.png"}
        postTitle={"This looks decent"}
      />
      <UserPost
        likes={34}
        replies={2}
        postImg={"/solana.png"}
        postTitle={"Im happy this is going so smoothly"}
      />
      <UserPost likes={1000} replies={123} postTitle={"All Hail The ZUCC"} />
    </>
  );
};

export default UserPage;
