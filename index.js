var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    },
    methods: {
        getClips: function() {
            fetch("https://r3owimfazk.execute-api.us-east-2.amazonaws.com/default/getToken?code=qqqqq")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.message = json;
            })
            .catch(err => console.log(err));
        }
    }
});