<script lang="ts">
  import MenuBar from "../components/menu-bar.vue";
  import API from "../API";
  import {useRoute} from "vue-router";
  const api: API = new API();

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
        product: {name: "N/A", price: 0, category: "N/A"} as Product,
        id: 0
      };
    },
    mounted() {
      this.id = Number(useRoute().params.id);
      api.getProduct(this.id).then((res) => {
        this.product = res.data.shift();
      });
    },
    methods: {
      updateProduct() {
        const formElement = this.$refs.ProductForm as HTMLFormElement;
        const data = new FormData(formElement);
        api
          .updateProduct(data, this.id)
          .then(() => {
            formElement.reset();
            this.$router.push("/dashboard");
          })
          .catch(() => {
            alert("[Erro] O token de autenticação expirou!");
            localStorage.clear();
            this.$router.replace("/login");
          });
      }
    }
  };
</script>

<template>
  <menu-bar />
  <div
    class="container max-w-sm shadow-2xl backdrop-blur-sm bg-white/60 px-2 rounded-lg">
    <form
      ref="ProductForm"
      class="form-control text-center px-12 sm:px-8 pt-12 py-8"
      @submit.prevent="updateProduct">
      <span
        class="antialiased my-2 text-4xl text-center font-bold text-gray-700">
        Edição de produto
      </span>
      <label class="py-2">
        <span class="antialiased text-lg font-bold text-gray-700">Produto</span>
        <input
          id="name"
          type="text"
          name="name"
          :value="product.name"
          class="mt-1 block w-72 rounded-md border-gray-300 shadow-sm focus:border-slate-400 focus:ring focus:ring-slate-300 focus:ring-opacity-50"
          placeholder="ex: Shampoo" />
      </label>
      <label class="py-2">
        <span class="antialiased text-lg font-bold text-gray-700">Preço</span>
        <input
          id="price"
          type="number"
          name="price"
          step="0.01"
          :value="product.price.toFixed(2)"
          class="mt-1 block w-72 rounded-md border-gray-300 shadow-sm focus:border-slate-400 focus:ring focus:ring-slate-300 focus:ring-opacity-50"
          placeholder="R$ 11.99" />
      </label>
      <label class="py-2">
        <span class="antialiased text-lg font-bold text-gray-700"
          >Categoria</span
        >
        <input
          id="category"
          type="text"
          name="category"
          :value="product.category"
          class="mt-1 block w-72 rounded-md border-gray-300 shadow-sm focus:border-slate-400 focus:ring focus:ring-slate-300 focus:ring-opacity-50"
          placeholder="ex: Cosméticos" />
      </label>
      <label class="py-2 text-left">
        <span class="antialiased text-lg font-bold text-gray-700">Imagem</span>
        <input
          id="image"
          name="image"
          type="file"
          class="file-input file-input-bordered" />
        <label class="label">
          <small class="label-text-alt">Formatos aceitos: png, jpg, jpeg</small>
        </label>
      </label>
      <label class="py-2">
        <textarea
          id="description"
          name="description"
          :value="product.description"
          placeholder="Descrição"
          class="textarea textarea-md shadow-sm border-gray-300 focus:border-slate-400 focus:ring focus:ring-slate-300 focus:ring-opacity-50 w-full max-w-xs"></textarea>
      </label>
      <input id="_method" name="_method" type="hidden" value="put" />
      <button
        class="btn gap-2 w-72 rounded-md text-sm text-center text-gray-100 font-semibold uppercase transition duration-200 ease-in-out cursor-pointer hover:bg-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Salvar
      </button>
    </form>
  </div>
</template>
