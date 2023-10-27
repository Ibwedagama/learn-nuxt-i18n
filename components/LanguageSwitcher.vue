<template>
  <select
    v-model="selectedLanguage"
    class="w-40 mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
    @change="switchLanguage"
  >
    <option
      v-for="language in languages"
      :key="language.code"
      :selected="language === selectedLanguage"
      :value="language.code"
    >
      {{ language.name }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: null,
    }
  },
  computed: {
    languages() {
      return this.$i18n.locales
    },
  },
  mounted() {
    this.selectedLanguage = this.$i18n.locale
  },
  methods: {
    switchLanguage(event) {
      this.$i18n.setLocale(event.target.value)
    },
  },
}
</script>
