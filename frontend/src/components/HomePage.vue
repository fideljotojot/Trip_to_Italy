<script>
export default {
    data() {
        return {
            user: 'Beatrix'
        }
    }
}
</script>

<template>
    <main>
        <section class="sidebar">
            <header>Welcome, dear {{ user }}</header>
            <ul>
                <li>Amalfi</li>
                <li>Calabria</li>
                <li>Liguria</li>
                <li>Pugulia</li>
                <li>Sardania</li>
                <li>Sicilia</li>
                <li>Toscana</li>
            </ul>
        </section>
        <section>
            <RouterLink/>
        </section>
    </main>
</template>

<style scoped>

</style>