import { FaShoppingCart } from "react-icons/fa";

import Link from "next/link";

import { useCart } from "../../hooks/use-cart.js";

import styles from "./Nav.module.css";

const Nav = () => {
  const { subtotal } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        <Link href="/">
          <a>Space Jelly Shop</a>
        </Link>
      </p>
      <p className={styles.navCart}>
        <Link href="/cart">
          <a>
            <FaShoppingCart /> ${subtotal.toFixed(2)}
          </a>
        </Link>
      </p>
    </nav>
  );
};

export default Nav;
