import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Link from "next/link";

import { useCart } from "../hooks/use-cart.js";
import products from "../products.json";

export default function Home() {
  const { subtotal, totalItems, addToCart, checkout } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Space Jelly Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Space Jelly Shop</h1>

        <p className={styles.description}>
          The best space jellyfish swag in the universe!!
        </p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, price, description, image } = product;
            return (
              <li key={id} className={styles.card}>
                <Link href={`/products/${id}`}>
                  <a>
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>${price}</p>
                    <p>{description}</p>
                    <p>
                      <button
                        className={styles.button}
                        onClick={() => {
                          addToCart({
                            id
                          });
                        }}
                      >
                        Add To Cart
                      </button>
                    </p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
