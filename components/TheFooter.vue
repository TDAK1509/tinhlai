<template>
  <footer class="p-4 bg-black text-white">
    <h4 class="font-bold">Credits</h4>
    <ul class="list-disc list-inside">
      <li>
        Logo made by
        <a
          :class="linkTextColor"
          href="https://www.freelogodesign.org/"
          target="_blank"
          rel="noreferrer"
          >Free logo design</a
        >
      </li>
      <li>
        Flags icons made by
        <a
          :class="linkTextColor"
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
          >Freepik</a
        >
        from
        <a
          :class="linkTextColor"
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noreferrer"
          >www.flaticon.com</a
        >
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      linkTextColor: "text-yellow-500"
    };
  }
};
</script>

<style>
</style>
