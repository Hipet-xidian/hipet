<template>
    <div class="clickbtn">
        <div class="btn">{{clicktext}}</div>
    </div>
</template>

<script>
export default {
    props:['clicktext']
}
</script>

<style scoped>
    .btn{
            height: 1rem;
            width: 6.6rem;
            background-color: rgb(0,0,0);
            text-align: center;
            color: white;
            font-size: 0.4rem;
            line-height: 1rem;
            border-radius: 0.1rem;
        }
</style>