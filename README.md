# InvoiceSnap Frontend

## Descrição

O **InvoiceSnap** é uma aplicação web desenvolvida em Next, que serve como interface de usuário para a aplicação de leitura de invoices. O objetivo do projeto é fornecer uma aplicação que faz a leitura de imagens de invoice e retorna o texto da imagem.

O Back-end dessa aplicação está disponível em: [https://www.github.com/pablodru/paggo-back](https://www.github.com/pablodru/paggo-back)

## Instalação

Para começar a usar o projeto, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/pablodru/paggo-front.git
    cd paggo-front
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

## Configuração

Antes de executar a aplicação, você pode precisar configurar algumas variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione suas configurações:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_url
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

## Execução

Para começar a usar o projeto, siga os passos abaixo:

1. Certifique-se de estar com as configurações corretas e com as tecnologias na versão correta.
2. Rode o projeto com:
```bash
npm run dev
```
3. A aplicação estará disponível em `http://localhost:3000`.












