<script>
export default {
    data() {
        return {
            user: 'Beatrix',
            pages: ['Amalfi Coast' ,'Calabria','Liguria','Pugulia','Sardania','Sicilia','Toscana']
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