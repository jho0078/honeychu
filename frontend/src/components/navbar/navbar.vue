<template>
  <nav class="nav_HY">
    <div class="logo_HY">
      <a href="#" class="logo text-lg">Menu</a>
      <span class="subheader_HY">A Vue School course></span>
    </div>
  </nav>
</template>

 

<script>
export default {};
</script>

 

<style scoped>
nav_HY {
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin-bottom: 70px;
  font-weight: lighter;
  letter-spacing: 0.5px;
}

.nav_HY .logo_HY {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav_HY .logo_HY .subheader_HY {
  opacity: 0.7;
  font-size: 0.9rem;
  color: white;
}

.nav .nav-content {
  font-size: 1rem;
}

.nav-content ul {
  display: flex;
  list-style: none;
}

.nav-content ul li {
  padding: 2px 10px;
}

.nav-content ul li:not(:first-of-type) {
  border-left: 1px solid rgb(255, 255, 255, 0.2);
}
</style>