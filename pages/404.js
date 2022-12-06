import React from "react";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 gap-4 my-10 text-center">
      <div>
        Oops, halaman tidak ditemukan. <br />
        Silahkan periksa halaman yang anda ketik.
      </div>
      <div>
        <button className="btn btn-sm" onClick={() => router.push("/")}>
          Kembali
        </button>
      </div>
    </div>
  );
}

export default NotFound;
