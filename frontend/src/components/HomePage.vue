<script>
/* Amalfi */
import faraglioniImg from '@/assets/images/Italy/amalfi coast and campania/faraglioni.jpg'
import marinaImg from '@/assets/images/Italy/amalfi coast and campania/Marina di Camerota.jpg'
import fiordoImg1 from '@/assets/images/Italy/amalfi coast and campania/Fiordo/fiordo di Furore.webp'
import fiordoImg2 from '@/assets/images/Italy/amalfi coast and campania/Fiordo/fiordo di Furore2.webp'
import fiordoImg3 from '@/assets/images/Italy/amalfi coast and campania/Fiordo/fiordo di Furore3.jpg'

/* Calabria */
import tropeaImg from '@/assets/images/Italy/calabria/Vibo-Valentia.jpg'

/* Liguria */
import monterossoBeachImg from '@/assets/images/Italy/liguria/monterosso/Monterosso beach.jpg'
import monterossoSunsetImg from '@/assets/images/Italy/liguria/monterosso/Monterosso-Al-Mare.jpg'
import CinqueTerreImg from '@/assets/images/Italy/liguria/Cinque-Terre-La-Spezia-Province.webp'
import baiaSunset from '@/assets/images/Italy/liguria/Bia/Baia_del_silenzio_.jpg'
import baiaFront from '@/assets/images/Italy/liguria/Bia/baia.jpeg'

/* Puglia */
import puntaProscuttoImg from '@/assets/images/Italy/puglia/Punta Prosciutto.jpg'
import puntaProscuttoImg1 from '@/assets/images/Italy/puglia/Punta Prosciutto.webp'
import puntaProscuttoImg2 from '@/assets/images/Italy/puglia/Punta Prosciutto (Porto Cesareo), lecce.webp'
import puntaProscuttoImg3 from '@/assets/images/Italy/puglia/Punta Prosciutto (Porto Cesareo).jpg'
import toreSantAndreaImg from '@/assets/images/Italy/puglia/Torre-Sant-Andrea-near-Melendugno-Lecce-district-Apulia-Italy.jpg'

/* Sardania */


/* Sicily */

/* Toscana */
import calaViolinaImg from '@/assets/images/Italy/toscana/Cala Violina, Scarlino – Toscana.webp'
import fenigliaImg from '@/assets/images/Italy/toscana/Spiaggia della Feniglia, Orbetello – Toscana.webp'
import arenellaImg from '@/assets/images/Italy/toscana/Spiaggia dell’Arenella, Isola del Giglio.webp'

export default {
    data() {
        return {
            user: 'BEATRIX',
            selectedPage: 'Italy',
            selectedRegion: 'Amalfi Coast',
            selectedBeach: 'Faraglioni',
            selectedImage: faraglioniImg,
            previousImage: null,
            currentImageIndex: 0,
            imageRotationInterval: null,
            regions: {
                'Italy': [
                    {
                        name: 'Amalfi Coast',
                        beaches: [
                            { name: 'Faraglioni', images: [faraglioniImg] },
                            { name: 'Marina di Camerota', images: [marinaImg] },
                            { name: 'Fiordo di Ferore' , images: [fiordoImg1,fiordoImg2,fiordoImg3]}
                        ]
                    },
                    {
                        name: 'Calabria',
                        beaches: [
                            { name: 'Tropea', images: [tropeaImg] }
                        ]
                    },
                    {
                        name: 'Liguria',
                        beaches: [
                            { name: 'Monterosso', images: [monterossoBeachImg, monterossoSunsetImg] },
                            { name: 'Cinque Terre', images: [CinqueTerreImg] },
                            { name: 'Bia del Silezio', images: [baiaSunset, baiaFront]}
                        ]
                    },
                    {
                        name: 'Puglia',
                        beaches: [
                            { name: 'Punta Prosciutto', images: [puntaProscuttoImg, puntaProscuttoImg1, puntaProscuttoImg2, puntaProscuttoImg3] },
                            { name: 'Torre Sant\'Andrea', images: [toreSantAndreaImg] }
                        ]
                    },
                    {
                        name: 'Sardania',
                        beaches: [
                            { name: 'Punta Prosciutto', images: [puntaProscuttoImg] },
                            { name: 'Baia del Silenzio', images: [toreSantAndreaImg] }
                        ]
                    },
                    {
                        name: 'Sicilia',
                        beaches: [
                            { name: 'Mondello', images: [puntaProscuttoImg] },
                            { name: 'Mondello Sunset', images: [toreSantAndreaImg] }
                        ]
                    },
                    {
                        name: 'Toscana',
                        beaches: [
                            { name: 'Cala Violina', images: [calaViolinaImg] },
                            { name: 'Spiaggia della Feniglia', images: [fenigliaImg] },
                            { name: 'Spiaggia dell\'Arenella', images: [arenellaImg] }
                        ]
                    }
                ]
            }
        }
    },
    methods: {
        getRegions() {
            return this.regions[this.selectedPage] || [];
        },
        getBeaches() {
            if (!this.selectedRegion) return [];
            const region = this.getRegions().find(r => r.name === this.selectedRegion);
            return region ? region.beaches : [];
        },
        getImages() {
            if (!this.selectedBeach) return [];
            const beaches = this.getBeaches();
            const beach = beaches.find(b => b.name === this.selectedBeach);
            return beach ? beach.images : [];
        },
        startImageRotation() {
            const images = this.getImages();
            if (this.imageRotationInterval) {
                clearInterval(this.imageRotationInterval);
                this.imageRotationInterval = null;
            }

            if (images.length <= 1) return;

            this.imageRotationInterval = setInterval(() => {
                this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
                this.previousImage = this.selectedImage;
                this.selectedImage = images[this.currentImageIndex];
            }, 3000);
        }
    },
    watch: {
        selectedBeach() {
            this.currentImageIndex = 0;
            const images = this.getImages();
            if (images.length > 0) {
                this.previousImage = this.selectedImage;
                this.selectedImage = images[0];
                this.startImageRotation();
            }
        }
    },
    mounted() {
        this.startImageRotation();
    },
    beforeUnmount() {
        if (this.imageRotationInterval) {
            clearInterval(this.imageRotationInterval);
        }
    }
}
</script>

<template>
    <main>
        <div class="background-image previous" v-if="previousImage" :style="{ backgroundImage: `url('${previousImage}')` }"></div>
        <div class="background-image current" :style="{ backgroundImage: this.selectedImage ? `url('${this.selectedImage}')` : 'none' }" :key="selectedImage"></div>
        <section class="sidebar">
            <header>
                <p>Welcome to Italy, dear</p> 
                <span>{{ user }}</span>
            </header>
            <ul>
                <li v-for="region in getRegions()" 
                :key="region.name" 
                @click="selectedRegion = region.name; 
                selectedBeach = region.beaches && region.beaches.length > 0 ? region.beaches[0].name : null; 
                selectedImage = region.beaches && region.beaches.length > 0 && region.beaches[0].images && region.beaches[0].images.length > 0 
                            ? region.beaches[0].images[0] : null;" 
                :class="{ active: selectedRegion === region.name }">
                    {{ region.name }}
                </li>
            </ul>
        </section>

        <section class="content">
            <div class="beaches-list">
                <div v-for="beach in getBeaches()" 
                :key="beach.name" 
                class="beach-card"
                :class="{ active: selectedBeach === beach.name }" 
                @click="selectedBeach = beach.name; 
                selectedImage = beach.images && beach.images.length > 0 ? beach.images[0] : null;">
                    <p>{{ beach.name }}</p>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
main {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    position: relative;
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
}

.background-image.previous {
    z-index: -2;
}

.background-image.current {
    z-index: -1;
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.sidebar {
    width: clamp(200px, 15%, 400px);
    height: 100vh;
    background-color: rgba(10, 61, 97, 0.41);
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 1em 0;
    color: #fff;
}

header {
    display: flex;
    flex-direction: column;
    font-family: 'Petrona', serif;
    font-size: 1.2em;
    padding: 0 1.3em;
    align-items: flex-start;
}

header span {
    font-family: 'Perpetua Titling MT', serif;
    font-weight: bold;
    font-size: 1.5em;
}
.sidebar ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;
    gap: 4em;
    font-family: 'Libre Baskerville', serif;
}

.sidebar ul li {
    font-size: 1.25;
    cursor: pointer;
    padding: auto;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.945);
}

.sidebar ul li.active {
    color: #FF6F61;
    border-left: 3px solid #ffddb6;
}

.sidebar ul li:hover:not(.active),
.beach-card:hover {
    color: #b6b9ff
}

.content {
    width: calc(100% - clamp(200px, 15%, 400px));
    height: 100vh;
    display: flex;
    justify-content: center;
}

.beaches-list {
    width:  calc(90% - clamp(200px, 15%, 400px));
    height: fit-content;
    position: absolute;
    bottom: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5em;
    background-color: rgba(10, 61, 98, 0.3);
    padding: .2em;
}

.beach-card.active {
    color: #fff;
    font-size: 2em;
    font-family: 'Palatino Linotype', serif;
    font-weight: 900;
    -webkit-text-stroke: 0.5px #fff;
}

.beach-card {
    color: rgba(255, 111, 97, 1);
    font-family: 'Palanquin Dark', sans-serif;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}
</style>