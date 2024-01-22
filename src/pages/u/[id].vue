<template>
  <div class="hello">
    <p v-for="item in list">str: {{ item.unit_name }}</p>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'


const route = useRoute();
// console.log('route===', route)
let id = route.params.id
// let id = route.query.id
// let id = 21
console.log('unit id===', id)

let str = ref('')

const { data, pending, error, refresh } = await useAsyncData(
  'mountains',
  () => {
    const res = $fetch(`https://wechatgate.91160.com/guahao/v1/unit/${id}/branch?pos=113.92595805,22.51489918&physical_examine=0&city_id=5&cid=16&sc_distinct_id=223279379&trace_id=aed6eedb-20b5-4457-a63a-a8da877366c1-1705652225280&user_key=9bcccba0675812bcb75c8ef2ddc4dbd3ZMiiaOWX20240218140740`)
    // console.log('res===', res)
    return res
  }
)
console.log('data===', data)
const list = ref([])
list.value = data.value.data


// setTimeout(() => {
//   str.value = `${id}-${Date.now()}`
// }, 2000);

// axios.get(`https://wechatgate.91160.com/guahao/v1/unit/${id}/branch?pos=113.92595805,22.51489918&physical_examine=0&city_id=5&cid=16&sc_distinct_id=223279379&trace_id=aed6eedb-20b5-4457-a63a-a8da877366c1-1705652225280&user_key=9bcccba0675812bcb75c8ef2ddc4dbd3ZMiiaOWX20240218140740`).then((res) => {
//   // console.log('res===', res)
//   const data = res.data.data
//   str.value = data[0].unit_name
// })
</script>

<style scoped>
.hello {
  /* font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  padding: 2rem; */
}
</style>
