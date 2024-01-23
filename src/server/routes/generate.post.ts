export default defineEventHandler(async (event) => {
  const body = await readBody(event) //readBody是全局封装好的获取body的方法
  const { id } = body
  console.log('body===', body)
  return {
    hello: 'world'
  }
})