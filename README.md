# v-jsoneditor

> Vue JSONEditor

## Try the demo

https://yansenlei.github.io/VJsoneditor/

![demo](./v-jsoneditor.gif)

## Installation

```bash
npm install v-jsoneditor
```

## Using

### Import

```javascript
import VJsoneditor from 'v-jsoneditor'

export default {
    name: 'app',
    components: {
        VJsoneditor
    },
    data() {
        return {
            json: {
                "hello": "vue"
            }
        }
    },
    methods: {
        onError() {
            console.log('error')
        }
    }
}
```

### Use in template

```html
<v-jsoneditor v-model="json" :options="options" :plus="false" :height="400px" @error="onError">
```

### Options
| Name           | Description                                                                                                                                                   | type    | default          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :--------------: |
| options        | Jsoneditor params, You can look at the detailed  [configuration](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options?blank) | Object  | { mode: 'code' } |
| value(v-model) | Object value                                                                                                                                                  | Object  | { }              |
| plus           | Whether full screen switching is added                                                                                                                        | Boolean | true             |
| height         | Default height                                                                                                                                                | String  | -                |

### Events
| Name  | Description    |
| ----- | -------------- |
| error | Error callback |



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
