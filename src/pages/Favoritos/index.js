import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';

function Favoritos() {
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
            <Card id="1"
                      titulo="Capita"
                      capa="https://i.pinimg.com/564x/24/fa/08/24fa08a0c42b9603490fcdfd517078ce.jpg" />     
            </section>

        </>
    )
}

export default Favoritos;