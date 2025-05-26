# 公式の Node.js イメージを使用
FROM node:18-alpine

# 作業ディレクトリ
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package.json ./

# 依存関係をインストール
RUN npm install

# 全ファイルをコピー
COPY . .

# コンテナ起動時にReact開発サーバーを実行
CMD ["npm", "run", "dev"]

# Reactのデフォルトポート
EXPOSE 3000