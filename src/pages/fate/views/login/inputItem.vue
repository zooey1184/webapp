<template>
  <div>
    <p>{{title}}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>