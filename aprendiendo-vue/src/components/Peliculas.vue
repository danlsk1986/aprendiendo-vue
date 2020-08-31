<template>
    <section id="content">
                <h2 class="subheader">Peliculas</h2>              

                <!--Listado articulos-->
                <div id="articles">
                    <article class="article-item" v-for="pelicula in peliculas" v-bind:key="pelicula.title">
                        <div class="image-wrap">
                            <img :src="pelicula.img" :title="pelicula.title" :alt="pelicula.title" />
                        </div>
    
                        <h2>{{pelicula.title}}</h2>
                        <span class="date" :class="{
                            yeargreen: pelicula.year >= 2015,
                            yearred: pelicula.year < 2015
                        }">
                            {{pelicula.year}}
                        </span>
                        <a href="#">Leer más</a>

                        <div class="clearfix"></div>
                    </article>

                   
                </div>
                
            </section>
</template>

<script>
export default {
    name: 'Peliculas',
    data(){
        return{
            peliculas: [
                {   title: 'Batman Inicia',
                    year: 2005,
                    img: 'https://www.ecured.cu/images/thumb/6/63/Batman-inicia.jpg/300px-Batman-inicia.jpg'
                },
                {   title: 'Gran torino',
                    year: 2015,
                     img: 'https://2.bp.blogspot.com/_2Syv7WWYErE/S_FRPIb2QyI/AAAAAAAABP0/DBBINTiZCzs/s1600/Clint+Eastwood+-+Gran+Torino+(2).jpg'
                },
                {   title: 'Lord of the Rings',
                    year: 2003,
                    img: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'
                },
                {
                    title: 'Dr Strange',
                    year: 2016,
                    img: 'https://www.cinemascomics.com/wp-content/uploads/2017/04/7OpmunCEZo93nyRIbx59QRaFvZz.jpg.webp'
                }
            ]
        }
    }
}
</script>