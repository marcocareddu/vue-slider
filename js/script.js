console.log('Vue OK', Vue);

// VUE JS
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            currentIndex: 0,
            autoplay: null,
            images: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    computed: {
        // Calc last element on array
        lastElementNumber() {
            return (this.images.length - 1);
        }
    },
    methods: {

        // Increment index/ from last to first image
        incrementIndex() {
            (this.currentIndex === this.lastElementNumber) ? this.currentIndex = 0 : this.currentIndex++;
        },

        // Decrement index/ from first to last image
        decrementIndex() {
            (this.currentIndex === 0) ? this.currentIndex = this.lastElementNumber : this.currentIndex--;
        },

        // Change index @ click
        indexAtClick(index) {
            this.currentIndex = index;
        },

        autoPlay() {
            this.autoplay = setInterval(this.incrementIndex, 2000)
        },

        // Stop autoplay
        stopAutoPlay() {
            clearInterval(this.autoplay);
        }
    },
    mounted() {

        // Autoplay every 2s
        this.autoplay = setInterval(this.incrementIndex, 2000)
    }
});

// Mount
app.mount('#root');

