export default {
  name: 'postedBy',
  title: 'PostedBy',
  type: 'reference',//cria uma referencia
  to: [{ type: 'user'}]//link da referencia
}