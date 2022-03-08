import { FC } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import Container from "../Container";

interface Props {
  headline: string;
  description: string;
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={styles.root}>
          <h2 className={styles.headline}>{headline}</h2>
          <div>
            <p className={styles.description}>{description}</p>
            <Link href="/">
              <a className={styles.link}>Read it here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
