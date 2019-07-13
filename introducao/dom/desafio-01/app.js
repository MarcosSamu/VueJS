new Vue({
    el:'#desafio',

    data:{
        meuNome:'Marcos Samuel',
        minhaIdade:19,
        urlImage:'https://static.imasters.com.br/wp-content/uploads/2018/03/VUEJS.jpg'
    },
    methods:{
        multiplo_de_3:function(){
            return this.minhaIdade * 3
        },
        aleatorioNumero:function(){
            return Math.floor(Math.random() * 2)
        },
    }
    
})