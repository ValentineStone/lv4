<template>
  <div>
    <b-navbar class="nav-bar">
      <div class="logo">
        <router-link to="/">
          <img class="logo-img" src="logo.png" alt="Levach">
        </router-link>
      </div>

      <b-nav-form class="search-block">
        <b-form-input class="search-form" placeholder="Поиск"></b-form-input>
      </b-nav-form>

      <router-link to="/publish/" class="publish-button">Опубликовать статью</router-link>
    </b-navbar>
  </div>
</template>

<style lang="css">
  .nav-bar {
    height: 60px;
    background-color: #54A9F8;
  }

  .publish-button {
    font-weight: 500;
    background-color: #A8D4FC;
    color: #F3F6FF;
    width: 200px;
    height: 35px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    margin-right: 25px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
  }
  .publish-button:hover {
  	text-decoration: none;
	color: #F3F6FF;
  }
  .logo {
    margin-left: 75px;
  }

  .logo-img {
    width: 90px;
    height: 75px;
  }

  .search-block {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .search-form {
    height: 35px;
    border-radius: 35px;
    text-indent: 10px;
  }

  .logo {
    width: 60px;
  }
</style>
