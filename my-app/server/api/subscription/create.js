export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  console.log('DATA FROM FORM:', body)

  return {
    message: 'Subscription created successfully',
    data: body
  }
})
