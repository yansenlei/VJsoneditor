import VJsoneditor from './VueJsoneditor'

export default VJsoneditor

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('v-jsoneditor', VJsoneditor)
}