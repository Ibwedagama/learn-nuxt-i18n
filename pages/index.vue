<template>
  <section>
    <h1 class="text-3xl font-bold leading-9 mb-8">
      {{ $t('newsSectionTitle') }}
    </h1>
    <section>
      <h2 class="text-xl font-bold mb-8">
        {{ $t('newsTitle') }}
      </h2>
      <img
        src="https://dvgddkosknh6r.cloudfront.net/live/media/img/1698304528-kamis3.jpeg"
        alt="Masterplan Jabar Smart Province"
        class="mb-8"
      />
      <div>
        <p>
          {{ $t('newsContent') }}
        </p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
