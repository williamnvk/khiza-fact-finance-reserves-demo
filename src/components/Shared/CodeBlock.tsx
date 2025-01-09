import { Box, Button, Code, HStack, Image, Text } from '@chakra-ui/react';
import { NetworkIcon } from 'lucide-react';
import { useState } from 'react';
import { ClipboardIconButton, ClipboardRoot } from '@/components/ui/clipboard';

const evmCode = `/// @title Data Feed Struct
/// @notice Represents the data feed with a value, timestamp, and confidence level
/// @dev Stores oracle data with additional metadata for reliability and scaling
struct DataFeed {    
    int256 value;        /// @dev Integer value of the data feed
    uint256 updatedAt;   /// @dev Timestamp of the last data update
    uint8 decimal;       /// @dev Number of decimal places for interpreting the value
    uint8 confidence;    /// @dev Confidence level of the data feed
                         /// @dev 0: outlier, 5: acceptable, 95: reliable
}`;

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
          <Image src="/assets/solana-icon.webp" loading="lazy" alt="Solana" width="24px" height="24px" />
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
              <Text color="success.400">/// @title Data Feed Struct</Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;2
              </Text>
              <Text color="success.400">
                /// @notice This struct represents the data feed with a value and confidence level
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;3
              </Text>
              <Text color="success.400">/// @dev Used to store oracle data with an associated confidence score</Text>
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
                &nbsp;&nbsp;6
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;int256
                </Text>
                <Text as="span" color="white">
                  &nbsp;value;
                </Text>
                <Text as="span" color="success.400">
                  &nbsp;/// @dev Integer value of the data feed
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;7
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;uint256
                </Text>
                <Text as="span" color="white">
                  &nbsp;updatedAt;
                </Text>
                <Text as="span" color="success.400">
                  &nbsp;/// @dev timestamp of backend data update
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;8
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;uint8
                </Text>
                <Text as="span" color="white">
                  &nbsp;decimal;
                </Text>
                <Text as="span" color="success.400">
                  &nbsp;/// @dev Number of decimal places for the data value
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;&nbsp;9
              </Text>
              <Text>
                <Text as="span" color="warning.400">
                  &nbsp;&nbsp;&nbsp;&nbsp;uint8
                </Text>
                <Text as="span" color="white">
                  &nbsp;confidence;
                </Text>
                <Text as="span" color="success.400">
                  &nbsp;/// @dev Confidence level of the data feed
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;10
              </Text>
              <Text>
                <Text as="span" color="white">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
                <Text as="span" color="success.400">
                  /// @dev 1: outlier, 2: acceptable, 3: reliable
                </Text>
              </Text>
            </HStack>
            <HStack gap={2} w="full">
              <Text color="gray.500" w="10">
                &nbsp;11
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
              <Text color="success.400">&nbsp;&nbsp;&nbsp;&nbsp;// Function to pull data from the Oracle program</Text>
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Calling the CPI method to get data from the Oracle
                program
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Unpacking the result tuple
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Logging the retrieved data
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
