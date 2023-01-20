import { ReactElement, useState } from "react";
import DefaultLayout from "@/src/layouts/DefaultLayout/DefaultLayout";
import type { NextPageWithLayout } from "./_app";
import eveningStandardLogo from "../src/assets/images/Evening-Standard-Logo.png";
import telegraphLogo from "../src/assets/images/Telegraph-Logo_91a32eee-a9c0-48a6-8f7a-35fd445d94c1.png";
import shortlistLogo from "../src/assets/images/Shortlist-logo_3c837f8c-da0d-4908-ad08-f5cf8067756e.png";
import happyDrinkersXmas from "../src/assets/images/Happy_Drinkers_Xmas.jpg";
import styles from "./index.module.css";
import Image from "next/image";
import {
  earth,
  fivestarts,
  glass,
  truck,
  wtf,
  yotpo,
} from "@/src/assets/icons";
import Button from "@/src/components/Button/Button";
import CardItemsGroup from "@/src/components/CardItemsGroup/CardItemsGroup";

const Home: NextPageWithLayout = () => {
  const [items, setItems] = useState([
    {
      name: "taster Pack",
      price: 20,
      src: "Taster_Pack_Mixed_Pack_V2_MOTH_Cocktail_PP_Image_1_1_Ratio_Final.png",
      special: "Bestseller",
      sizes: [6, 12, 24],
    },
    {
      name: "taster Pack",
      price: 20,
      src: "Taster_Pack_Mixed_Pack_V2_MOTH_Cocktail_PP_Image_1_1_Ratio_Final.png",
      special: "Bestseller",
      sizes: [6, 12, 24],
    },
    {
      name: "taster Pack",
      price: 20,
      src: "Taster_Pack_Mixed_Pack_V2_MOTH_Cocktail_PP_Image_1_1_Ratio_Final.png",
      special: "Bestseller",
      sizes: [6, 12, 24],
    },
    {
      name: "taster Pack",
      price: 20,
      src: "Taster_Pack_Mixed_Pack_V2_MOTH_Cocktail_PP_Image_1_1_Ratio_Final.png",
      special: "Bestseller",
      sizes: [6, 12, 24],
    },
    {
      name: "taster Pack",
      price: 20,
      src: "Taster_Pack_Mixed_Pack_V2_MOTH_Cocktail_PP_Image_1_1_Ratio_Final.png",
      special: "Bestseller",
      sizes: [6, 12, 24],
    },
    {
      name: "taster Pack",
      price: 20,
      src: "Taster_Pack_Mixed_Pack_V2_MOTH_Cocktail_PP_Image_1_1_Ratio_Final.png",
      special: "Bestseller",
      sizes: [6, 12, 24],
    },
    {
      name: "taster Pack",
      price: 20,
      src: "Taster_Pack_Mixed_Pack_V2_MOTH_Cocktail_PP_Image_1_1_Ratio_Final.png",
      special: "Bestseller",
      sizes: [6, 12, 24],
    },
  ]);
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
            <Button>SHOP ALL</Button>
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
        <div className={styles.featured}>
          <h1 className={styles.title}>FEATURED</h1>
          <div className={styles.featured_group}>
            <CardItemsGroup props={items} />
          </div>
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            <p>MIX</p>
            <p>OF</p>
            <p>TOTAL</p>
            <p>HAPPINESS</p>
          </h1>
          <ul className={styles.inner}>
            <li>
              {" "}
              <div className={styles.content}>
                <Image src={glass} alt="icon" />
                <h1 className="t-30">BAR-STRENGTH</h1>
                <span>
                  We’re serious about cocktails. These aren’t your ordinary
                  tinnies — they’re full-strength classics, made with best of
                  the best craft spirits. Perfect every time.
                </span>
              </div>
            </li>
            <li>
              {" "}
              <div className={styles.content}>
                <Image src={truck} alt="icon" />
                <h1 className="t-30">READY TO GO</h1>
                <span>
                  Premixed, as handy as a can of beer, as ready to go as you
                  are. No need to splash big on spirits. Grab it on the way to
                  the party. Get it to your door.
                </span>
              </div>
            </li>
            <li>
              {" "}
              <div className={styles.content}>
                <Image src={earth} alt="icon" />
                <h1 className="t-30">PLANET FRIENDLY</h1>
                <span>
                  No pointless plastic. No heavy glass bottles. Just carefully
                  sourced ingredients from partners we trust, and aluminium cans
                  that can be recycled again and again—and again. Infinitely.
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={`${styles.wrapper} ${styles.about}`}
          style={{
            paddingRight: "0",
            alignItems: "center",
            marginBottom: "0",
            paddingBottom: "0",
          }}
        >
          <h1 className={styles.title}>
            <p>WE'RE HERE FOR</p>
            <p>COCKTAILS, COMPANY</p>
            <p>AND CONVERSATION</p>
            <br />
            <Button>ABOUT US</Button>
          </h1>
          <div className={`${styles.inner} ${styles.about_us}`}>
            <Image src={wtf} alt="icon" width={1500} className={styles.icon} />
          </div>
        </div>
        <div className={`${styles.home_banner} ${styles.home_banner_2}`}>
          <div className={styles.home_banner_inner}>
            <h1>
              <p>OUR NEW</p>
              <p>TRIO</p>
            </h1>

            <p
              className={styles.banner_review_content}
              style={{
                color: "#000000",
              }}
            >
              Some say three’s a crowd. Some say it’s the magic number. We’re
              with the latter. Meet our newest MOTHs
            </p>
            <Button>DISCORVER</Button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            <p>IN THE</p>
            <p>PRESS</p>
          </h1>
          <ul className={`${styles.inner} ${styles.thepress}`}>
            <li>
              <div className={styles.content}>
                <Image src={eveningStandardLogo} alt="logo" />
                <br />
                <span>
                  “‘Errr…. I just wish someone had told me about MOTH drinks
                  sooner! It certainly would have saved me faffing around with
                  loads of ingredients and complicated steps”
                </span>
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <Image src={telegraphLogo} alt="logo" />
                <br />
                <span>
                  “In the underwhelming choice of canned cocktails MOTH stands
                  out…an excellent way to kick off any gathering.”
                </span>
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <Image src={shortlistLogo} alt="logo" />
                <br />
                <span>
                  “They really do taste like you are in an expensive bar.”
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={styles.wrapper}
          style={{
            paddingRight: "0px",
          }}
        >
          <h1 className={styles.title}>
            <p>OUR HAPPY</p>
            <p>DRINKERS</p>
            <p
              style={{
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                fontFamily: "sans-serif",
              }}
            >
              <Image src={fivestarts} alt="icon" width={87.5} />
              &nbsp;
              <span>476 REVIEWS</span>
            </p>
            <Button>SHOP ALL</Button>
          </h1>
          <div className={styles.bg_xmart}>
            <Image src={happyDrinkersXmas} alt="xmas" className={styles.xmas} />
            <ul
              className={styles.inner}
              style={{
                justifyContent: "flex-start",
              }}
            >
              <li>
                <div className={styles.content}>
                  <Image src={fivestarts} alt="icon" />
                  <span
                    style={{
                      color: "#121212bf",
                      padding: "20px 0",
                    }}
                  >
                    Doesn’t taste like it’s from a can. If you want the strength
                    and taste of classic cocktails, but also the heart and soul
                    of a drink being mixed right in front of you - and all with
                    much, much less hassle. Look no further.
                  </span>
                  <span
                    style={{
                      color: "#121212bf",
                    }}
                  >
                    ERROL - 14/03/2022
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <Image src={fivestarts} alt="icon" />
                  <span
                    style={{
                      color: "#121212bf",
                      padding: "20px 0",
                    }}
                  >
                    The best pre-made cocktails I’ve tried. Perfect size,
                    perfect taste, perfectly easy. You can tell they know
                    they’re stuff. Made with proper quality spirits.
                  </span>
                  <span
                    style={{
                      color: "#121212bf",
                    }}
                  >
                    NATALIE - 05/04/2022
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <Image src={fivestarts} alt="icon" />
                  <span
                    style={{
                      color: "#121212bf",
                      padding: "20px 0",
                    }}
                  >
                    Little pocket rockets. Where have you been all my life?
                    Think I’ll be keeping an emergency MOTH in my pocket from
                    now on! Love the packaging, super nice intense flavours. And
                    strong! Love it!
                  </span>
                  <span
                    style={{
                      color: "#121212bf",
                    }}
                  >
                    CHARLOTTE - 24/12/2021
                  </span>
                </div>
              </li>
            </ul>
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
