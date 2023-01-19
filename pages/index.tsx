import DefaultLayout from "@/src/layouts/DefaultLayout/DefaultLayout";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import styles from "./index.module.css";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <main className={styles.main}>
        a
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
};

Home.getLayout = function getLayout(Home: ReactElement) {
  return <DefaultLayout>{Home}</DefaultLayout>;
};
export default Home;
