import { Tracing } from "trace_events";
import CardItem from "../CardItem/CardItem";
import styles from "./CardItemsGroup.module.css";

interface Item {
  name: string;
  price: number;
  special?: string;
  sizes: number[];
  src: string;
}

interface Props {
  props: Item[];
}

export default function CardItemsGroup({ props }: Props) {
  console.log(props);
  return (
    <div className={styles.wrapper}>
      <ul className={styles.inner}>
        {props.map((item, index) => (
          <li>
            <CardItem
              name={item.name}
              price={item.price}
              special={item.special}
              sizes={item.sizes}
              src={item.src}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
