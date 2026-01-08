<script>
import faraglioniImg from '@/assets/images/Italy/amalfi coast and campania/faraglioni.jpg'
import marinaImg from '@/assets/images/Italy/amalfi coast and campania/Marina di Camerota.jpg'
import tropeaImg from '@/assets/images/Italy/calabria/Vibo-Valentia.jpg'
import monterossoBeachImg from '@/assets/images/Italy/liguria/monterosso/Monterosso beach.jpg'
import monterossoSunsetImg from '@/assets/images/Italy/liguria/monterosso/Monterosso-Al-Mare.jpg'
import baiaSilenzioLiguriaImg from '@/assets/images/Italy/liguria/monterosso/Cinque-Terre-La-Spezia-Province.webp'
import puntaProscuttoImg from '@/assets/images/Italy/puglia/Punta Prosciutto.jpg'
import toreSantAndreaImg from '@/assets/images/Italy/puglia/Torre-Sant-Andrea-near-Melendugno-Lecce-district-Apulia-Italy.jpg'

export default {
    data() {
        return {
            user: 'Beatrix',
            selectedPage: 'Italy',
            selectedRegion: 'Amalfi Coast',
            selectedBeach: 'Faraglioni',
            selectedImage: faraglioniImg,
            regions: {
                'Italy': [
                    {
                        name: 'Amalfi Coast',
                        beaches: [
                            { name: 'Faraglioni', images: [faraglioniImg] },
                            { name: 'Marina di Camerota', images: [marinaImg] }
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
                            { name: 'Cinque Terre', images: [baiaSilenzioLiguriaImg] }
                        ]
                    },
                    {
                        name: 'Puglia',
                        beaches: [
                            { name: 'Punta Prosciutto', images: [puntaProscuttoImg] },
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
                            { name: 'Follonica', images: [puntaProscuttoImg] },
                            { name: 'Marina di Grosseto', images: [toreSantAndreaImg] }
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
        }
    }
}
</script>

<template>
    <main :style="{ backgroundImage: this.selectedImage ? `url('${this.selectedImage}')` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }">
        <section class="sidebar">
            <header>Welcome, dear <span>{{ user }}</span></header>
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
                <div v-for="beach in getBeaches()" :key="beach.name" class="beach-card">
                    {{ beach.name }}
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
}

.sidebar {
    width: clamp(200px, 15%, 400px);
    height: 100vh;
    background-color: rgb(10, 61, 98, 41%);
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em 0;
    color: #fff;
}

header {
    font-family: 'Petrona', serif;
}

header span {
    font-family: 'Cinzel', serif;
    font-weight: bold;
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
    font-weight: bold;
    font-size: 1.25;
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.sidebar ul li.active {
    color: rgb(220, 56, 56);
    border-left: 3px solid #fff;
}
</style>