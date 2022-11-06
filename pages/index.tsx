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

        <section className="h-fit">
          <div className="bg-top-bg bg-cover bg-bottom">
            <div className="flex justify-center pt-16 sm:pt-40">
              <h1 className="text-5xl sm:text-6xl font-bold  text-black mx-2 sm:mx-16">
                個人が研究に投資できるWeb3クラウドファンディングサイト
              </h1>
            </div>

            <div className="my-10 flex flex-col sm:flex-row justify-center items-center pb-40">
              <div className="relative w-full md:w-1/3 h-60">
                <Image
                  alt="hero"
                  src="/lp/ethereum-logo.png"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <div className="mx-2 sm:mx-6">
                <p className="text-lg max-w-sm text-black">
                  社会で認知されていない研究を世の中に分かりやすく伝え、個人がその研究に投資することができるプラットフォームを提供します。
                </p>
                <OTAButton />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-gray-200"> */}
        <section className="bg-thought-yellow bg-cover">
          <div className="flex justify-center pt-10 mt-40">
            <p className="text-sm font-bold text-gray-500">開発者の想い</p>
          </div>
          <div className="flex justify-center mb-20 mt-2">
            <div className="w-16 h-1 bg-gray-500"></div>
          </div>
          <div className="flex justify-center pb-20">
            <p className="text-xl sm:text-2xl max-w-2xl text-center">
              世の中には多素晴らしい研究があるにも関わらず、その大半はよく知られておらず、社会実装もされにくいのが現状です。研究内容を世の中に分かりやすく伝え、個人が投資できるようにすることで研究の発展や社会実装に寄与したいという思いから、ResearchFundを開発しました。
            </p>
          </div>
        </section>

        <section className="px-2">
          <div className="flex justify-center pt-10 mt-40">
            <p className="text-sm font-bold text-gray-500">
              課題に感じていること
            </p>
          </div>
          <div className="flex justify-center mb-20 mt-2">
            <div className="w-16 h-1 bg-gray-500"></div>
          </div>

          <div>
            {[
              {
                img: "/y1182.png",
                prob: "世の中でどのような研究がされているのか知らない",
                prob2: "社会実装されていない研究が多く存在する",
                solTitle: "研究の内容をイラストや漫画、文章で",
                solTitleLine2: "分かりやすくご紹介します！",
                solDesc:
                  "イラストや漫画、文章で研究内容を要約し、ミニ論文として分かりやすく伝えます！また、ミニ論文の作成に応募することで報酬を得ることができます！",
              },
              {
                img: "/y0748.png",
                prob: "研究費用が不足している",
                solTitle: "研究に興味を持った個人がNFTを買うことで",
                solTitleLine2: "研究に投資することができます！",
                solDesc:
                  "ResearchFundを通して研究に興味を持った個人がクラウドファンディングに応募しNFTを買うことでリターンを得れる他、将来的に売却益で利益を得ることができます！",
              },
              {
                img: "/y0742.png",
                prob: "研究が評価されづらい世の中にある",
                solTitle: "論文に紐づいたNFTが発行されることで",
                solTitleLine2: "論文に市場価値を付与することができます！",
                solDesc:
                  "論文に紐づいたNFTが発行されることで論文が市場と結びつき、良い研究に資金が回る仕組みを作ることができます！",
              },
            ].map((v, ix) => (
              <div key={ix} className="flex flex-col">
                <div className="flex justify-center items-center">
                  <div className="relative w-40 h-40">
                    <Image
                      src={"/lp" + v.img}
                      objectFit="contain"
                      layout="fill"
                      alt="picture of issues"
                    />
                  </div>
                  <p className="text-lg ml-5 w-96">
                    {v.prob}
                    <br />
                    {v.prob2}
                  </p>
                </div>
                <div className="mt-5 mb-32 flex justify-center">
                  <div className="border-2 rounded border-gray-700 w-fit p-5 flex flex-col gap-5">
                    <p className="text-2xl font-bold text-center">
                      {v.solTitle}
                      <br />
                      {v.solTitleLine2}
                    </p>
                    <p className="text-lg max-w-2xl text-center">{v.solDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-center pt-10 mt-20">
            <p className="text-sm font-bold text-gray-500">ユースケース1</p>
          </div>
          <div className="flex justify-center mb-20 mt-2">
            <div className="w-16 h-1 bg-gray-500"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center ">
            {[
              {
                img: "/account.png",
                desc: "1. アカウント作成",
              },
              {
                img: "/post.png",
                desc: "2. ミニ論文を作成し、提出",
              },
              {
                img: "/engineer.png",
                desc: "3. 報酬を獲得",
              },
            ].map((v, ix) => (
              <>
                <div key={ix} className="flex flex-col gap-5">
                  <p className="text-lg text-center w-52">{v.desc} </p>
                  <div className="relative w-52 h-52">
                    <Image
                      src={"/lp" + v.img}
                      objectFit="contain"
                      layout="fill"
                      alt="picture of flow"
                    />
                  </div>
                </div>
                <div>
                  {ix !== 2 && (
                    <p className="text-3xl font-bold w-40 h-32 text-center invisible sm:visible">
                      →
                    </p>
                  )}
                </div>
              </>
            ))}
          </div>

                    <div className="flex justify-center pt-10 mt-20">
            <p className="text-sm font-bold text-gray-500">ユースケース2</p>
          </div>
          <div className="flex justify-center mb-20 mt-2">
            <div className="w-16 h-1 bg-gray-500"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center ">
            {[
              {
                img: "/account.png",
                desc: "1. アカウント作成",
              },
              {
                img: "/post.png",
                desc: "2. ミニ論文のNFTを購入",
              },
              {
                img: "/engineer.png",
                desc: "3. クラファンのリターンを獲得！売却益も見込める",
              },
            ].map((v, ix) => (
              <>
                <div key={ix} className="flex flex-col gap-5">
                  <p className="text-lg text-center w-52">{v.desc} </p>
                  <div className="relative w-52 h-52">
                    <Image
                      src={"/lp" + v.img}
                      objectFit="contain"
                      layout="fill"
                      alt="picture of flow"
                    />
                  </div>
                </div>
                <div>
                  {ix !== 2 && (
                    <p className="text-3xl font-bold w-40 h-32 text-center invisible sm:visible">
                      →
                    </p>
                  )}
                </div>
              </>
            ))}
          </div>
        </section>

        <section className="max-w-screen-md mx-auto">
          <div className="flex justify-center pt-10 mt-40">
            <p className="text-sm font-bold text-gray-500">よくあるご質問</p>
          </div>
          <div className="flex justify-center mb-20 mt-2">
            <div className="w-16 h-1 bg-gray-500"></div>
          </div>

          <div className="p-2">
            {[
              {
                q: "論文を紹介してほしい場合、費用はかかりますか？",
                a: "ミニ論文として第三者にイラストや漫画、文章の制作を依頼する場合は費用がかかります。",
              },
              {
                q: "論文をミニ論文として掲載する場合、ファイル形式に指定はありますか？",
                a: "画像ファイル、テキストファイル、PDFファイル、HTMLファイルでご提出をお願いします。",
              },
              {
                q: "購入したNFTを再販売することはできますか？",
                a: "可能です。",
              },
            ].map((v, k) => (
              <div key={k} className="py-2">
                <p className="text-lg">Q. {v.q}</p>
                <p className="text-lg">A. {v.a}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center m-20">
            <p className="text-lg" style={{}}>
              <span
                style={{
                  background: "linear-gradient(transparent 70%, #ECDE7C 0%)",
                }}
              >
                さくっとログインしよう！
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(transparent 70%, #ECDE7C 0%)",
                }}
              >
                0円でスタート！
              </span>
            </p>
          </div>
          <div className="flex justify-center m-16">
            <OTAButton />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
