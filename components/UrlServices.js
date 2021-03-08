const loginUrl = () => {
      return "https://tvns-caondo.tvms-dev.timelessveterinary.com/client/vdi/v1/login";
}

const authUrl = () => {
      return 'https://tvns-caondo.tvms-dev.timelessveterinary.com/client/vdi/v1/auth'
}

const sendEmaillUrl = () => {
      return 'https://api.emailjs.com/api/v1.0/email/send'
}
const aboutTimelessUrl = () => {
      return 'http://vetdrugindex.com/about/timeless/'
}
const aboutAuthorsUrl = () => {
      return 'http://vetdrugindex.com/about/authors/'
}
const eulaURL = () => {
      return 'http://vetdrugindex.com/legal/eula/'
}
const privacyPolicyUrl = () => {
      return 'http://vetdrugindex.com/legal/privacypolicy/'
}
const supportURl = () => {
      return 'https://tvns-caondo.tvms-dev.timelessveterinary.com/client/vdi/v1/support'
}

export const UrlServices = {
      loginUrl,
      authUrl,
      sendEmaillUrl,
      aboutTimelessUrl,
      aboutAuthorsUrl,
      eulaURL,
      privacyPolicyUrl,
      supportURl
}