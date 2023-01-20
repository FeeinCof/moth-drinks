import Image from "next/image";
import styles from "./CardItem.module.css";
interface Props {
  name: string;
  price: number;
  special?: string;
  sizes: number[];
  src: string;
}

export default function CardItem({ name, price, special, sizes, src }: Props) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.media}
        style={{
          backgroundImage: `url(../../assets/images/${src})`,
        }}
      >
        {special && <div className={styles.special}>{special}</div>}
        <div className={styles.sizes}>
          {sizes.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          <small>from</small>£{price}
        </span>
      </div>
    </div>
  );
}
