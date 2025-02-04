import { useMemo } from 'react';
import { DataHub } from '../../data/data-hub';
import {
  VStack,
  Input,
  Box,
  Grid,
  Text,
  Flex,
  Container,
  HStack,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react';
import { DrawerRoot, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseTrigger } from '@/components/ui/drawer';
import { DialogRoot, DialogContent, DialogBody } from '@/components/ui/dialog';
import { BotIcon, CheckIcon, FilterIcon, RocketIcon, SearchCodeIcon, SearchIcon, XIcon } from 'lucide-react';
import { create } from 'zustand';
import { DataCard } from './DataCard';
import { DetailItem } from './DetailItem';

interface DataHubStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: {
    Country: string[];
    Category: string;
    SubCategory: string[];
    Frequency: string;
    interfaces: string[];
    Source: string;
  };
  setFilter: (key: keyof DataHubStore['filters'], value: string) => void;
  resetFilters: () => void;
  detailItem: DataHub | null;
  setDetailItem: (item: DataHub | null) => void;
}

const initialFilters = {
  Country: [],
  Category: '',
  SubCategory: [],
  Frequency: '',
  interfaces: [],
  Source: '',
};

const useDataHubStore = create<DataHubStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  filters: initialFilters,
  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]:
          key === 'interfaces' || key === 'Country' || key === 'SubCategory'
            ? state.filters[key].includes(value)
              ? state.filters[key].filter((v) => v !== value)
              : [...state.filters[key], value]
            : value === state.filters[key]
            ? ''
            : value,
      },
    })),
  resetFilters: () => set({ filters: initialFilters }),
  detailItem: null,
  setDetailItem: (item) => set({ detailItem: item }),
}));

interface Props {
  data: DataHub[];
}

export default function DataHubComponent({ data }: Props) {
  const { searchQuery, filters, detailItem, setSearchQuery, setFilter, setDetailItem, resetFilters } =
    useDataHubStore();
  const { open, onOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const filteredData = useMemo(() => {
    const searchTerms = searchQuery.toLowerCase().trim().split(/\s+/);

    return data.filter((item) => {
      const matchesSearch =
        searchTerms.length === 0 ||
        searchTerms.some(
          (term) => item.Name.toLowerCase().includes(term) || item.Description.toLowerCase().includes(term),
        );

      const matchesFilters = Object.entries(filters).every(([key, value]) => {
        if (!value || (Array.isArray(value) && !value.length)) return true;

        if (key === 'interfaces' || key === 'Country' || key === 'SubCategory') {
          if (key === 'interfaces') {
            return (value as string[]).every((v) => item.Interfaces.includes(v));
          }
          return (value as string[]).includes(item[key as keyof DataHub]);
        }

        const itemValue = String(item[key as keyof DataHub]).toLowerCase();
        return itemValue.toLowerCase() === (value as string).toLowerCase();
      });

      return matchesSearch && matchesFilters;
    });
  }, [data, searchQuery, filters]);

  const filterOptions = useMemo(() => {
    const getFilteredDataForKey = (excludeKey: keyof typeof filters) => {
      return data.filter((item) => {
        return Object.entries(filters).every(([key, value]) => {
          if (key === excludeKey || !value || (Array.isArray(value) && !value.length)) return true;

          if (key === 'interfaces' || key === 'Country' || key === 'SubCategory') {
            if (key === 'interfaces') {
              return (value as string[]).every((v) => item.Interfaces.includes(v));
            }
            return (value as string[]).includes(item[key as keyof DataHub]);
          }

          return String(item[key as keyof DataHub]).toLowerCase() === (value as string).toLowerCase();
        });
      });
    };

    const extractUniqueValues = (key: keyof DataHub, filteredItems: DataHub[]) =>
      [...new Set(filteredItems.map((item) => String(item[key])))].filter(Boolean).sort();

    const countryFilteredData = getFilteredDataForKey('Country');
    const categoryFilteredData = getFilteredDataForKey('Category');
    const subCategoryFilteredData = getFilteredDataForKey('SubCategory');
    const frequencyFilteredData = getFilteredDataForKey('Frequency');
    const interfacesFilteredData = getFilteredDataForKey('interfaces');
    const sourcesFilteredData = getFilteredDataForKey('Source');

    const subCategories = filters.Category
      ? [
          ...new Set(
            categoryFilteredData.filter((item) => item.Category === filters.Category).map((item) => item.SubCategory),
          ),
        ].sort()
      : extractUniqueValues('SubCategory', subCategoryFilteredData);

    const categories = extractUniqueValues('Category', categoryFilteredData);
    categories.push('Commodities', 'Real Estate');

    return {
      countries: {
        options: extractUniqueValues('Country', countryFilteredData),
        counts: countryFilteredData.length,
      },
      categories: {
        options: categories,
        counts: categoryFilteredData.length,
      },
      subCategories: {
        options: subCategories,
        counts: subCategoryFilteredData.length,
      },
      frequencies: {
        options: extractUniqueValues('Frequency', frequencyFilteredData),
        counts: frequencyFilteredData.length,
      },
      interfaces: {
        options: [...new Set(interfacesFilteredData.flatMap((item) => item.Interfaces))].sort(),
        counts: interfacesFilteredData.length,
      },
      sources: {
        options: extractUniqueValues('Source', sourcesFilteredData),
        counts: sourcesFilteredData.length,
      },
    };
  }, [data, filters]);

  const hasActiveFilters = Object.values(filters).some((value) => value && (!Array.isArray(value) || value.length > 0));

  const FiltersContent = () => (
    <VStack gap={6} align="stretch" w="full" role="complementary" aria-label="Filter options">
      <VStack align="start" justify="start" gap={2}>
        <Text as="h2" fontSize="xs" mb={2} letterSpacing={2} textTransform="uppercase" color="gray.400">
          Interfaces
        </Text>
        <Flex gap={1} align="center" justify="center" flexWrap="wrap" role="group" aria-label="Interface filters">
          {filterOptions.interfaces.options.map((option) => (
            <Flex
              key={option}
              onClick={() => setFilter('interfaces', option)}
              cursor="pointer"
              color={filters.interfaces.includes(option) ? 'blue.600' : 'gray.100'}
              py={1.5}
              px={2.5}
              borderRadius="full"
              transition="all 0.2s"
              _hover={{ bg: 'whiteAlpha.50' }}
              align="center"
              justify="start"
              gap={2}
              role="button"
              aria-pressed={filters.interfaces.includes(option)}
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && setFilter('interfaces', option)}
            >
              {option === 'dApp' && <RocketIcon size={16} aria-hidden="true" />}
              {option === 'Push' && <SearchCodeIcon size={16} aria-hidden="true" />}
              {option === 'Pull' && <BotIcon size={16} aria-hidden="true" />}
              <Text fontSize="sm" fontWeight={filters.interfaces.includes(option) ? 'medium' : 'normal'}>
                {option}
              </Text>
              {filters.interfaces.includes(option) && <CheckIcon size={16} className="ml-2" aria-hidden="true" />}
            </Flex>
          ))}
        </Flex>
      </VStack>
      <FilterSection
        title="Category"
        options={filterOptions.categories.options}
        selected={filters.Category}
        onSelect={(value) => setFilter('Category', value)}
        count={filterOptions.categories.counts}
        disabledOptions={['Commodities', 'Real Estate']}
        soonBadgeOptions={['Commodities', 'Real Estate']}
      />
      {filterOptions.subCategories.options.length > 0 && (
        <MultiSelectFilterSection
          title="SubCategory"
          options={filterOptions.subCategories.options}
          selected={filters.SubCategory}
          onSelect={(value) => setFilter('SubCategory', value)}
          count={filterOptions.subCategories.counts}
        />
      )}
      <MultiSelectFilterSection
        title="Region"
        options={filterOptions.countries.options}
        selected={filters.Country}
        onSelect={(value) => setFilter('Country', value)}
        count={filterOptions.countries.counts}
        disableCount
      />
      <FilterSection
        title="Frequency"
        options={filterOptions.frequencies.options}
        selected={filters.Frequency}
        onSelect={(value) => setFilter('Frequency', value)}
        count={filterOptions.frequencies.counts}
      />
    </VStack>
  );

  return (
    <Container maxW="full" mt={{ base: '72px', md: '96px' }} pos="relative">
      <VStack w="full" gap={4}>
        <HStack w="full" gap={4} role="search" mb={{ base: 0, md: 4 }}>
          <HStack
            flex={1}
            align="center"
            justify="center"
            borderRadius="full"
            px={4}
            py={0}
            gap={2}
            border="1px solid"
            borderColor="border"
          >
            <SearchIcon aria-hidden="true" />
            <Input
              placeholder="Search indicators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              borderRadius="full"
              border="none"
              outline="none"
              boxShadow="none"
              size={{ base: 'lg', md: '2xl' }}
              variant="outline"
              aria-label="Search indicators"
            />
            {searchQuery.length > 0 && (
              <IconButton
                aria-label="Clear search"
                onClick={() => setSearchQuery('')}
                variant="ghost"
                borderRadius="full"
                size="sm"
                color="gray.600"
                _hover={{ color: 'gray.800' }}
              >
                <XIcon aria-hidden="true" />
              </IconButton>
            )}
          </HStack>

          {isMobile && (
            <Button
              leftIcon={<FilterIcon aria-hidden="true" />}
              onClick={onOpen}
              colorScheme={hasActiveFilters ? 'blue' : 'gray'}
              variant={hasActiveFilters ? 'solid' : 'outline'}
              aria-expanded={open}
            >
              Filters
            </Button>
          )}

          {hasActiveFilters && !isMobile && (
            <Text
              as="button"
              color="blue.500"
              fontSize="sm"
              fontWeight="medium"
              cursor="pointer"
              onClick={resetFilters}
              _hover={{ color: 'blue.600' }}
              aria-label="Clear all filters"
            >
              Clear filters
            </Text>
          )}
        </HStack>

        <HStack gap={8} w="full" align="flex-start">
          {!isMobile && (
            <Box w="280px">
              <FiltersContent />
            </Box>
          )}

          <Box flex={1} key={`data-cards-${filteredData.length}`} role="main">
            {filteredData.length === 0 ? (
              <Box textAlign="center" py={12} borderRadius="xl">
                <Text fontSize="lg">No results found. Try adjusting your search or filters.</Text>
              </Box>
            ) : (
              <Grid
                templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
                gap={2}
                role="list"
                aria-label="Data indicators"
              >
                {filteredData.map((item) => (
                  <DataCard
                    key={`${item.Country}-${item.Name}`}
                    item={item}
                    onClick={() => setDetailItem(item)}
                    role="listitem"
                  />
                ))}
              </Grid>
            )}
          </Box>
        </HStack>
      </VStack>

      {isMobile && (
        <DrawerRoot open={open} onOpenChange={onToggle} size="full">
          <DrawerContent>
            <DrawerCloseTrigger />
            <DrawerHeader>Filters</DrawerHeader>
            <DrawerBody>
              <VStack gap={2} w="full">
                <FiltersContent />
                {hasActiveFilters && (
                  <Button colorScheme="blue" variant="ghost" onClick={resetFilters} w="full">
                    Clear all filters
                  </Button>
                )}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerRoot>
      )}

      <DialogRoot
        placement="center"
        size="sm"
        open={!!detailItem}
        onOpenChange={() => setDetailItem(null)}
        aria-label="Indicator Details"
        lazyMount
      >
        <DialogContent>
          <DialogBody>
            <DetailItem detailItem={detailItem as unknown as DataHub} onClose={() => setDetailItem(null)} />
          </DialogBody>
        </DialogContent>
      </DialogRoot>
    </Container>
  );
}

const FilterSection = ({
  title,
  options,
  selected,
  onSelect,
  count,
  disabledOptions = [],
  soonBadgeOptions = [],
}: {
  title: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  count: number;
  disabledOptions?: string[];
  soonBadgeOptions?: string[];
}) => (
  <VStack w="full" align="stretch" role="region" aria-label={`${title} filter section`}>
    <Flex justify="space-between" align="center">
      <Text as="h2" fontSize="xs" mb={2} letterSpacing={2} textTransform="uppercase" color="gray.400">
        {title}
      </Text>
      <Text fontSize="xs" color="gray.600" bg="whiteAlpha.50" px={2} py={1} borderRadius="full">
        {count}
      </Text>
    </Flex>
    <VStack gap={0} role="group">
      {options.map((option) => (
        <Flex
          key={option}
          onClick={() => !disabledOptions.includes(option) && onSelect(option)}
          cursor={disabledOptions.includes(option) ? 'not-allowed' : 'pointer'}
          color={selected === option ? 'brand.100' : disabledOptions.includes(option) ? 'gray.500' : 'gray.100'}
          py={1}
          borderRadius="lg"
          transition="all 0.2s"
          _hover={{ color: disabledOptions.includes(option) ? 'gray.100' : 'gray.200' }}
          align="center"
          justify="space-between"
          w="full"
          role="button"
          aria-pressed={selected === option}
          aria-disabled={disabledOptions.includes(option)}
          tabIndex={disabledOptions.includes(option) ? -1 : 0}
          onKeyPress={(e) => e.key === 'Enter' && !disabledOptions.includes(option) && onSelect(option)}
        >
          <Text fontWeight={selected === option ? 'medium' : 'normal'} flex={1} fontSize="sm">
            {option}
          </Text>
          {selected === option && <CheckIcon size={16} aria-hidden="true" />}
          {soonBadgeOptions.includes(option) && (
            <Text ml={2} fontSize="xs" color="gray.500" bg="whiteAlpha.50" px={2} py={1} borderRadius="full">
              SOON
            </Text>
          )}
        </Flex>
      ))}
    </VStack>
  </VStack>
);

const MultiSelectFilterSection = ({
  title,
  options,
  selected,
  onSelect,
  count,
  disableCount = false,
}: {
  title: string;
  options: string[];
  selected: string[];
  onSelect: (value: string) => void;
  count: number;
  disableCount?: boolean;
}) => (
  <VStack w="full" align="stretch" role="region" aria-label={`${title} filter section`}>
    <Flex justify="space-between" align="center">
      <Text as="h2" fontSize="xs" mb={2} letterSpacing={2} textTransform="uppercase" color="gray.400">
        {title}
      </Text>
      {!disableCount && (
        <Text fontSize="xs" color="gray.600" bg="whiteAlpha.50" px={2} py={1} borderRadius="full">
          {count}
        </Text>
      )}
    </Flex>
    <VStack gap={0} role="group">
      {options.map((option) => (
        <Flex
          key={option}
          onClick={() => onSelect(option)}
          cursor="pointer"
          color={selected.includes(option) ? 'brand.300' : 'gray.100'}
          py={1}
          borderRadius="lg"
          transition="all 0.2s"
          _hover={{ color: 'gray.200' }}
          align="center"
          justify="space-between"
          w="full"
          role="checkbox"
          aria-checked={selected.includes(option)}
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && onSelect(option)}
        >
          <Text fontWeight={selected.includes(option) ? 'medium' : 'normal'} flex={1} fontSize="sm">
            {option}
          </Text>
          {selected.includes(option) && <CheckIcon size={16} aria-hidden="true" />}
        </Flex>
      ))}
    </VStack>
  </VStack>
);
