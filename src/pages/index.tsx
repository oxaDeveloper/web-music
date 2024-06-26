import Head from "next/head";
import Main from "~/components/Main";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Music</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#847ab6] p-20">
        <div className="flex rounded-[3rem] bg-black bg-opacity-90 text-white">
          <div className="px-7 py-10">
            <Navbar />
          </div>

          <div className="m-2 rounded-[3rem] bg-white bg-opacity-10">
            <Main />
          </div>
        </div>
      </main>
    </>
  );
}
