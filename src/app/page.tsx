import styles from "./page.module.css";
import dynamic from "next/dynamic";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("./map/Map"), {
    loading: () => <p>loading...</p>,
    ssr: false,
  });

  return (
    <main className={styles.main}>
      <MapWithNoSSR />
    </main>
  );
}
