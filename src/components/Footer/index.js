import './Footer.css'

export const Footer = () => {
  return(
    <footer className='footer'>
      <section>
        <img src="imgs/logo.png" alt="A logo do organograma" />
      </section>
      <section>
        <a href="https://github.com/lukeoliveira1">
          @lukeoliveira1
          <img src="imgs/github.png" alt="logo do github"/>
        </a>
      </section>
    </footer>
  )
}