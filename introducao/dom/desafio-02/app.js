new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta:function(){
            alert("O botão foi clicado S2")
        },
        armazenaValor:function(event){
          return this.valor = event.target.value
        }
    }
})