import { Box, Button, Code, HStack, Image, Text } from '@chakra-ui/react';
import { NetworkIcon } from 'lucide-react';
import { useState } from 'react';
import { ClipboardIconButton, ClipboardRoot } from '@/components/ui/clipboard';
import { useI18n } from '@/hooks/useI18n';

const evmCode = `/// Oracle contract interface
    FOInterfaceV1 public _fOracle; 

    ///Constructor to initialize the ConsumerFOracle contract
    constructor(address oracleAddress) { 
        _fOracle = FOInterfaceV1(oracleAddress);
    }
     
    /// Retrieves the latest data feed from the oracle and updates contract state variables
    function getFeed(uint16 code) public {
        DataFeed _data = _fOracle.getFeed(code);               
    }

    /// DataFeed field struct
    struct DataFeed {   
      int256 value;       /// @dev Integer value of the data feed
      uint256 updatedAt;  /// @dev timestamp of backend data update
      uint8 decimal;      /// @dev Number of decimal places for the data value
      uint8 confidence;   /// @dev Confidence level of the data feed
                          /// @dev 0: outlier, 5: acceptable, 95: reliable
    }
`;
const solanaCode = `#[program]
mod consumer {
    use super::*;

    // Function to pull data from the Oracle program
    pub fn pull_oracle(ctx: Context<PullOracle>) -> anchor_lang::Result<()> {   
        // Calling the CPI method to get data from the Oracle program     
        let result = oracle::cpi::get_datafeed(
            CpiContext::new(
                ctx.accounts.oracle_program.to_account_info(),                
                GetDataFeed {
                    datafeed: ctx.accounts.datafeed.to_account_info(),
                    subscribers: ctx.accounts.subscribers.to_account_info(),
                    signer: ctx.accounts.signer.to_account_info(),
                },
            ),             
        );

        // Unpacking the result tuple
        let (value, timestamp, confidence) = result?.get();

        // Logging the retrieved data
        msg!("consumer value {} and timestamp {} with confidence {} ", value, timestamp, confidence);

        Ok(())
    }
}`;

export const CodeBlock = () => {
  const [tab, setTab] = useState<'solana' | 'evm'>('evm');
  const { t } = useI18n();

  return (
    <Box
      borderRadius="lg"
      overflowY="hidden"
      overflowX="auto"
      bgGradient="to-br"
      gradientFrom="whiteAlpha.100"
      gradientTo="transparent"
      p={4}
      w="full"
      h="full"
      position="relative"
    >
      <HStack>
        <Button variant={tab === 'evm' ? 'solid' : 'plain'} onClick={() => setTab('evm')}>
          <NetworkIcon size={24} />
          EVM
        </Button>
        <Button variant={tab === 'solana' ? 'solid' : 'plain'} onClick={() => setTab('solana')}>
          <Image src="/assets/solana-icon.webp" loading="lazy" alt="Solana Network Icon" width="24px" height="24px" />
          <Text flex={1}>Solana</Text>
        </Button>
        <ClipboardRoot value={tab === 'evm' ? evmCode : solanaCode}>
          <ClipboardIconButton />
        </ClipboardRoot>
      </HStack>

      {tab === 'evm' && (
        <Code w="full" bg="transparent">
          <Box as="pre" fontFamily="mono" fontSize="sm" py={4}>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;1
              </Text>
              <Text color="success.400">{t('codeBlock.evm.interfaceComment')}</Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;2
              </Text>
              <Text color="warning.400">FOInterfaceV1</Text>
              <Text as="span" color="white">
                public _fOracle;
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;3
              </Text>
              <Text color="success.400"></Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;4
              </Text>
              <Text color="success.400">{t('codeBlock.evm.constructorComment')}</Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;5
              </Text>
              <Text color="warning.400">constructor</Text>
              <Text as="span" color="white">
                (address oracleAddress) {`{`}
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;6
              </Text>
              <Text color="warning.400">&nbsp;&nbsp;&nbsp;&nbsp;_fOracle = FOInterfaceV1</Text>
              <Text as="span" color="white">
                (oracleAddress);
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;7
              </Text>
              <Text color="white">{`}`}</Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;8
              </Text>
              <Text color="success.400"></Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;9
              </Text>
              <Text color="success.400">
                {t('codeBlock.evm.functionComment')}
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;10
              </Text>
              <Text color="warning.400">function</Text>
              <Text as="span" color="white">
                getFeed(uint16 code)
              </Text>
              <Text color="warning.400">
                public <Text color="white" as="span">{`{`}</Text>{' '}
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;11
              </Text>
              <Text color="warning.400">&nbsp;&nbsp;&nbsp;&nbsp;DataFeed</Text>
              <Text as="span" color="white">
                _data
              </Text>
              <Text color="warning.400">=</Text>
              <Text as="span" color="white">
                _fOracle.getFeed
              </Text>
              <Text color="warning.400">(</Text>
              <Text as="span" color="white">
                code
              </Text>
              <Text as="span" color="warning.400">
                )
              </Text>
              <Text as="span" color="white">
                ;
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;12
              </Text>
              <Text color="white">{`}`}</Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;13
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;14
              </Text>
              <Text color="success.400">{t('codeBlock.evm.structComment')}</Text>
            </HStack>
           
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;15
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  struct
                </Text>
                <Text as="span" color="white">
                  &nbsp;DataFeed {`{`}
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;16
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;int256
                </Text>
                <Text as="span" color="white">
                  &nbsp;value;
                </Text>
                <Text as="span" color="success.400">
                  &nbsp;{t('codeBlock.evm.valueComment')}
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;17
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;uint256
                </Text>
                <Text as="span" color="white">
                  &nbsp;updatedAt;
                </Text>
                <Text as="span" color="success.400">
                  &nbsp;{t('codeBlock.evm.updatedAtComment')}
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;18
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;uint8
                </Text>
                <Text as="span" color="white">
                  &nbsp;decimal;
                </Text>
                <Text as="span" color="success.400">
                  &nbsp;{t('codeBlock.evm.decimalComment')}
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;19
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;uint8
                </Text>
                <Text as="span" color="white">
                  &nbsp;confidence;
                </Text>
                <Text as="span" color="success.400">
                  &nbsp;{t('codeBlock.evm.confidenceComment')}
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;20
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
                <Text as="span" color="success.400">
                  {t('codeBlock.evm.confidenceRangeComment')}
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;21
              </Text>
              <Text color="white">{`}`}</Text>
            </HStack>
          </Box>
        </Code>
      )}

      {tab === 'solana' && (
        <Code w="full" bg="transparent">
          <Box as="pre" fontFamily="mono" fontSize="sm" py={4}>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;1
              </Text>
              <Text>
                <Text as="span" color="info.400">{`#[program]`}</Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;2
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  mod
                </Text>
                <Text as="span" color="white">
                  &nbsp;consumer {`{`}
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;3
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;use
                </Text>
                <Text as="span" color="white">
                  &nbsp;super::*;
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;4
              </Text>
              <Text color="white"></Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;5
              </Text>
              <Text color="success.400">&nbsp;&nbsp;&nbsp;&nbsp;{t('codeBlock.solana.functionComment')}</Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;6
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;pub fn
                </Text>
                <Text as="span" color="white">
                  &nbsp;pull_oracle(ctx: Context&lt;PullOracle&gt;) {`->`} anchor_lang::Result&lt;()&gt; {`{`}
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;7
              </Text>
              <Text color="success.400">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('codeBlock.solana.cpiComment')}
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;8
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let
                </Text>
                <Text as="span" color="white">
                  &nbsp;result = oracle::cpi::get_datafeed(
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;9
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CpiContext::new(
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;10
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.accounts.oracle_program.to_account_info(),
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;11
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GetDataFeed{' '}
                  {`{`}
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;12
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;datafeed:
                  ctx.accounts.datafeed.to_account_info(),
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;13
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subscribers:
                  ctx.accounts.subscribers.to_account_info(),
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;14
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signer:
                  ctx.accounts.signer.to_account_info(),
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;15
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`},
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;16
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;),
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;17
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;18
              </Text>
              <Text color="white"></Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;19
              </Text>
              <Text color="success.400">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('codeBlock.solana.unpackingComment')}
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;20
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let
                </Text>
                <Text as="span" color="white">
                  &nbsp;(value, timestamp, confidence) = result?.get();
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;21
              </Text>
              <Text color="white"></Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;22
              </Text>
              <Text color="success.400">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('codeBlock.solana.loggingComment')}
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;23
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;msg!("consumer value {`{}`} and timestamp {`{}`} with
                  confidence {`{}`} ", value, timestamp, confidence);
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;24
              </Text>
              <Text color="white"></Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;25
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ok(());
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;26
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;27
              </Text>
              <Text>
                <Text as="span" color="white">{`}`}</Text>
              </Text>
            </HStack>
          </Box>
        </Code>
      )}
    </Box>
  );
};
