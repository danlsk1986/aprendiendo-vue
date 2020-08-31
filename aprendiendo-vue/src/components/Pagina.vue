<template>
    <section id="content">
        <h2 class="subheader">Pagina de pruebas</h2>
        <h3>{{id_desde_url}}</h3>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <h4>{{nombre}}</h4>
        <button @click="redirigirAlBlog()">Al Blog</button>  
    </section>
</template>

<script>
export default {
    name: 'Pagina',

    created(){
        console.log('Componente Creado');
    },
    mounted(){
        //Nos  permite recojer parametros desde la url
        this.id_desde_url = this.$route.params.id;
        console.log('Componente Montado');
    },
    updated(){
        console.log('Componente Actualizado');
    },
    destroyed(){
        console.log('Componente Eliminado');
    },
    data(){
        return{
            id_desde_url: null,
            nombre: 'Victor Robles'
        };
    },
    methods: {
        actualizarNombre(){
        this.nombre = 'VICTOR ROBLES WEB';
        console.log(this.nombre);
       },
       redirigirAlBlog(){
           this.$router.push('/blog')
       }
    }
   
};
</script>