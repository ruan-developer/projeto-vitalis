# ===================================================================
# Dockerfile para Aplicação Angular com Servidor Nginx
# ===================================================================

# --- Estágio 1: Build ---
# Usamos uma imagem oficial do Node.js para instalar as dependências
# e construir o projeto Angular, gerando os arquivos estáticos.

FROM node:18 AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de definição de pacotes
COPY package*.json ./

# Instala todas as dependências do projeto
RUN npm install

# Copia todo o resto do código-fonte do projeto
COPY . .

# Executa o comando de build, que também irá gerar o sitemap.xml
RUN npm run build


# --- Estágio 2: Serve ---
# Usamos uma imagem super leve do Nginx, que é um servidor web
# de alta performance, ideal para servir arquivos estáticos.

FROM nginx:alpine

# Copia os arquivos de produção que o 'npm run build' gerou no estágio anterior
# para a pasta padrão que o Nginx usa para servir sites.
#
# !! IMPORTANTE !!
# Verifique no seu angular.json (em outputPath) se o nome da pasta
# que o build gera é 'dist/vitalis'. Se for diferente, ajuste o caminho abaixo.
COPY --from=build /app/dist/vitalis /usr/share/nginx/html

# Copia uma configuração customizada para o Nginx 
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80, que é a porta padrão do Nginx que o Railway irá usar.
EXPOSE 80
