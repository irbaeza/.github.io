
# Case Técnico - Coleta de Dados para Google Analytics

Este repositório contém a implementação de um case técnico para a posição de **Consultor Martech** na **DP6**. O objetivo é demonstrar habilidades em planejamento e implementação de coleta de dados para o Google Analytics em um ambiente Web Desktop. Esta solução foi desenvolvida seguindo as especificações fornecidas e está documentada abaixo.

## Motivação

A DP6 é uma consultoria que atua no ecossistema de dados voltado para o marketing, utilizando tecnologias de MarTech e AdTech como Google Analytics, Adobe Analytics, entre outras, para proporcionar uma visão completa da jornada do usuário. Este case busca avaliar a capacidade de configurar eventos e coleta de dados de acordo com as melhores práticas, visando a integridade dos dados e a customização de eventos conforme a necessidade do cliente.

## Estrutura do Código

O código JavaScript foi escrito para coletar dados de interação de usuários com a página, incluindo eventos de cliques e submissão de formulários, utilizando `gtag.js` para enviar os eventos ao Google Analytics.

### Principais Funcionalidades

1. **Coleta de Page Views:**
   - Coleta automática de visualizações de página para cada página acessada.

2. **Evento de Clique no Menu de Contato:**
   - Registra cliques em links de contato no menu principal, categorizando o evento com o nome do elemento e do grupo ao qual pertence.

3. **Download de Arquivos:**
   - Captura cliques em links de download para arquivos PDF, categorizando o evento adequadamente.

4. **Interação com Cards de Montadoras:**
   - Na página de análise, monitora cliques em cards específicos, capturando o ID de cada card como `element_name` para uma identificação detalhada.

5. **Interações em Formulários na Página "Sobre":**
   - **Início de Preenchimento:** Captura quando o usuário começa a preencher o formulário de contato.
   - **Submissão do Formulário:** Registra a tentativa de envio, incluindo o texto do botão de envio para identificação.
   - **Confirmação de Sucesso:** Detecta uma mensagem de sucesso e captura o evento como uma confirmação de visualização de sucesso do formulário.

## Estrutura de Eventos e Parâmetros

Cada evento possui parâmetros específicos conforme descrito abaixo:

- **page_view**: Captura a visualização de página com `page_title` e `page_location`.
- **click (Contato e Download)**: Captura cliques nos links de "Entre em Contato" e "Download PDF" com `element_name` e `element_group`.
- **click (Ver Mais - Cards de Montadoras)**: Captura o ID de cada card como `element_name`.
- **form_start**: Captura o início do preenchimento do formulário com `form_id` e `form_name`.
- **form_submit**: Captura a tentativa de submissão do formulário com `form_submit_text`.
- **view_form_success**: Confirma o envio bem-sucedido do formulário com `form_id` e `form_name`.

## Ferramentas Utilizadas

- **JavaScript** e **gtag.js**: para configuração e envio de eventos ao Google Analytics.
- **Google Tag Manager** (GTM) é compatível, mas não necessário para este case.

## Como Testar

1. Clone o repositório em sua máquina local.
2. Abra o arquivo `index.html` (ou o arquivo principal do ambiente de testes) em um navegador.
3. Realize interações com a página, como visualizações de página, cliques nos links de contato e download, e preenchimento do formulário de contato.
4. Verifique o console do navegador para visualizar os eventos enviados ao Google Analytics.

## Considerações Finais

Este projeto atende aos requisitos do case proposto pela DP6 para implementar a coleta de dados em uma aplicação Web Desktop. Todas as interações importantes foram configuradas para monitoramento, de acordo com as especificações fornecidas.

Caso tenha dúvidas ou sugestões, entre em contato.
