import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { NetworkIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LightAsync as LightSyntaxHighlighter } from 'react-syntax-highlighter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import solidity from 'highlightjs-solidity';
import { a11yDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const rustCode = `#[program]
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

const solidityCode = `// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.24;

/// @title Fact Oracle Interface V1
/// @notice This interface defines the external view functions for accessing data feeds
/// @dev Implemented by contracts that provide oracle data feeds
interface FOInterfaceV1 {
    function getFeed(uint8 _feedId) external  returns (DataFeed memory _datafeed);
    function getReserve(address _assetId) external returns (DataAsset memory _dataAsset);
    function subcribeOracle(address _contractAddress,  string calldata _projectName) external;
}

/// @title Data Feed Struct
/// @notice This struct represents the data feed with a value and confidence level
/// @dev Used to store oracle data with an associated confidence score

struct DataFeed {   
    int256 value;       /// @dev Integer value of the data feed
    uint256 updatedAt;   /// @dev timestamp of backend data update
    uint8 decimal;       /// @dev Number of decimal places for the data value
    uint8 confidence;   /// @dev Confidence level of the data feed
                        /// @dev 1: outlier, 2: acceptable, 3: reliable
}

struct DataAsset {
    uint256 value;      /// @dev Integer value of the asset
    uint256 updatedAt;  /// @dev Timestamp of backend data update
    uint8 decimal;      /// @dev Number of decimal places for the data value
    string info;        /// @dev Additional information about the asset
}`;

export const CodeBlock = () => {
  const [tab, setTab] = useState<'solana' | 'evm'>('solana');

  useEffect(() => {
    LightSyntaxHighlighter.registerLanguage('solidity', solidity);
  }, []);

  return (
    <VStack align="flex-start" maxW="800px">
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
        <Box borderRadius="md" overflow="hidden" bg="gray.900" p={0} w="full">
          <LightSyntaxHighlighter
            language="solidity"
            style={theme}
            showLineNumbers
            customStyle={{ backgroundColor: 'inherit' }}
            wrapLongLines={false}
            wrapLines={false}
          >
            {solidityCode}
          </LightSyntaxHighlighter>
        </Box>
      )}

      {tab === 'solana' && (
        <Box borderRadius="md" overflow="hidden" bg="gray.900" p={0} w="full">
          <SyntaxHighlighter
            language="rust"
            style={theme}
            showLineNumbers
            customStyle={{ backgroundColor: 'inherit' }}
            wrapLongLines={false}
            wrapLines={false}
          >
            {rustCode}
          </SyntaxHighlighter>
        </Box>
      )}
    </VStack>
  );
};
