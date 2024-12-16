import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from '@/components/ui/accordion';
import { Icon, Text, VStack } from '@chakra-ui/react';
import {
  CircleHelpIcon,
  DollarSignIcon,
  GitPullRequestArrowIcon,
  HandCoinsIcon,
  LockIcon,
  StarIcon,
} from 'lucide-react';

export const Faq = () => {
  return (
    <AccordionRoot collapsible defaultValue={[]} variant="enclosed" size="lg">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionItemTrigger fontFamily="body">
            <Icon fontSize="lg" color="fg.subtle">
              {item.icon}
            </Icon>
            <Text fontSize={{ base: 'sm', md: 'lg' }} lineHeight={{ base: 1.2, md: 1 }}>
              {item.title}
            </Text>
          </AccordionItemTrigger>
          <AccordionItemContent>
            <VStack gap={4} w="full" align="flex-start">
              {item.content.map((content) => (
                <Text key={content} fontSize={{ base: 'sm', md: 'md' }}>
                  {content}
                </Text>
              ))}
            </VStack>
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

const items = [
  {
    value: 'how-to-start',
    icon: <DollarSignIcon />,
    title: 'De quanto eu preciso investir para começar?',
    content: [
      'O mínimo necessário para começar a investir usando nossa estratégia de balanceamento automático de carteiras é R$ 100 (usando Mercado Bitcoin) ou US$ 100 (usando Binance). Esses valores ficam depositados na sua conta na corretora escolhida.',
      'A Tash conta com duas carteiras diferentes em cada uma das corretoras e elas têm valores mínimos variáveis. Confira os detalhes abaixo:',
      'Binance',
      'Bitcoin Maxi: Portfólio composto exclusivamente por bitcoin (BTC) e valor em caixa (USDT) – voltada para entusiastas da primeira e maior criptomoeda do mercado. Para investimentos a partir de US$ 100.',
      'Blue Chips: Portfólio composto por bitcoin (BTC), ether (ETH), solana (SOL) e valor em caixa (USDT), as criptomoedas com maior participação no mercado. Para investimentos a partir de US$ 100.',
      'Mercado Bitcoin',
      'Bitcoin Maxi: Portfólio composto exclusivamente por bitcoin (BTC) e valor em caixa (BRL) – voltada para entusiastas da primeira e maior criptomoeda do mercado. Para investimentos a partir de R$ 100.',
      'Blue Chips: Portfólio composto por bitcoin (BTC), ether (ETH), solana (SOL) e valor em caixa (BRL), as criptomoedas com maior participação no mercado. Para investimentos a partir de R$ 100.',
      'Ou seja, o mínimo necessário para investir depende tanto do montante que você tem disponível quanto do seu perfil de investidor.',
    ],
  },
  {
    value: 'how-much',
    icon: <HandCoinsIcon />,
    title: 'Quanto custa para ter uma carteira Tash?',
    content: [
      'As carteiras com investimento entre US$ 100 e US$ 500 (Binance) ou entre R$ 100 e R$ 1.000 (Mercado Bitcoin) são livres de mensalidade.',
      'As carteiras com investimento entre US$ 500 e US$ 3.000 (Binance) ou entre R$ 1.000 e R$ 15.000 (Mercado Bitcoin) têm mensalidade de R$ 30.',
      'As carteiras com investimento acima de US$ 3.000 (Binance) ou acima de R$ 15.000 (Mercado Bitcoin) têm mensalidade de R$ 100.',
    ],
  },
  {
    value: 'why-tash',
    icon: <StarIcon />,
    title: 'Por que a Tash é a melhor opção para investir em criptomoedas?',
    content: [
      'Porque a Tash uniu tecnologia de ponta e especialistas em investimentos apaixonados por criptoativos para você pudesse investir com facilidade e segurança. ',
      'Nosso objetivo é maximizar os seus resultados – e isso é feito por meio de balanceamento de carteiras automático quinzenal. Isso significa que seus investimentos serão gerenciados de forma mais eficiente e automatizada de acordo com as flutuações de mercado, sem que você precise acompanhar o mercado diariamente ou realizar operações de trading.',
      'Além disso, nós não temos acesso ao seu saldo e senhas. A Tash é segura, confiável e fácil de usar.',
    ],
  },
  {
    value: 'how-tash-works',
    icon: <LockIcon />,
    title: 'Como a Tash funciona?',
    content: [
      'Não é possível garantir um retorno – assim como não é possível garantir que não haverá perda. Isso porque a Tash trabalha com automatização de investimentos em criptoativos, que são ativos de renda variável. Nossos esforços, porém, estão sempre direcionados para a otimização dos rendimentos.',
      'Os resultados acumulados das nossas carteiras entre janeiro de 2023 e abril de 2024, ou seja, desde o início dessa série histórica, indicam rentabilidade de 266,7% para a carteira Bitcoin Maxi; 162% para a carteira Blue Chips; de 66,1% para a carteira Alpha. Nossas carteiras são focadas nos grandes ciclos, o que significa que são pensadas para maximizar ganhos em momentos em alta do mercado e minimizar perdas em momentos de baixa.',
    ],
  },
  {
    value: 'custody',
    icon: <LockIcon />,
    title: 'A Tash tem custódia do meu dinheiro?',
    content: [
      'Não. A Tash preza, sempre, por segurança e transparência. Por isso, não temos custódia do seu dinheiro. A API da Tash se conecta apenas a sua conta na corretora. Essa chave API é você mesmo quem cria e configura para permitir somente a emissão de ordem de compra e venda.  ',
      'Isso significa que não vemos o seu saldo e, tampouco, podemos fazer retiradas da sua conta. Isso garante a sua segurança e tranquilidade para usar nossas carteiras de investimento.',
    ],
  },
  {
    value: 'strategies',
    icon: <GitPullRequestArrowIcon />,
    title: 'Como funcionam as estratégias Tash?',
    content: [
      'Hoje a Tash trabalha com dois tipos de carteiras de investimentos com diferentes seleções de tokens em cada uma delas. Essas carteiras foram pensadas por especialistas em investimentos em criptoativos e os tokens foram escolhidos um a um tendo como objetivo a otimização de rendimentos. As carteiras passam por um processo de balanceamento automático quinzenal.',
      'O balanceamento funciona como um ajuste regular das alocações de ativos dessas carteiras, que é feito com base em um conjunto de regras pré-definidas. Essa estratégia é interessante porque pode ajudar a maximizar os retornos de longo prazo, reduzindo o risco de exposição a flutuações de preços em um único ativo. Além disso, o balanceamento automatizado quinzenal pode economizar tempo e esforço para os investidores, já que elimina a necessidade de monitorar regularmente as condições do mercado e fazer ajustes manuais na carteira.',
    ],
  },
  {
    value: 'support',
    icon: <CircleHelpIcon />,
    title: 'Como eu entro em contato com o suporte?',
    content: ['Você pode nos contatar enviando por e-mail – basta enviar uma mensagem para contato@tash.finance.'],
  },
];
