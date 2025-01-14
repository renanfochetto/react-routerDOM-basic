import styles from './Banner.module.css'
import circuloColorido from'assets/images/circulo_colorido.png'
import minhaFoto from 'assets/images/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu site!
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    src={circuloColorido}
                    className={styles.circuloColorido}
                    aria-hidden={true}
                />
                <img
                    src={minhaFoto}
                    className={styles.minhaFoto}
                    aria-hidden={true}
                    alt="Foto de uma pessoa sorrindo"
                />
            </div>
        </div>
    )
}
