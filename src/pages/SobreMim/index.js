import styles from "./SobreMim.module.css";
import PostModelo from "../../components/PostModelo";
import fotoCapa from "../../assets/images/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/images/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Antônio!
            </h3>
            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices turpis id sollicitudin
                aliquet. Nullam vel risus sapien. Nunc egestas eros at est cursus, a varius justo ultricies. Proin
                dignissim, erat vitae molestie vestibulum, arcu felis sollicitudin turpis, vitae faucibus sapien purus
                sit amet odio. Curabitur iaculis mi vitae odio auctor, sed pharetra orci pellentesque. Donec mattis
                suscipit tortor non elementum. Fusce tortor justo, rhoncus sit amet bibendum sit amet, ullamcorper a
                tellus. Morbi volutpat aliquet turpis id aliquam. Curabitur lacus quam, efficitur nec gravida nec,
                viverra nec arcu.
            </p>
            <br/>
            <p className={styles.paragrafo}>
                Fusce condimentum risus sed odio facilisis euismod. Ut pharetra, tortor vitae hendrerit scelerisque,
                ante lectus luctus neque, id fringilla sem felis quis ligula. Proin vitae tincidunt neque. Duis mattis
                erat sit amet quam tempus, nec porttitor lectus placerat. Curabitur eu mollis eros. Maecenas eget
                pretium massa, quis finibus ligula. Curabitur porttitor vehicula fringilla. Duis luctus egestas eros ut
                pretium. Sed rhoncus nec libero vulputate volutpat. Quisque gravida tristique dui, vulputate auctor nibh
                iaculis a. Cras ac erat lacinia nunc auctor euismod. Sed nec felis porta, feugiat quam sit amet, ornare
                ante. Phasellus et magna nec ipsum sodales suscipit. Integer sit amet ex urna. Integer ut quam sagittis,
                aliquet arcu at, iaculis erat. Curabitur quis fringilla enim.
            </p>
            <br/>
            <p className={styles.paragrafo}>
                Donec lobortis leo ut mi condimentum, id pellentesque magna bibendum. Mauris pulvinar nunc sed odio
                maximus ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus dapibus
                leo, vel cursus quam venenatis et. Donec consequat massa vitae justo tempus, at viverra massa
                scelerisque. Curabitur luctus laoreet dui, vitae interdum nulla aliquet dictum. Nam et luctus
                lectus.
            </p>
            <br/>
            <p className={styles.paragrafo}>
                Nunc eleifend cursus massa, vulputate iaculis odio pulvinar hendrerit. Donec a sapien elit. Nunc
                ornare sem a urna pharetra dictum. Aenean bibendum magna sed lorem blandit, eget feugiat lectus
                varius. Nam eget posuere velit. Proin magna mauris, blandit gravida efficitur vel, tristique vel
                mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <br/>
        </PostModelo>
    )
}
