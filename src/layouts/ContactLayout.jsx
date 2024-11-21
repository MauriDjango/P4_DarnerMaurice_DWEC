import NowPlayingMini from "../components/now_playing/NowPlayingMini";
import ContactForm from "../components/Contact/ContactForm";


const ContactLayout = () => {
  return (
      <section className={'main'}>
        <NowPlayingMini />
        <ContactForm />
      </section>
  )
}
export default ContactLayout