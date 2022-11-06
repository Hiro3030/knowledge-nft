import Head from "next/head";
import Link from "next/link";

const Page = () => {
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
          <div />
        </div>

        <p>Done</p>
      </main>

      <footer></footer>
    </div>
  );
};

export default Page;
