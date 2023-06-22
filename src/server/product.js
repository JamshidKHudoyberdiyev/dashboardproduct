import axios from './axios.js'

export const getProduct = async () => {
  return await axios.get('/products')
}

export const getProductItem = (id) => {
  return axios.get(`/products/${id}`)
}
