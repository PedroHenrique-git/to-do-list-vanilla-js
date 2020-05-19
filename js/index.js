(function(){

    function criarTd(texto){
        let td = document.createElement('td');
        let text = document.createTextNode(texto);
        td.appendChild(text);
        td.classList.add('tarefaText');
        return td;
    }
    
    function criaTdBtn(){
        let td = document.createElement('td');
        let btn = document.createElement('button');
        let text = document.createTextNode('Excluir');
        td.classList.add('tarefaBtn');
        btn.classList.add('excluir');

        btn.addEventListener('click',function(){
            if(confirm('Voce realmente deseja apagar está tarefa ?')){
                document.querySelector('#corpo').removeChild(this.parentNode.parentNode);
                let table = JSON.parse(localStorage.getItem('tarefas'));
                let valorTd = this.parentNode.parentNode.firstChild.textContent;
                table.forEach(text =>{
                    if(text === valorTd){
                        table.splice(table.indexOf(text), 1);
                        localStorage.setItem('tarefas',JSON.stringify(table));
                    }
                })
            }   
        })

        btn.appendChild(text);
        td.appendChild(btn);
        return td;
    }
    
    function criarTr(texto){
        let tr = document.createElement('tr');
        tr.appendChild(criarTd(texto));
        tr.appendChild(criaTdBtn());
        tr.classList.add('tarefa');
        return tr;
    }
    
    function AdicionarTrNaTabela(texto){
        const tbody = document.querySelector('#corpo');
        tbody.appendChild(criarTr(texto));
    }

    function LerTabelaESalvarNoArray(){
        const textTd = document.querySelectorAll('.tarefaText');
        const btnTd = document.querySelectorAll('.tarefaBtn');
        let table = [];

        textTd.forEach(text => {
            table.push(text.textContent)
        });
        return table;
    }

    function CriarTabelaPeloLocalStorage(){
        let table = JSON.parse(localStorage.getItem('tarefas'));
        if(table == null){
            alert('Nenhuma tarefa encontrada para este usuário');
        }else{
            table.forEach(text =>{
                AdicionarTrNaTabela(text);
            })
        }
    }

    //Adicionar e exluir tr
    document.querySelector('#btn-adicionar').addEventListener('click', e =>{
        e.preventDefault();
        if(document.querySelector('#tarefa').value != ''){
            AdicionarTrNaTabela(document.querySelector('#tarefa').value);
            document.querySelector('#tarefa').value = '';
        }else{
            alert("Por favor preencha o campo da tarefa");
        }
    });

    document.querySelector('#btn-salvar').addEventListener('click',function(e){
        e.preventDefault();
        let table = LerTabelaESalvarNoArray();
        
        if(table != []){
            localStorage.setItem('tarefas',JSON.stringify(table));
        }else{
            localStorage.setItem('tarefas','');
        }
    });

    CriarTabelaPeloLocalStorage();
})();



