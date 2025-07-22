# Internacionalização (i18n) - Fact Finance

Este documento descreve como usar o sistema de internacionalização implementado no site da Fact Finance.

## Estrutura

```
src/
├── i18n/
│   ├── index.ts              # Configuração principal do i18next
│   └── locales/
│       ├── en.json           # Traduções em inglês
│       └── pt-BR.json        # Traduções em português brasileiro
├── hooks/
│   └── useI18n.ts           # Hook personalizado para i18n
└── components/
    └── LanguageSelector/
        └── LanguageSelector.tsx  # Componente seletor de idioma
```

## Idiomas Disponíveis

- **Inglês (en)** - Idioma padrão
- **Português Brasileiro (pt-BR)**

## Como Usar

### 1. Usando o Hook Personalizado

```tsx
import { useI18n } from '@/hooks/useI18n';

const MyComponent = () => {
  const { t, currentLanguage, changeLanguage } = useI18n();

  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>Idioma atual: {currentLanguage}</p>
      <button onClick={() => changeLanguage('pt-BR')}>
        Português
      </button>
    </div>
  );
};
```

### 2. Usando o Hook do React-i18next Diretamente

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
};
```

## Estrutura das Traduções

### Navegação
```json
{
  "nav": {
    "home": "Início",
    "features": "Recursos",
    "useCases": "Casos de Uso",
    "dataHub": "Central de Dados",
    "about": "Sobre Nós",
    "reserves": "Reservas",
    "docs": "Documentação",
    "documentation": "Documentação"
  }
}
```

### Textos Comuns
```json
{
  "common": {
    "loading": "Carregando...",
    "error": "Erro",
    "retry": "Tentar novamente",
    "close": "Fechar",
    "openMenu": "Abrir menu",
    "closeMenu": "Fechar menu",
    "language": "Idioma",
    "selectLanguage": "Selecionar Idioma"
  }
}
```

### Hero Section
```json
{
  "hero": {
    "title": "Prova de Reserva Onchain com Dashboard Dinâmico",
    "subtitle": "Conectando transparência em tempo real entre tokens onchain e colateral offchain",
    "description": "A Fact Finance estabelece uma nova camada de transparência...",
    "getStarted": "Começar",
    "learnMore": "Saiba Mais"
  }
}
```

## Componente Seletor de Idioma

O seletor de idioma está disponível no header e inclui:
- Bandeiras dos países para identificação visual
- Dropdown com lista de idiomas
- Persistência da escolha no localStorage
- Detecção automática do idioma do navegador

### Integração

O seletor já está integrado no:
- Header desktop (ao lado do botão Docs)
- Menu mobile (na parte inferior)

## Adicionando Novos Idiomas

1. **Criar arquivo de tradução:**
```bash
src/i18n/locales/[codigo-idioma].json
```

2. **Adicionar idioma na configuração:**
```typescript
// src/i18n/index.ts
import novoIdioma from './locales/novo-idioma.json';

const resources = {
  en: { translation: en },
  'pt-BR': { translation: ptBR },
  'novo-idioma': { translation: novoIdioma }, // Adicionar aqui
};
```

3. **Atualizar o LanguageSelector:**
```typescript
// src/components/LanguageSelector/LanguageSelector.tsx
const languages = [
  { code: 'en', name: 'English', flagCode: 'us' },
  { code: 'pt-BR', name: 'Português', flagCode: 'br' },
  { code: 'novo-idioma', name: 'Novo Idioma', flagCode: 'xx' }, // Adicionar aqui
];
```

## Configuração

O sistema está configurado para:
- **Idioma padrão:** Inglês (en)
- **Fallback:** Inglês (en)
- **Detecção:** localStorage > navegador > HTML tag
- **Cache:** localStorage
- **Debug:** Habilitado apenas em desenvolvimento

## Próximos Passos

Para expandir o i18n para todo o site:

1. Traduzir os componentes principais (Hero, Footer, Features)
2. Adicionar traduções para páginas específicas
3. Implementar pluralizações quando necessário
4. Considerar tradução de conteúdo dinâmico (se aplicável)

## Observações

- O sistema preserva as funcionalidades existentes do site
- Todas as traduções são carregadas de forma assíncrona
- O idioma selecionado persiste entre sessões
- O componente é totalmente acessível (aria-labels, etc.) 