import DentsuAegisIcon from '@/components/Icons/DentsuAegis';
import LiqiLogo from '@/components/Icons/Liqi';
import NaveggIcon from '@/components/Icons/Navegg';

export const teamMembers = [
  {
    name: 'Luciano Juvinski',
    role: 'CEO & Founder',
    image: '/assets/team/lucianojuvinski.jpeg',
    bio: 'Founded Navegg, the first Data Manager in Brazil, which was later acquired by Dentsu Aegis, with major clients like Google, Salesforce, and Adobe.',
    social: {
      linkedin: 'https://linkedin.com/in/juvinski',
    },
    icons: [<NaveggIcon width={100} height={24} />, <DentsuAegisIcon width={100} height={24} />],
    images: []
  },
  {
    name: 'Fernanda Garanhan Chen',
    role: 'CTO',
    image: '/assets/team/fernandagaranhan.jpeg',
    bio: 'Former blockchain analyst at Honey Island Capital and Head of new business at Liqi, an Asset Tokenization Platform.',
    social: {
      linkedin: 'https://linkedin.com/in/fernandagaranhan',
    },
    icons: [<LiqiLogo width={100} height={24} />],
    images: ['/assets/honeyisland.png'],
  },
];
