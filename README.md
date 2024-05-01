# P1menta UI

Bem-vindo à documentação da Jarvis UI! Esta biblioteca foi desenvolvida com Vite, React, TypeScript, Tailwind CSS, Shadcn e Radix. Aqui você encontrará informações sobre como utilizar os componentes disponíveis, instalação, exemplos e muito mais.

preview (here)[https://660e95d75bccb0aace034cf9-owxaxjusfb.chromatic.com/]

## Instalação

Para instalar a biblioteca em seu projeto, você pode utilizar o npm ou o yarn:

```bash
npm install @jarvis-ui
# ou
yarn add @jarvis-ui

```

## Utilização

Após instalar a biblioteca, você pode importar os componentes conforme necessário em seus arquivos React:

import React from 'react';
import { Button, Card } from '@jarvis-ui';

```jsx
const App = () => {
  return (
    <div>
      <Card>
        <h2>Meu Card</h2>
        <p>Conteúdo do card...</p>
        <Button>Meu Botão</Button>
      </Card>
    </div>
  );
};

export default App;
```

## Componentes Disponíveis

- [x] Alert
- [] Avatar
- [x] Badge
- [x] Button
- [] Calendar
- [] Card
- [x] Checkbox
- [] Datepicker
- [] Dialog
- [] Pagination
- [x] Select
- [x] Switch
- [] Tabs
- [x] Tag
- [x] Textarea

## Contribuindo

Se você deseja contribuir com a biblioteca, sinta-se à vontade para abrir pull requests no repositório do GitHub. Todas as contribuições são bem-vindas!

## Licença

Esta biblioteca é distribuída sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
