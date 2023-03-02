<script lang="ts">
  import MenuBar from "../components/menu-bar.vue";
  import API from "../API";
  const api = new API();

  type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
  };

  export default {
    components: {MenuBar: MenuBar},
    data() {
      return {
        products: [] as Array<Product>,
        product: [],
        checked: [] as number[],
        allChecked: null as boolean | null
      };
    },
    mounted() {
      this.loadProducts();
    },
    methods: {
      toggleAll() {
        this.checked = [];
        if (!this.allChecked) {
          this.products.forEach((product: Product) =>
            this.checked.push(product.id)
          );
        }

        this.allChecked = this.allChecked ? null : true;
      },
      toggleSelect(item_id: number) {
        let pos: number = this.checked.indexOf(item_id);
        pos == -1
          ? this.checked.push(item_id)
          : (this.checked = this.checked.filter((el) => item_id != el));
      },
      loadProducts() {
        const cb = document.querySelectorAll(
          "input[type=checkbox]"
        ) as NodeListOf<HTMLInputElement>;
        cb.forEach((el: HTMLInputElement) => (el.checked = false));
        api.getProducts().then((res) => {
          this.products = res.data;
        });
      },
      async deleteResource() {
        api.deleteResource(this.checked).then(() => this.loadProducts());
        this.checked.forEach((e) => this.toggleSelect(e));
      },

      async deleteItem(item_id: number) {
        api.deleteItem(item_id).then(() => this.loadProducts());
      }
    }
  };
</script>

<style scoped>
  .table :where(thead th) {
    background-color: #232931;
    color: #fff;
  }
</style>

<template>
  <menu-bar />
  <div class="container max-w-4xl my-4 text-center">
    <button
      class="btn btn-md mb-4 text-center cursor-pointer text-white bg-red-500 hover:bg-red-700 transition duration-100 ease-in-out rounded-md"
      @click="deleteResource()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="mr-2 w-6 h-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
      Exclusão múltipla
    </button>

    <div id="tb_products" class="grid grid-cols-2 w-full">
      <div
        v-for="(product, key) in products"
        :key="key"
        class="card card-compact w-96 bg-base-100 py-6 my-4 shadow-xl">
        <input
          :id="String(product.id)"
          type="checkbox"
          class="checkbox rounded-sm"
          :checked="(allChecked as boolean)"
          @change="toggleSelect(product.id)" />
        <figure>
          <img
            :src="`http://localhost:8000/storage/${product.image}`"
            alt="Product image" />
        </figure>
        <div class="card-body mt-4">
          <h2 class="card-title text-2xl">
            {{ product.name }}
            <div class="badge">{{ product.category }}</div>
          </h2>
          <p class="card-description">{{ product.description }}</p>
          <div class="card-actions justify-end mx-4">
            <h2 class="text-bold text-2xl card-price">
              R$ {{ product.price.toFixed(2) }}
            </h2>
            <router-link :to="`/product/edit/${product.id}`">
              <button
                class="btn btn-xs w-10 h-10 text-center cursor-pointer text-white bg-blue-500 hover:bg-blue-700 transition duration-100 ease-in-out rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6">
                  <path
                    d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path
                    d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
              </button>
            </router-link>
            <button
              class="btn btn-xs w-10 h-10 text-center cursor-pointer text-white bg-red-500 hover:bg-red-700 transition duration-100 ease-in-out rounded-md"
              @click.prevent="deleteItem(product.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6">
                <path
                  fill-rule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
