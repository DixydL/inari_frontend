<template>
  <v-app class="app-bg">
    <v-navigation-drawer 
      mini-variant 
      permanent
      fixed
      app
    >
      <v-list>
        <v-list-item class="px-2" to="/" router exact>
          <v-list-item-avatar>
            <v-img :src="require('assets/imgs/inari_logo.png')" />
          </v-list-item-avatar>
          <v-list-item-title></v-list-item-title>
        </v-list-item>

        <v-list-item to="/search" router exact>
          <v-list-item-action>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-action>
          <v-list-item-content></v-list-item-content>
        </v-list-item>

        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>mdi-newspaper-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content></v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app style="justify-content: space-between">
      <h1 class="logo-name">Inari</h1>

      <v-spacer />

      <div class="search-bar">
        <label for="search-input">
          <v-icon class="search-icon" medium>mdi-magnify</v-icon>
        </label>
        <input
          id="search-input"
          v-model="searchFilterName"
          type="text"
          placeholder="Шукати аніме..."
        />
      </div>

      <v-spacer />

      <v-btn class="login-btn" rounded large color="red darken-2">
        <v-icon style="margin-right: 10px"> mdi-account </v-icon>

        Увійти
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fill-height class="wrap" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </footer>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      searchFilterName: ''
    };
  },
};
</script>

<style lang="scss">
.app-bg.app-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
    url("~/assets/imgs/default_bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}

.wrap.wrap {
  padding: 60px 150px;
  align-items: flex-start;
  overflow-y: auto;
}

.logo-name {
  font-family: "Montez", cursive;
}

.login-btn {
  text-transform: none;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
}

.search-bar {
  display: flex;
  background-color: #414141;
  height: calc(100% - 10px);
  border-radius: 10px;
  padding: 0 16px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  width: 50%;

  label {
    display: flex;
    align-items: center;
  }

  input {
    margin: 5px;
    outline: none;
    color: #fff;
    width: 100%;
    letter-spacing: 0.5px;
  }
}

footer {
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #434343;
  padding-left: 80px;
}
</style>