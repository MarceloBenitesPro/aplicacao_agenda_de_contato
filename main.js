function adicionarContato() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var tabela = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();

    var colunaNome = novaLinha.insertCell(0);
    var colunaTelefone = novaLinha.insertCell(1);

    colunaNome.innerText = nome;
    colunaTelefone.innerText = telefone;

    // Limpa os campos do formulário após adicionar o contato
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
  }