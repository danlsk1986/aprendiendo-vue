<template>
    <div id="articles">
        <article class="article-item">
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
    
    
</template>

<script>
export default {
    name: 'Pelicula',
    props: ['pelicula']   
}
</script>