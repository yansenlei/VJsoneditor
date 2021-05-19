<template lang="html">
    <div class="jsoneditor-container" :class="{'max-box':max,'min-box':!max}" :style="getHeight">
        <div ref="jsoneditor" class="jsoneditor-box"></div>
        <button type="button" @click="max = !max" class="max-btn" size="mini" v-if="options.mode == 'code' && plus"></button>
    </div>
</template>

<script>
import JSONEditor from "jsoneditor/dist/jsoneditor.min.js"
import 'jsoneditor/dist/jsoneditor.min.css'
export default {
  name: "v-jsoneditor",
  data() {
    return {
      editor: null,
      style: {},
      max: false,
      internalChange: false
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    value: [Object, Array, Number, String, Boolean],
    height: {
      type: String
    },
    plus: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onChange() {
      let error = null
      let json = {}
      try {
        json = this.editor.get()
      } catch (err) {
        error = err
      }
      if (error) {
        this.$emit("error", error)
      } else {
        if (this.editor) {
          this.internalChange = true
          this.$emit("input", json)
          this.$nextTick(() => {
            this.internalChange = false
          })
        }
      }
      this.options.onChange && this.options.onChange(...arguments)
    },
    initView() {
      if (!this.editor) {
        var container = this.$refs.jsoneditor
        let cacheChange = this.options.onChange
        delete this.options.onChange
        const options = Object.assign(this.options, {
          onChange: this.onChange
        })
        this.editor = new JSONEditor(container, options)
        this.options.onChange = cacheChange
      }
      this.editor.set(this.value !== undefined ? this.value : {})
    },
    destroyView() {
      if (this.editor) {
        this.editor.destroy()
        this.editor = null
      }
    }
  },
  watch: {
    value: {
      handler(value) {
        if (this.editor && value !== undefined && !this.internalChange) {
          this.editor.set(value);
        }
      },
      deep: true
    },
    max(value) {
      this.$nextTick(() => {
        this.initView()
      })
    },
    options: {
      handler (value) {
        if (this.options && this.options.mode && this.editor) {
          this.editor.setMode(this.options.mode)
        }
      },
      deep: true
    }
  },
  mounted() {
    this.initView()
  },
  beforeDestroy() {
    this.destroyView()
  },
  computed: {
    getHeight() {
      if (this.height && !this.max) {
        return {
          height: this.height
        }
      }
      return {}
    }
  }
}
</script>

<style lang="css" scoped>
.jsoneditor-container.max-box {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
}

.jsoneditor-container.min-box {
  position: relative;
  min-width: 300px;
  width: 100%;
}

.jsoneditor-box {
  height: 100%;
}

.jsoneditor-container:hover .max-btn {
  display: block;
}

.max-btn {
  display: none;
  position: absolute;
  top: 7px;
  right: 110px;
  color: #fff;
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0) url(./assets/plus.svg) no-repeat;
  background-position: 3px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 3px;
}
.max-btn:hover {
  border: 1px solid #d7e6fe;
}
</style>
