// Sistema de Compra de Seguidores - JavaScript
// Este código é apenas para fins educacionais

// Variáveis globais
let currentPackage = null;
let currentPrice = null;

// Inicialização quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    console.log("Sistema de compra de seguidores carregado - Apenas para fins educacionais");
});

// Configura todos os event listeners
function initializeEventListeners() {
    // Adiciona event listeners para todos os botões de pacote
    const packageButtons = document.querySelectorAll('.packages .btn');
    packageButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtém os dados do pacote a partir dos atributos data
            const packageName = this.getAttribute('data-package');
            const packagePrice = this.getAttribute('data-price');
            showOrderModal(packageName, packagePrice);
        });
    });
    
    // Event listeners para os modais
    document.getElementById('cancelOrder').addEventListener('click', closeModal);
    document.getElementById('confirmOrder').addEventListener('click', placeOrder);
    document.getElementById('closeSuccessModal').addEventListener('click', closeSuccessModal);
    
    // Fechar modal clicando fora dele
    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('orderModal')) {
            closeModal();
        }
        if (event.target == document.getElementById('successModal')) {
            closeSuccessModal();
        }
    });
}

// Exibe o modal de confirmação de pedido
function showOrderModal(name, price) {
    currentPackage = name;
    currentPrice = price;
    
    // Atualiza as informações no modal
    document.getElementById('packageName').textContent = name;
    document.getElementById('packagePrice').textContent = parseFloat(price).toFixed(2);
    
    // Exibe o modal
    document.getElementById('orderModal').style.display = 'flex';
    
    console.log(`Modal aberto para o pacote: ${name} - R$ ${price}`);
}

// Fecha o modal de pedido
function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
    console.log("Modal de pedido fechado");
}

// Processa a confirmação do pedido
function placeOrder() {
    // Simula o processamento do pedido
    console.log(`Processando pedido: ${currentPackage} - R$ ${currentPrice}`);
    
    // Fecha o modal de confirmação
    closeModal();
    
    // Simula um atraso no processamento
    setTimeout(function() {
        // Exibe o modal de sucesso
        document.getElementById('successModal').style.display = 'flex';
        console.log("Pedido processado com sucesso (simulado)");
        
        // Em um sistema real, aqui seria feita uma requisição para o servidor
        // para processar o pagamento e iniciar o processo de entrega
    }, 1000);
}

// Fecha o modal de sucesso
function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
    console.log("Modal de sucesso fechado");
    
    // Em um sistema real, aqui poderíamos redirecionar o usuário
    // ou atualizar a lista de pedidos
}

// Simulação de funcionalidades adicionais (apenas para demonstração)

// Função para simular a adição de fundos à conta
function simulateAddFunds(amount) {
    console.log(`Simulando adição de R$ ${amount} à conta`);
    // Em um sistema real, isso se conectaria a um gateway de pagamento
}

// Função para simular a verificação de status de pedidos
function simulateCheckOrderStatus(orderId) {
    console.log(`Simulando verificação do status do pedido #${orderId}`);
    // Em um sistema real, isso buscaria informações no banco de dados
}

// Função para simular o cancelamento de um pedido
function simulateCancelOrder(orderId) {
    console.log(`Simulando cancelamento do pedido #${orderId}`);
    // Em um sistema real, isso atualizaria o status no banco de dados
}

