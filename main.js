let app = new Vue({
    el: '#app',
    data: {
        title: 'Shopping List',
        items: [
            { name: "Soap", checked: false },
            { name: "Colored pencils", checked: false },
            { name: "Pasta", checked: false },
            { name: "Potatoes", checked: false },
            { name: "Flour", checked: false },
            { name: "Salt", checked: false }
        ]
    },
    methods: {
        isAllChecked: function() {
            return this.items.filter(i => i.checked).length === this.items.length;
        },
        uncheckAll: function() {
            this.items.forEach(i => i.checked = false);
        }
    }
});