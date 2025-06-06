document.addEventListener('DOMContentLoaded', () => {
  const calcularBtn = document.getElementById('calcular');
  
  calcularBtn.addEventListener('click', calcularAluguel);
  
  // Também permite calcular ao pressionar Enter em qualquer campo
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        calcularAluguel();
      }
    });
  });
});

function calcularAluguel() {
  // Obter valores dos campos
  const valorBase = parseFloat(document.getElementById('valorBase').value) || 0;
  const porcentagem = parseFloat(document.getElementById('porcentagem').value) || 0;
  const taxaCondominio = parseFloat(document.getElementById('taxaCondominio').value) || 0;
  const iptu = parseFloat(document.getElementById('iptu').value) || 0;
  
  // Validar se pelo menos o valor base foi preenchido
  if (valorBase <= 0) {
    alert('Por favor, informe um valor base válido para o aluguel.');
    return;
  }
  
  // Calcular valores
  const valorComPorcentagem = valorBase * (1 + porcentagem / 100);
  const valorTotal = valorComPorcentagem + taxaCondominio + iptu;
  
  // Exibir resultados
  document.getElementById('resultValorBase').textContent = `R$ ${formatarValor(valorBase)}`;
  document.getElementById('resultValorComPorcentagem').textContent = `R$ ${formatarValor(valorComPorcentagem)}`;
  document.getElementById('resultTaxaCondominio').textContent = `R$ ${formatarValor(taxaCondominio)}`;
  document.getElementById('resultIptu').textContent = `R$ ${formatarValor(iptu)}`;
  document.getElementById('resultValorTotal').textContent = `R$ ${formatarValor(valorTotal)}`;
  
  // Mostrar a seção de resultados
  document.getElementById('resultado').classList.remove('hidden');
}

// Função para formatar valores monetários
function formatarValor(valor) {
  return valor.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}