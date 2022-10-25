<script setup lang="ts">
import {computed} from 'vue'
import {graphql} from '../gql'
import {ref} from 'vue'
import {PersonQuery, PersonQueryVariables} from '../gql/graphql'
import {useQuery} from '@vue/apollo-composable'

const {result} = useQuery<PersonQuery, PersonQueryVariables>(
    graphql(/* GraphQL */ `
    query person($id: Int!) {
      findPerson(id: $id) {
        firstName
        lastName
      }
    }
  `),
    // variables are typed!
    {id: 1}
)
const user = ref(computed<PersonQuery["findPerson"]>(() => result.value?.findPerson))

</script>
<template>
  <!-- template types are typed! -->
  <v-theme-provider theme="light" with-background class="pa-10">
    <v-card class="d-flex pa-md-2">
      <v-avatar color="surface-variant">{{ user?.firstName[0] }}{{ user?.lastName[0] }}</v-avatar>
      <v-card-title>{{ user?.firstName }} {{ user?.lastName }}</v-card-title>
    </v-card>
  </v-theme-provider>
</template>