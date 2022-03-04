<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <div>
      <slot name="container"></slot>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>

    <footer>
      <slot></slot>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
