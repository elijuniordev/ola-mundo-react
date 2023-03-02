import React from 'react'

import circuloColorido from 'assets/circulo_colorido.png'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, mundo!
        </h1>
        <p className={styles.paragrafo}>
        Boas vindas ao meu espaço pessoal! Eu sou Eli Junior, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img 
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="Círculo colorido"
          aria-hidden={true}
        />
        <img 
          className={styles.minhaFoto} 
          src="https://github.com/elijuniordev.png"
          alt="Foto de Eli Junior"
        />
      </div>

    </div>
  )
}
