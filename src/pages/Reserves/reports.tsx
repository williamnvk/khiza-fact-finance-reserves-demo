import { ReportHeader } from '@/components/Reserves/report-header';
import { BalancesChart } from '@/components/Reserves/balances-chart';
import { HistoryChart } from '@/components/Reserves/history-chart';
import { ReservesBreakdown } from '@/components/Reserves/reserves-breakdown';
import { AuditReport } from '@/components/Reserves/audit-report';
import { TokenList } from '@/components/Reserves/token-list';
import { TokenChainBreakdown } from '@/components/Reserves/token-chains';
import { formatLargeNumber } from '@/lib/utils';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Box, Container, Grid, Text, VStack } from '@chakra-ui/react';
import { ColorModeProvider } from '@/components/ui/color-mode';
import { useI18n } from '@/hooks/useI18n';

type LastData = {
  date: string;
  circulation: number;
  reserves: number;
  totalTransfer: number;
  transactions: number;
  totalBurned: number;
};

type ReportItem = {
  date: string;
  file: string;
};

type AssettItem = {
  type: string;
  name: string;
  value: number;
};

type ChainItem = {
  name: string;
  value: number;
};

type NoteItem = {
  id: string;
  text: string;
};

type total = {
  periodTotalTransfer: number;
  periodTransactions: number;
  periodTotalBurned: number;
};

type average = {
  circulation: number;
  reserves: number;
  avgcolateral: string;
};

type Data = {
  threshold: string;
  heartbeat: string;
  contractLink?: string;
  contract?: string;
  chainDistribution: ChainItem[];
  assetDistribution: AssettItem[];
  logo: string;
  dapp: string;
  chart_history_change: number;
  chart_history_new_reserves: number;
  chart_history_new_tokens_issued: number;
  reportList: ReportItem[];
  currency: string;
  last: LastData;
  companyFullName: string;
  companyName: string;
  tokens: any[];
  historicalData?: LastData[];
  historicalData1?: LastData[];
  total: total;
  total1: total;
  average: average;
  average1: average;
  footnotes: NoteItem[];
  description: string;
};

export const Reports = () => {
  const { client } = useParams();
  const { t } = useI18n();

  // Create footnotes array using translations
  const getFootnotes = () => [
    {
      id: '1',
      text: t('reports.footnotes.heartbeat'),
    },
    {
      id: '2',
      text: t('reports.footnotes.deviation'),
    },
    {
      id: '3',
      text: t('reports.footnotes.tokensSupply'),
    },
    {
      id: '4',
      text: t('reports.footnotes.collateralReserves'),
    },
    {
      id: '5',
      text: t('reports.footnotes.tokensSupply'),
    },
    {
      id: '6',
      text: t('reports.footnotes.collateralization'),
    },
  ];

  const [data, setData] = useState<Data>({
    companyName: '',
    logo: '',
    dapp: '',
    threshold: '',
    chart_history_change: 0,
    chart_history_new_reserves: 0,
    chart_history_new_tokens_issued: 0,
    reportList: [],
    currency: '',
    last: {
      date: '',
      circulation: 0,
      reserves: 0,
      totalTransfer: 0,
      transactions: 0,
      totalBurned: 0,
    },
    companyFullName: '',
    tokens: [],
    historicalData: [],
    historicalData1: [],
    total: {
      periodTotalTransfer: 0,
      periodTransactions: 0,
      periodTotalBurned: 0,
    },
    total1: {
      periodTotalTransfer: 0,
      periodTransactions: 0,
      periodTotalBurned: 0,
    },
    average: {
      circulation: 0,
      reserves: 0,
      avgcolateral: '-',
    },
    average1: {
      circulation: 0,
      reserves: 0,
      avgcolateral: '-',
    },
    assetDistribution: [],
    chainDistribution: [],
    footnotes: [],
    heartbeat: '',
    description: '',
  });
  const [loaded, setLoaded] = useState(false);

  const loadData = async () => {
    let historicalData1 = [];
    let total1 = [];
    let average1 = [];

    try {
      const responseChart1 = await fetch(`/data/${client}-chart-1.json`);
      const dataChart1 = await responseChart1.json();
      historicalData1 = dataChart1.historical;
      total1 = dataChart1.total;
      average1 = dataChart1.average;
    } catch {}

    const responseChart = await fetch(`/data/${client}-chart.json`);
    const dataChart = await responseChart.json();

    const response = await fetch(`/data/${client}.json`);
    const data = await response.json();

    if (dataChart.assetDistribution && dataChart.assetDistribution.length > 0) {
      data.assetDistribution = dataChart.assetDistribution;
    }
    data.historicalData = dataChart.historical;
    data.historicalData1 = historicalData1;
    data.total = dataChart.total;
    data.total1 = total1;
    data.threshold = data.threshold === '' ? undefined : data.threshold;
    data.average = dataChart.average;
    data.average1 = average1;
    //data.last = data.historicalData[data.historicalData.length - 1];
    if (data.historicalData1.length > 0) data.last = historicalData1[data.historicalData1.length - 1];
    else data.last = data.historicalData[data.historicalData.length - 1];

    data.chart_history_new_tokens_issued = data.last.circulation - data.historicalData[0].circulation;
    data.chart_history_new_reserves = data.last.reserves - data.historicalData[0].reserves;
    data.chart_history_change =
      (data.historicalData[0].circulation /
        data.historicalData[0].reserves /
        (data.last.circulation / data.last.reserves)) *
      100;

    // Add custom footnotes from data if they exist
    if (data.footnotes) {
      const translatedFootnotes = getFootnotes();
      translatedFootnotes.push(...data.footnotes);
    }

    setData(data);
    setLoaded(true);
    document.title = `${data.companyName} - ${t('reports.title')}`;
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <ColorModeProvider>
      <Box
        position="absolute"
        top="0%"
        left="0%"
        className="omit-from-print"
        transform="translate(-50%, -50%)"
        w="100vw"
        h="100vh"
        bg="radial-gradient(circle, {colors.brand.300} 0%, {colors.brand.200} 25%, rgba(0,0,0,.1) 100%)"
        _dark={{
          bg: 'radial-gradient(circle, {colors.brand.900} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)',
        }}
        filter="blur(200px)"
        zIndex={0}
      />

      {loaded ? (
        <Container maxW="8xl" px={4} py={8} mt="72px" border="none">
          <VStack w="full" gap={{ base: 4, md: 24 }} align="stretch">
            <ReportHeader
              client={client}
              companyName={data.companyFullName}
              contractLink={data.contractLink}
              contract={data.contract}
              description={data.description}
              circulation={formatLargeNumber(data.last.circulation)}
              currency={data.currency}
              reserves={formatLargeNumber(data.last.reserves)}
              ratio={((data.last.reserves / data.last.circulation) * 100).toFixed(1) + '%'}
              dateAs={data.historicalData?.[data.historicalData.length - 1]?.date || ''}
              heartbeat={data.heartbeat}
              threshold={data.threshold === '' ? undefined : data.threshold}
              dappLink={data.dapp}
            />
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap={{ base: 16, md: 6 }}
              mb={{ base: 16, md: 0 }}
            >
              <BalancesChart
                circulation={data.last.circulation}
                reserves={data.last.reserves}
                currency={data.currency}
              />

              <HistoryChart
                heartbeat={data.heartbeat}
                historicalData={data.historicalData || []}
                historicalData1={data.historicalData1 || []}
                periodTotalTransfer={data.total?.periodTotalTransfer ?? 0}
                periodTotalTransfer1={data.total1?.periodTotalTransfer ?? 0}
                periodTransactions={data.total?.periodTransactions ?? 0}
                periodTransactions1={data.total1?.periodTransactions ?? 0}
                avgcolateral={Number(data.average?.avgcolateral) || 0}
                avgcolateral1={Number(data.average1?.avgcolateral) || 0}
                currency={data.currency}
              />
            </Grid>
            <ReservesBreakdown
              companyName={data.companyName}
              currency={data.currency}
              reserves={data.last.reserves}
              issued={data.last.circulation}
              balance={data.last.reserves - data.last.circulation}
              assetDistribution={data.assetDistribution}
            />
            <TokenList
              tokens={data.tokens}
              currency={data.currency}
              companyName={data.companyName}
              reserves={data.last.reserves}
              circulation={data.last.circulation}
              periodTotalTransfer={data.total?.periodTotalTransfer}
            />
            <Box
              position="absolute"
              top="0%"
              left="0%"
              transform="translate(50%, 150%)"
              w="100vw"
              h="100vh"
              bg="radial-gradient(circle, {colors.brand.300} 0%, {colors.brand.200} 25%, rgba(0,0,0,.1) 100%)"
              _dark={{
                bg: 'radial-gradient(circle, {colors.brand.900} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)',
              }}
              filter="blur(200px)"
              zIndex={-1}
              className="omit-from-print"
            />
            <TokenChainBreakdown
              totalChains={3}
              totalTokens={1}
              totalValue={Number(data.last.circulation)}
              chainDistribution={data.chainDistribution}
              currency={data.currency}
            />
            <AuditReport reportsList={data.reportList} companyName={data.companyName} />

            <VStack gap={1} align="start" w="full">
              {getFootnotes().map((footnote, index) => (
                <Text key={index} fontSize="sm" color="fg.muted">
                  {footnote.id}. {footnote.text}
                </Text>
              ))}
              {data.footnotes &&
                data.footnotes.map((footnote, index) => (
                  <Text key={`custom-${index}`} fontSize="sm" color="fg.muted">
                    {footnote.id}. {footnote.text}
                  </Text>
                ))}
            </VStack>
          </VStack>
        </Container>
      ) : null}
    </ColorModeProvider>
  );
};

export default Reports;
