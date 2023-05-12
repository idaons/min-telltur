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
      <div className={styles.info}>
        <h1>
          Turmål,{" "}
          <a href="https://www.telltur.no/friluftsrad/salten">
            Ti på topp Hamarøy
          </a>
        </h1>
        <p>
          Utviklet av{" "}
          <a href="https://github.com/idaons/min-telltur">Ida Onshus</a>
        </p>
      </div>
    </main>
  );
}
