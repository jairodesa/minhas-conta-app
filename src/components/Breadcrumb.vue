<template>
  <div>
    <nav aria-label="breadcrumb ">
      <ol class="breadcrumb text-white bg-dark">
        <li class="breadcrumb-item active" aria-current="page">{{title}}</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: ["title"],
};
</script>

<style>
</style>