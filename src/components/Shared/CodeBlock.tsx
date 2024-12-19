import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { NetworkIcon } from 'lucide-react';
import { useState } from 'react';

export const CodeBlock = () => {
  const [tab, setTab] = useState<'solana' | 'evm'>('evm');

  return (
    <VStack w="full" align="flex-start">
      <HStack bg="gray.900" borderRadius="md" w="full" p={2}>
        <Button variant={tab === 'solana' ? 'solid' : 'ghost'} onClick={() => setTab('solana')}>
          <img src="/assets/solana-icon.png" alt="Solana" width={24} height={24} />
          <Text flex={1}>Solana</Text>
        </Button>
        <Button variant={tab === 'evm' ? 'solid' : 'ghost'} onClick={() => setTab('evm')}>
          <NetworkIcon size={24} />
          ALL
        </Button>
      </HStack>
      {tab === 'evm' && (
        <Box
          bg="gray.900"
          flex={1}
          p={6}
          borderRadius="md"
          fontFamily="mono"
          fontSize="sm"
          color="blue.300"
          whiteSpace="pre"
          as="code"
          align="flex-start"
          gap={0}
        >
          <Text color="brand.200">/// @title Data Feed Struct</Text>
          <Text color="brand.200">
            /// @notice This struct represents the data feed with a value and confidence level
          </Text>
          <Text color="brand.200">/// @dev Used to store oracle data with an associated confidence score</Text>
          <span className="token keyword keyword-struct">struct</span>{' '}
          <span className="token class-name">DataFeed</span> <span className="token punctuation">{`{`}</span>
          <br />
          <span className="token builtin">int256</span> value<span className="token punctuation">;</span>{' '}
          <Text color="brand.200">/// @dev Integer value of the data feed</Text>
          <br />
          <span className="token builtin">uint256</span> updatedat<span className="token punctuation">;</span>{' '}
          <Text color="brand.200">/// @dev Timestamp of backend data update</Text>
          <br />
          <span className="token builtin">uint8</span> decimal<span className="token punctuation">;</span>{' '}
          <Text color="brand.200">/// @dev Number of decimal places for the data value</Text>
          <br />
          <span className="token builtin">uint8</span> confidence<span className="token punctuation">;</span>{' '}
          <Text color="brand.200">/// @dev Confidence level of the data feed</Text>
          <br />
          <Text color="brand.200">/// @dev 1: outlier, 2: acceptable, 3: reliable</Text>
          <span className="token punctuation">{`}`}</span>
        </Box>
      )}

      {tab === 'solana' && (
        <Box
          bg="gray.900"
          flex={1}
          p={6}
          borderRadius="md"
          fontFamily="mono"
          fontSize="sm"
          color="blue.300"
          whiteSpace="pre"
          as="code"
          align="flex-start"
          gap={0}
        >
          <Text color="brand.200">/// solana</Text>
          <Text color="brand.200">
            /// @notice This struct represents the data feed with a value and confidence level
          </Text>
          <Text color="brand.200">/// @dev Used to store oracle data with an associated confidence score</Text>
          <span className="token keyword keyword-struct">struct</span>{' '}
          <span className="token class-name">DataFeed</span> <span className="token punctuation">{`{`}</span>
          <br />
          <span className="token builtin">int256</span> value<span className="token punctuation">;</span>{' '}
          <Text color="brand.200">/// @dev Integer value of the data feed</Text>
          <br />
          <span className="token builtin">uint256</span> updatedat<span className="token punctuation">;</span>{' '}
          <Text color="brand.200">/// @dev Timestamp of backend data update</Text>
          <br />
          <span className="token builtin">uint8</span> decimal<span className="token punctuation">;</span>{' '}
          <Text color="brand.200">/// @dev Number of decimal places for the data value</Text>
          <br />
          <span className="token builtin">uint8</span> confidence<span className="token punctuation">;</span>{' '}
          <Text color="brand.200">/// @dev Confidence level of the data feed</Text>
          <br />
          <Text color="brand.200">/// @dev 1: outlier, 2: acceptable, 3: reliable</Text>
          <span className="token punctuation">{`}`}</span>
        </Box>
      )}
    </VStack>
  );
};
