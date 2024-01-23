export default defineEventHandler(async (event) => {
  const query = getQuery(event) // getQuery是全局的方法，可以直接调用
  const { id } = query
  return {
    hello: 'world'
  }
})