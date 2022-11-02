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
  <v-theme-provider theme="light" with-background class="pa-10">
    <v-card>
      <v-card-title>
        <v-icon icon="mdi-account-group"/>
        Persons
      </v-card-title>
      <v-table>
        <tbody>
        <tr v-for="user in users" :key="user.lastName">
          <td>
            <v-avatar color="surface-variant">{{ user?.firstName[0] }}{{ user?.lastName[0] }}</v-avatar>
          </td>
          <!-- template types are typed! -->
          <td>{{ user?.firstName }}</td>
          <td>{{ user?.lastName }}</td>
        </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-theme-provider>
</template>