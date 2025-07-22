
import { Button, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useI18n } from '@/hooks/useI18n';

export function Component() {
  const navigate = useNavigate();
  const { t } = useI18n();
  
  return (
    <VStack>
      <Heading>{t('errors.notFound.title')}</Heading>
      <Button onClick={() => navigate('/')}>
        {t('errors.notFound.action')}
      </Button>
    </VStack>
  );
}
