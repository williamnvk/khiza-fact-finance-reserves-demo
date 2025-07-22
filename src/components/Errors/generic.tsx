import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useI18n } from '@/hooks/useI18n';

export function Component() {
  const navigate = useNavigate();
  const { t } = useI18n();
  
  return (
    <VStack w="full" h="100vh" alignContent="center" justifyContent="center">
      <Heading textAlign="center">{t('errors.generic.title')}</Heading>
      <Text>{t('errors.generic.message')}</Text>
      <Button onClick={() => navigate('/')}>{t('errors.generic.action')}</Button>
    </VStack>
  );
}
