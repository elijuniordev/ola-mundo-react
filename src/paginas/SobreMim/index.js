import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/meu_avatar.png'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa = {fotoCapa}  
      titulo = "Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Eli Junior!
      </h3>
      <img 
        src={fotoSobreMim}
        alt='Foto de Eli Junior sorrindo'
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou um Desenvolvedor Web e estou feliz de te ver por aqui.
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou no Colégio Fernão Dias, quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como HTML, Delphi, Visual Basic e C mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
      </p>
      <p className={styles.paragrafo}>
        Atualmente tenho conhecimentos em Python para desenvolvimento do Back-End e no Front-End estou desenvolvendo em React JS. Também tenho conhecimentos em HTML, CSS, JavaScript, e alguns bancos de dados como MySQL e PostgreSQL.
      </p>
      <p className={styles.paragrafo}>
        Este site foi desenvolvido com o intuito de desenvolver conhecimentos novos em React JS e também para compartilhar conhecimentos que eu já tenho. Espero que você goste!
      </p>

    </PostModelo>
  )
}
