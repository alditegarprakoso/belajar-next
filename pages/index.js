import Image from "next/image";

export async function getStaticProps(context) {
  const getPosts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return {
    props: { getPosts },
  };
}

export default function Home({ getPosts }) {
  return (
    <div className="my-5">
      <p className="text-center">
        Belajar Next.js itu menyenangkan bukan ? Bukan !
      </p>
      <div className="my-5 flex justify-center flex-wrap">
        <div className="card w-96 bg-base-100 shadow-2xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">Luffy D. Monkey</h2>
            <p>Bandainamco - Limited Edition</p>
          </div>
          <figure>
            <Image
              src="/luffy-figure.jpeg"
              alt="Luffy Figure"
              width={500}
              height={320}
            />
            {/* <img src="/luffy-figure.jpeg/" alt="Luffy Figure" /> */}
          </figure>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 gap-4 my-10">
          {getPosts.map((item) => {
            return (
              <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p className="my-5">{item.body}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Visit</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/*  */}
      </div>
    </div>
  );
}
