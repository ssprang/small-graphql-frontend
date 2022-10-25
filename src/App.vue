<template>
  <v-app>
    <v-layout style="z-index: 0">
      <v-app-bar color="grey-lighten-2"></v-app-bar>
      <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
      <v-navigation-drawer color="grey-darken-2" permanent location="right"></v-navigation-drawer>
      <v-main>
          <Person/>
          <Persons/>
      </v-main>
    </v-layout>
  </v-app>
</template>


<script lang="ts">
import {defineComponent, provide} from 'vue'
import {DefaultApolloClient} from '@vue/apollo-composable'
import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client/core'
import Person from './components/Person.vue'
import Persons from './components/Persons.vue'

export default defineComponent({
  name: 'App',

  components: {
    Person,
    Persons
  },

  setup() {
    const httpLink = createHttpLink({
      // You should use an absolute URL here
      uri: 'http://localhost:8080/graphql',
      fetchOptions: {
        mode: 'cors', // no-cors, *cors, same-origin
      }
    })
    const cache = new InMemoryCache()
    const apolloClient = new ApolloClient({
      link: httpLink,
      cache,
    })
    provide(DefaultApolloClient, apolloClient)
  },

  data() {
    return {
      // Fetch application requirements here
    }
  },
})
</script>
