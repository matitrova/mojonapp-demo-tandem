// Config del proyecto Firebase (MojonApp). No es información secreta: la
// seguridad real la dan las reglas de Firestore/Auth (ver firestore.rules),
// no ocultar estos valores. Para apuntar la app a otro proyecto, se cambia
// solo acá.
//
// Este deploy es la demo aislada "mojonapp-demo-tandem" — un proyecto
// Firebase propio, separado del original, para mostrarle a Tándem
// Inmobiliaria cómo se vería MojonApp con lotes reales de su cartera
// (Tanti, Villa Carlos Paz, Malagueño) sin mezclar con otros corredores.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbmTjnizR8LN8u86fjZwmtz7Cz0q7WJIY",
  authDomain: "mojonapp-demo-tandem.firebaseapp.com",
  projectId: "mojonapp-demo-tandem",
  storageBucket: "mojonapp-demo-tandem.firebasestorage.app",
  messagingSenderId: "718700851270",
  appId: "1:718700851270:web:1a3e7e5a583c0b75d39a47"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// Se reexporta el config para el panel de administración: dar de alta un
// corredor nuevo levanta una segunda instancia de Firebase App/Auth en
// memoria (initializeApp(firebaseConfig, "alta-...")) para que crear esa
// cuenta no pise la sesión de quien la está creando.
export { firebaseConfig };
