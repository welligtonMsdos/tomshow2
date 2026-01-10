FROM node:22

WORKDIR /app

# 1. Copia apenas os arquivos de dependências primeiro
COPY package*.json ./

# 2. Instala as dependências dentro do ambiente Linux do container
RUN npm install

# 3. Instala o CLI do Angular
RUN npm install -g @angular/cli

# 4. Copia o restante dos arquivos do projeto
COPY . .

EXPOSE 4200

# Usa o comando para rodar o servidor de desenvolvimento
CMD ["ng", "serve", "--host", "0.0.0.0"]
