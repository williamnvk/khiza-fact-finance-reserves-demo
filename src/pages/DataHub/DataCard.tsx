import React from 'react';
import { DataHub } from '../../data/data-hub';
import { VStack, Text, Heading, Flex, HStack, Icon } from '@chakra-ui/react';
import { BotIcon, ClockIcon, DatabaseIcon, RocketIcon, SearchCodeIcon } from 'lucide-react';
import { CircleFlag } from 'react-circle-flags';
import { Tooltip } from '@/components/ui/tooltip';
import { getCountryCode } from './get-country-code';

export const DataCard = React.memo(({ item, onClick }: { item: DataHub; onClick: () => void }) => (
  <VStack
    onClick={onClick}
    cursor="pointer"
    overflow="hidden"
    transition="all 0.2s"
    _hover={{
      transform: 'translateY(-4px)',
      boxShadow: 'lg',
    }}
    borderRadius="lg"
    bgImage="linear-gradient(35deg, {colors.whiteAlpha.50}, {colors.whiteAlpha.200})"
    border="1px solid"
    borderColor="whiteAlpha.500"
    align="start"
    gap={2}
  >
    <Flex justify="space-between" align="center" gap={4} w="full" px={6} pt={6}>
      <Heading fontSize="xl" lineHeight="shorter" truncate maxW="70%">
        {item.Name}
      </Heading>
      {item.Country === 'Latam' ? (
        <HStack gap={0}>
          <CircleFlag countryCode="br" width={16} />
          <CircleFlag
            countryCode="ar"
            width={16}
            style={{ marginLeft: '-4px', border: '2px solid var(--ff-colors-gray-900) ', borderRadius: '50%' }}
          />
          <CircleFlag
            countryCode="cl"
            width={16}
            style={{ marginLeft: '-4px', border: '2px solid var(--ff-colors-gray-900)', borderRadius: '50%' }}
          />
          <CircleFlag
            countryCode="co"
            width={16}
            style={{ marginLeft: '-4px', border: '2px solid var(--ff-colors-gray-900)', borderRadius: '50%' }}
          />
          <CircleFlag
            countryCode="cr"
            width={16}
            style={{ marginLeft: '-4px', border: '2px solid var(--ff-colors-gray-900)', borderRadius: '50%' }}
          />
          <CircleFlag
            countryCode="cu"
            width={16}
            style={{ marginLeft: '-4px', border: '2px solid var(--ff-colors-gray-900)', borderRadius: '50%' }}
          />
          <CircleFlag
            countryCode="do"
            width={16}
            style={{ marginLeft: '-4px', border: '2px solid var(--ff-colors-gray-900)', borderRadius: '50%' }}
          />
          <CircleFlag
            countryCode="ec"
            width={16}
            style={{ marginLeft: '-4px', border: '2px solid var(--ff-colors-gray-900)', borderRadius: '50%' }}
          />
        </HStack>
      ) : (
        <CircleFlag countryCode={getCountryCode(item.Country)} width={16} />
      )}
    </Flex>
    <Text lineHeight="shorter" lineClamp={1} color="fg.muted" px={6} my={3}>
      {item.Description}
    </Text>

    <Tooltip content="Interfaces">
      <Flex gap={3} flexWrap="wrap" align="center" justify="center" mx={6} mb={3}>
        {item.Interfaces.map((int) => (
          <Text
            key={int}
            fontWeight="medium"
            fontSize="xs"
            textTransform="uppercase"
            display="inline-flex"
            gap={2}
          >
            {int === 'dApp' && <RocketIcon size={16} aria-hidden="true" />}
            {int === 'Push' && <SearchCodeIcon size={16} aria-hidden="true" />}
            {int === 'Pull' && <BotIcon size={16} aria-hidden="true" />}
            {int}
          </Text>
        ))}
      </Flex>
    </Tooltip>

    <Flex justify="start" align="center" w="full" gap={4} borderTop="1px solid" borderColor="whiteAlpha.500" pt={4} px={6} pb={4}>
      <Tooltip content="Frequency updated">
        <Flex align="center" gap={1} justify="center">
          <Icon as={ClockIcon} boxSize={4} color="fg.muted" />
          <Text fontWeight="medium" fontSize="xs" textTransform="uppercase" color="fg.muted">
            {item.Frequency}
          </Text>
        </Flex>
      </Tooltip>

      <Tooltip content="Source">
        <Flex gap={1} flexWrap="wrap" align="center" justify="center">
          <Icon as={DatabaseIcon} boxSize={4} color="fg.muted" />
          <Text fontWeight="medium" fontSize="xs" textTransform="uppercase" color="fg.muted">
            {item.Source}
          </Text>
        </Flex>
      </Tooltip>
    </Flex>
  </VStack>
));
