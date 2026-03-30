<script setup>
useHead({
  title: 'Список продуктів'
})

const search = ref('')

const { data } = await useFetch('/api/products')

const products = computed(() => data.value ?? [])

const columns = [
  { accessorKey: 'title', header: 'Назва' },
  { accessorKey: 'description', header: 'Опис' },
  { accessorKey: 'price', header: 'Ціна' },
  { accessorKey: 'rating', header: 'Оцінка' },
  { accessorKey: 'brand', header: 'Бренд' },
  { accessorKey: 'category', header: 'Категорія' },
  { accessorKey: 'thumbnail', header: 'Фото' }
]
</script>

<template>
  <div style="padding: 20px">
    <h1>Список продуктів</h1>

    <!-- 🔍 пошук -->
    <UInput v-model="search" placeholder="Пошук..." class="mb-4" />

    <!-- 📊 таблиця -->
    <UTable
      :data="products"
      :columns="columns"
      :global-filter="search"
      :pagination="{ pageSize: 5 }"
    >

      <!-- 🖼 Фото -->
      <template #thumbnail-cell="{ row }">
        <img :src="row.original.thumbnail" width="100" height="100" />
      </template>

      <!-- ⭐ Оцінка -->
      <template #rating-cell="{ row }">
        <span :style="{ color: row.original.rating < 4.5 ? 'red' : 'green' }">
          {{ row.original.rating }}
        </span>
      </template>

    </UTable>
  </div>
</template>
