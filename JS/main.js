// Metodo createApp
const { createApp } = Vue;

// Inizializzare l'app Vue
const app = createApp({
    data() {
        return {
            title: "Thanks for existing Vue!",
            image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"
        }
    }
})

// Montare il tutto nel root
app.mount('#root');