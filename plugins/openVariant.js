const plugin = require('tailwindcss/plugin')

const openVariant = plugin(function ({ addVariant }) {
  addVariant('group-open', ':merge(.group).open &') // .open is a class that is added to the group when it is open and & is the parent selector to select the parent element of the group that is open
  addVariant('peer-open', ':merge(.peer).open ~ &') // .open is a class that is added to the group when it is open and ~ is the peer selector to select the sibling element of the group that is open
})

module.exports = openVariant; // export the plugin
