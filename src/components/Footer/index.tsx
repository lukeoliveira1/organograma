import './Footer.css'

interface FooterProps {
  gitUsername: string;

}
export const Footer = ({ gitUsername } : FooterProps) => {
  return(
    <footer className='footer'>
      <section>
        <img src="imgs/logo.png" alt="A logo do organograma" />
      </section>
      <section>
        <a href="https://github.com/lukeoliveira1">
          {gitUsername}
          <img src="imgs/github.png" alt="logo do github"/>
        </a>
      </section>
    </footer>
  )
}