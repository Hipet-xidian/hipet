<template>
  <div class="homebtn">
      <div class="btn">{{btntext}}</div>
  </div>
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
        width: 3rem;
        background-color: rgba(255,255,255,.1);
        text-align: center;
        line-height: 1rem;
        border-radius: 0.1rem;
        box-shadow: 0 0.05rem 0.06rem 0.03rem rgba(0, 0, 0, .15);
    }
</style>