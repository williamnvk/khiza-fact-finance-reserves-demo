import DentsuAegisIcon from '@/components/Icons/DentsuAegis';
import DuckUniversityIcon from '@/components/Icons/DuckUniversityIcon';
import LiqiLogo from '@/components/Icons/Liqi';
import NaveggIcon from '@/components/Icons/Navegg';

export const teamMembers = [
  {
    name: 'Luciano Juvinski',
    role: 'Founder & CEO',
    image: '/assets/team/lucianojuvinski.jpeg',
    bio: 'Luciano Juvinski brings over a decade of expertise in the data industry. He is the founder of Navegg, Brazil’s first Data Management Platform, which was later acquired by Dentsu Aegis and served global clients like Google, Salesforce, and Adobe. He also holds a Master’s degree in Blockchain and Fintech from Duke University.',
    social: {
      linkedin: 'https://linkedin.com/in/juvinski',
    },
    icons: [
      <NaveggIcon width={100} height={24} />,
      <DentsuAegisIcon width={100} height={24} />,
      <DuckUniversityIcon width={100} height={24} />,
    ],
    images: [],
  },
  {
    name: 'Fernanda Garanhani',
    role: 'Founder & COO',
    image: '/assets/team/fernandagaranhani.jpeg',
    bio: 'Fernanda Garanhani has over four years of experience in blockchain and Web3. She started her career as a blockchain analyst at Honey Island Capital, a venture capital firm, and advanced to become Head of New Business at Liqi Digital Assets, a leading asset tokenization platform. She is certified as a blockchain professional by the DEC Institute.',
    social: {
      linkedin: 'https://linkedin.com/in/fernandagaranhan',
    },
    icons: [<LiqiLogo width={100} height={24} />, <DuckUniversityIcon width={100} height={24} />],
    images: ['/assets/honeyisland.png'],
  },
];
