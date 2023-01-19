import { ReactElement } from "react";
import DefaultLayout from "@/src/layouts/DefaultLayout/DefaultLayout";
import type { NextPageWithLayout } from "./_app";
import styles from "./index.module.css";
import Image from "next/image";
import { fivestarts, yotpo } from "@/src/assets/icons";
import Button from "@/src/components/Button/Button";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.home_banner}>
          <div className={styles.home_banner_inner}>
            <h1>
              <p>THE BEST</p>
              <p>COCKTAILS IN</p>
              <p>A CAN</p>
            </h1>
            <Button>SHOPALL</Button>
          </div>
          <div className={styles.banner_review}>
            <p className={styles.banner_review_head}>
              <Image src={yotpo} alt="yotpo" width={30} />
              <svg
                width="70"
                height="20"
                viewBox="0 0 67 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.828 14.238L4.326 9.786L0.714 7.364H5.138L6.72 2.59L8.33 7.364H12.726L9.114 9.786L10.64 14.238L6.72 11.396L2.828 14.238ZM15.9875 14.238L17.4855 9.786L13.8735 7.364H18.2975L19.8795 2.59L21.4895 7.364H25.8855L22.2735 9.786L23.7995 14.238L19.8795 11.396L15.9875 14.238ZM29.1469 14.238L30.6449 9.786L27.0329 7.364H31.4569L33.0389 2.59L34.6489 7.364H39.0449L35.4329 9.786L36.9589 14.238L33.0389 11.396L29.1469 14.238ZM42.3064 14.238L43.8044 9.786L40.1924 7.364H44.6164L46.1984 2.59L47.8084 7.364H52.2044L48.5924 9.786L50.1184 14.238L46.1984 11.396L42.3064 14.238ZM55.4658 14.238L56.9638 9.786L53.3518 7.364H57.7758L59.3578 2.59L60.9678 7.364H65.3638L61.7518 9.786L63.2778 14.238L59.3578 11.396L55.4658 14.238Z"
                  fill="#fff"
                ></path>
              </svg>
            </p>
            <p className={styles.banner_review_content}>
              A lovely set of cocktails in little cans are definitely something
              to give it a try. Lovely flavours from the margarita, old
              fashioned, espresso martini to the negroni. The cocktails are
              lovely... and taste like a well mixed cocktail from a fancy bar.
            </p>
            <span className={styles.banner_review_content}>
              Lucy - 11/06/22
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(Home: ReactElement) {
  return <DefaultLayout>{Home}</DefaultLayout>;
};
export default Home;
