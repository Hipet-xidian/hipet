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
        width: 6.2rem;
        background-color: rgba(255,255,255,.1);
        /* text-align: center; */
        padding-left: 0.3rem;
        font-size: 0.3rem;
        line-height: 1rem;
        border-radius: 0.1rem;
        box-shadow: 0 0.05rem 0.06rem 0.03rem rgba(0, 0, 0, .15);
    }
</style>