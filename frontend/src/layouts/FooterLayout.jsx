import ContactLink from "../components/Contact/ContactLink";
import TermsAndConditions from "../components/Footer/TermsAndConditions";


const FooterLayout = () => {
  return (
    <div className={'footer'}>
      <TermsAndConditions />
      <ContactLink />
    </div>
  )
}

export default FooterLayout