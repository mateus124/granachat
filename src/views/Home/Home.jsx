import { IoMdMoon, IoIosArrowRoundForward  } from "react-icons/io";
import { useEffect, useRef } from "react";
import { DotLottie } from "@lottiefiles/dotlottie-web";
import animationUrl from "../../assets/FinanceApp.lottie?url";
import styles from './Home.module.css';

const Home = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const dotLottie = new DotLottie({
                canvas: canvasRef.current,
                src: animationUrl,
                loop: true,
                autoplay: true,
            });

            return () => {
                dotLottie.destroy();
            };
        }
    }, []);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}><img src="logo.png" alt="Logo GranaChat" /></div>
                <nav>
                    <button><IoMdMoon /></button>
                    <a href="#">Entrar</a>
                </nav>
            </header>

            <main className={styles.main}>
                <div className={styles.content}>
                    <h1>GranaChat é o jeito  <br/> mais fácil de <span>organizar suas finanças</span></h1>
                    <p>Registre gastos, acompanhe sua renda e entenda pra onde seu dinheiro está indo, tudo em uma conversa natural.</p>
                    <a href="#">Testar agora <IoIosArrowRoundForward className={styles.ico}/></a>
                </div>
                <div className={styles.anim}>
                    <canvas ref={canvasRef} style={{ width: '80%', height: '100%' }}></canvas>
                </div>
            </main>
        </>
    )
}

export default Home