<template>
    <div class="btn">{{btntext}}</div>
</template>

<script>
export default {
    props:['btntext']
}
</script>

<style scoped>
    .btn{
        position: absolute;
        height: 1rem;
        width: 6.5rem;
        background-color: rgb(0,0,0);
        color: white;
        text-align: center; 
        font-size: 0.4rem;
        line-height: 1rem;
        border-radius: 0.1rem;
    }
</style>