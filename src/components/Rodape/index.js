import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from "assets/images/marca_registrada.svg";

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
                Desenvolvido por Alura
                <MarcaRegistrada />
        </footer>
    )
}
