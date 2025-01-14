import styles from "@styles/Home.module.css";

import Head from "next/head";

export const EMPTY_RESULT_HINT = "Geben Sie in das Formular einen Wert > 1 ein.";

function Home() {
    return (
        <>
            <Head>
                <title>Bewerber-Quiz - FizzBuzz</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1>FizzBuzz - Bewerber Quiz</h1>
            </main>
        </>
    );
}

export default Home;
