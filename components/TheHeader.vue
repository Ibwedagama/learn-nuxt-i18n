<template>
  <header
    class="flex sticky top-0 w-full h-16 z-50 bg-white justify-between items-center px-20 shadow-lg"
  >
    <img src="~/assets/logo/logo_jds.png" alt="" width="71" height="29" />
    <ul class="flex gap-8">
      <li>
        <NuxtLink to="/">Beranda</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">Tentang Kami</NuxtLink>
      </li>
    </ul>
    <LanguageSwitcher />
  </header>
</template>
