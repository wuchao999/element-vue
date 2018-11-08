
<script>
export default {
    name: 'Buttons',
    props: [ 'buttons', 'row' ],
    render (h) {
        return h('div', [
            this.buttons.map(item => {
                let events = {}
                Object.keys(item).forEach(fn => {
                    if (typeof item[fn] === 'function'){
                        events[fn] = () => {
                            item[fn](this.row)
                        }
                    }
                })
                return h('el-button', {
                    domProps: { title: item.label },
                    props: { type: item.type, size: item.size, icon: item.icon },
                    style: {marginRight: '5px'},
                    on: events
                }, !this.row ? item.label : '')
            })
        ])
    }
}
</script>
