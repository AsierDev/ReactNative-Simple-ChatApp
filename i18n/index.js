import I18n from 'react-native-i18n'
 
import en from './locales/en'
import es from './locales/es'

 
I18n.fallbacks = true
 
I18n.translations = {
  en,
  es
}
 
export default I18n
 
 
app/i18n/locales/en.js
 
export default {
  login: 'Login',
  signup: 'Sign Up',
 
  email: 'Email',
  password: 'Password',
 
  chat: 'Chat',
  message: 'Message',
 
  error: 'Error',
 
  you: 'You',
 
  placeholder: 'There are no messages yet'
}

app/i18n/locales/es.js

export default {
    login: 'Login',
    signup: 'Registrarse',
   
    email: 'Email',
    password: 'Contraseña',
   
    chat: 'Chat',
    message: 'Mensaje',
   
    error: 'Error',
   
    you: 'Tu',
   
    placeholder: 'Todavia no hay mensajes'
  }
