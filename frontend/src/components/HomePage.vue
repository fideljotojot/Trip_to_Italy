<script>
export default {
    data() {
        return {
            user: 'Beatrix',
            pages: ['Amalfi Coast' ,'Calabria','Liguria','Pugulia','Sardania','Sicilia','Toscana'],
            images: {
                'Amalfi Coast': [
                    { name: 'Faraglioni', src: '@/assets/images/Italy/amalfi coast and campania/faraglioni.jpg' },
                    { name: 'Marina', src: '@/assets/images/Italy/amalfi coast and campania/marina.jpg' }
                ],
                'Calabria' : [
                    { name: 'Tropea', src: '@/assests/images/Italy/calabria/Vibo-Valentia.jpg' }
                ],
                'Liguria' : [
                    { name: 'Monterosso', src: '@/assets/images/Italy/liguria/monterosso/Monterosso beach.jpg' },
                    { name: 'Baia del Silenzio', src: '@/assets/images/Italy/liguria/baia_del_silenzio_Sestri_Levante.jpeg' }
                ],
                'Puglia' : [
                    { name: 'Punta Proscuitto', src: '@/assets/images/Italy/puglia/Punta Prosciutto.jpg' },
                    { name: 'Baia del Silenzio', src: '@/assets/images/Italy/puglia/Torre-Sant-Andrea-near-Melendugno-Lecce-district-Apulia-Italy.jpg' }
                ],
                'Sardania' : [
                    { name: 'Punta Proscuitto', src: '@/assets/images/Italy/puglia/Punta Prosciutto.jpg' },
                    { name: 'Baia del Silenzio', src: '@/assets/images/Italy/puglia/Torre-Sant-Andrea-near-Melendugno-Lecce-district-Apulia-Italy.jpg' }
                ],
                'Sicily' : [
                    { name: 'Punta Proscuitto', src: '@/assets/images/Italy/puglia/Punta Prosciutto.jpg' },
                    { name: 'Baia del Silenzio', src: '@/assets/images/Italy/puglia/Torre-Sant-Andrea-near-Melendugno-Lecce-district-Apulia-Italy.jpg' }
                ],
                'Toscana' : [
                    { name: 'Punta Proscuitto', src: '@/assets/images/Italy/puglia/Punta Prosciutto.jpg' },
                    { name: 'Baia del Silenzio', src: '@/assets/images/Italy/puglia/Torre-Sant-Andrea-near-Melendugno-Lecce-district-Apulia-Italy.jpg' }
                ],
            }
        }
    }
}
</script>

<template>
    <main>
        <section class="sidebar">
            <header>Welcome, dear {{ user }}</header>
            <ul>
                <li v-for="page in pages" :key="page">
                    {{ page }}
                </li>
            </ul>
        </section>
        <section>
            <RouterLink/>
        </section>
    </main>
</template>

<style scoped>
main {
    width: 100%;
    height: 100vh;
    overflow: hidden;
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
}
</style>