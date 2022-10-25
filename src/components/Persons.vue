<script setup lang="ts">
import {computed} from 'vue'
import {graphql} from '../gql'
import {
  PersonsQuery,
  PersonsQueryVariables
} from '../gql/graphql'
import {useQuery} from '@vue/apollo-composable'

const {result} = useQuery<PersonsQuery, PersonsQueryVariables>(
    graphql(/* GraphQL */ `
    query persons($page: Int!, $size: Int!) {
      findPersons(page: $page, size: $size) {
        content {
          firstName
          lastName
        }
      }
    }
  `),
    // variables are typed!
    {page: 0, size: 10}
)
const users = computed<PersonsQuery["findPersons"]["content"]>(() => result.value?.findPersons?.content)

</script>
<template>
  <!-- template types are typed! -->
  <v-theme-provider theme="light" with-background class="pa-10">
    <v-card v-for="user in users" class="d-flex pa-md-2">
      <v-avatar color="surface-variant">{{ user?.firstName[0] }}{{ user?.lastName[0] }}</v-avatar>
      <v-card-title>{{ user?.firstName }} {{ user?.lastName }}</v-card-title>
    </v-card>
  </v-theme-provider>
</template>