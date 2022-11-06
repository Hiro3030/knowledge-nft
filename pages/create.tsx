import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { storage } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

import { supabase } from "../lib/supabase";

const Page = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | undefined>();

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const files = event.currentTarget.files;
    if (!files || files?.length === 0) return;
    const file = files[0];
    setFile(file);
  };
  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    if (!file) return;
    const { data, error } = await supabase.storage
      .from("prototype-objects")
      .upload(uuidv4(), file);
    if (error) {
      console.log(error);
      return;
    }
    console.log(data.path);
    router.push("/done");
  };

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

        <input type="file" onChange={handleOnChange} />
        <button onClick={handleOnClick}>Submit</button>
      </main>

      <footer></footer>
    </div>
  );
};
export default Page;
