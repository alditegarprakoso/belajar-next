import React from "react";
import { useRouter } from "next/router";

function DetailPost(props) {
  const { dataPost } = props;

  // const router = useRouter();
  // const { idPost } = router.query;

  return (
    <div className="my-10">
      <h3 className="font-bold text-2xl">{dataPost.title}</h3>
      <hr className="my-5" />
      <p>{dataPost.body}</p>
    </div>
  );
}

export async function getStaticPaths(context) {
  const dataPosts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  const paths = dataPosts.map((post) => ({
    params: {
      idPost: `${post.id}`, // Untuk params idPost ini harus sama dengan nama filenya
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { idPost } = context.params;

  const dataPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${idPost}`
  ).then((res) => res.json());

  return {
    props: { dataPost },
  };
}

export default DetailPost;
