import { ReactElement } from "react";
import DefaultLayout from "@/src/layouts/DefaultLayout/DefaultLayout";
import type { NextPageWithLayout } from "./_app";
import styles from "./index.module.css";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <main className={styles.main}>
        <div>a</div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(Home: ReactElement) {
  return <DefaultLayout>{Home}</DefaultLayout>;
};
export default Home;
