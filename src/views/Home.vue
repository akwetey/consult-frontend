<template>
  <div class="home">
    <Countries />                   
  </div>
</template>

<script>
// @ is an alias to /src
import Countries from "@/components/Countries.vue";

export default {
  name: "home",
  components: {
    Countries
  }
};
</script>
<style scoped lang="scss">

</style>
