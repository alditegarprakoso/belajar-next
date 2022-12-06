import React from "react";
import Link from "next/link";

export async function getServerSideProps(context) {
  const dataPosts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((response) => response.json());

  return {
    props: { dataPosts },
  };
}

function Posts(props) {
  const { dataPosts } = props;

  return (
    <>
      <h1 className="text-3xl">All Posts</h1> <br />
      <div className="grid grid-cols-3 gap-4 my-10">
        {dataPosts.map((item) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="my-5">{item.body}</p>
                <div className="card-actions justify-end">
                  <Link href={`/posts/${item.id}`}>
                    <button className="btn btn-primary">Visit</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Posts;
