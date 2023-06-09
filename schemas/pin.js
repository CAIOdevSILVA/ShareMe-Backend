export default { //O schema cria um 'esqueleto' de como os dados de uma estrutura serão saçvos no sanity
  name: 'pin',
  title: 'Pin',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string'
    },
    {
      name: 'about',
      title: 'About',
      type: 'string'
    },
    {
      name: 'destination',
      title: 'destination',
      type: 'url'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'userId',
      title: 'UserID',
      type: 'string'
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy'//referencia
    },
    {
      name: 'save',
      title: 'Save',
      type: 'array',
      of: [{ type: 'save' }]
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: "comment" }]
    }
  ]
}