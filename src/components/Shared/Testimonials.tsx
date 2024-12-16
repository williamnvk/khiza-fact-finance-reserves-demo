'use client';

import { FC } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { User2Icon } from 'lucide-react';
import { Flex, Text, VStack, Box, HStack } from '@chakra-ui/react';
import { useRef } from 'react';

const Testimonials: FC = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const items = [
    {
      name: 'John Doe',
      city: 'New York',
      description:
        'Minha mãe de 64 anos queria muito investir em Bitcoin e hoje ela conseguiu dar o primeiro passo com a ajuda do Picnic! O sorriso dela foi muito especial. Obrigado por pensarem em quem ainda não mergulhou na web3.',
      image: null,
    },
    {
      name: 'John Doe',
      city: 'New York',
      description:
        'Acabei de testar todas as possibilidades da plataforma e foi tudo muito simples, bem didático e sem aquele medo de perder algum token. Excelente!',
      image: null,
    },
    {
      name: 'John Doe',
      city: 'New York',
      description:
        'Acabei de testar todas as possibilidades da plataforma e foi tudo muito simples, bem didático e sem aquele medo de perder algum token. Excelente!',
      image: null,
    },
    {
      name: 'John Doe',
      city: 'New York',
      description:
        'Acabei de testar todas as possibilidades da plataforma e foi tudo muito simples, bem didático e sem aquele medo de perder algum token. Excelente!',
      image: null,
    },
    {
      name: 'John Doe',
      city: 'New York',
      description:
        'Minha mãe de 64 anos queria muito investir em Bitcoin e hoje ela conseguiu dar o primeiro passo com a ajuda do Picnic! O sorriso dela foi muito especial. Obrigado por pensarem em quem ainda não mergulhou na web3.',
      image: null,
    },
  ];

  return (
    <Box w="full" pos="relative" bg="secondary.500" borderRadius="xl" py={16}>
      <Swiper
        ref={swiperRef}
        // slidesPerView={2.2}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 2.2,
            spaceBetween: 24,
          },
        }}
        centeredSlides={true}
        spaceBetween={24}
        loop={true}
        style={{ overflow: 'hidden' }}
      >
        {items.map((t, i) => (
          <SwiperSlide key={`list-${i}`}>
            <VStack
              key={`testimonials-item-${t.name}`}
              gap={4}
              flex={1}
              pos="relative"
              p={{ base: 6, md: 8 }}
              bg="white"
              borderRadius="xl"
              _dark={{
                bg: 'gray.950',
                borderColor: 'gray.800',
              }}
            >
              <Text fontSize={{ base: 'sm', md: 'md' }} fontStyle="italic" minH="160px">
                {t.description}
              </Text>
              <HStack align="center" justify="flex-start" gap={4} w="full">
                {t.image ? (
                  <Box
                    borderRadius="50%"
                    overflow="hidden"
                    w="64px"
                    h="64px"
                    backgroundImage={`url(${t.image})`}
                    backgroundSize="auto 100%"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    filter="grayscale(1)"
                    border="2px solid"
                    borderColor="gray.500"
                  />
                ) : (
                  <Flex
                    borderRadius="lg"
                    overflow="hidden"
                    w="64px"
                    h="64px"
                    color="secondary.500"
                    _dark={{ bg: 'gray.800', color: 'white' }}
                    justify="center"
                    align="center"
                    bg="secondary.100"
                  >
                    <User2Icon size={32} />
                  </Flex>
                )}
                <VStack align="flex-start" gap={0}>
                  <Text fontSize="sm" color="gray.900" _dark={{ color: 'gray.50' }}>
                    {t.name}
                  </Text>
                  <Text fontSize="smaller" color="gray.400" _dark={{ color: 'gray.200' }}>
                    {t.city}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 
      <Flex w="full" align="center" justify="center" gap={4} mt={8}>
        <IconButton title="<" className="button__prev" variant="surface" borderRadius="full" w="48px" h="48px">
          <ChevronLeft size={24} />
        </IconButton>
        <IconButton className="button__next" variant="outline" borderRadius="full" w="48px" h="48px" title=">">
          <ChevronRight size={24} />
        </IconButton>
      </Flex> */}
    </Box>
  );
};

export default Testimonials;
