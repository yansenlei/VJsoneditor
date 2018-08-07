import VJsoneditor from './VueJsoneditor'

export default VJsoneditor

VJsoneditor.install = function install(Vue) {
  Vue.component(VJsoneditor.name, VJsoneditor)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(VJsoneditor.name, VJsoneditor)
}