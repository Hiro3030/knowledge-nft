import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  const OTAButton = () => (
    <Link href="/login">
      <button className="bg-gray-200 p-3 my-5 hover:bg-gray-300 rounded shadow px-4">
        ログイン/新規登録
      </button>
    </Link>
  );
  return (
    <div>
      <Head>
        <title>
          ResearchFund | 個人が研究に投資できるWeb3クラウドファンディングサイト
        </title>
        <meta
          name="description"
          content="ResearchFundはNFTを購入することで
          個人が研究に対して投資をすることができる
          新しいクラウドファンディングサービスです。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="sticky flex top-0 h-16 border-b items-center justify-between mx-5">
          <p className="text-3xl font-bold">ResearchFund</p>
          <OTAButton />
        </div>


        <div className="flex justify-center pt-10 mt-10">
            <p className="text-sm font-bold text-gray-500">現在投資可能な研究一覧</p>
        </div>
        <div className="flex justify-center mb-10 mt-2">
          <div className="w-16 h-1 bg-gray-500"></div>
        </div>
        <section className="bg-thought-yellow bg-cover">
          <div className="flex justify-center p-20">
            <iframe
              src="https://gateway.ipfscdn.io/ipfs/QmQM4Njtt2o4cQ98Mi2kBD6rBsfH6LfeaRYBYLpR41nVFs/nft-drop.html?contract=0x1b19E13054547A7d9A4070893831296A37c515B3&chainId=80001"
              width="600px"
              height="600px"
              frameBorder="0">
            </iframe>
          </div>
    
        </section>

        

      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
