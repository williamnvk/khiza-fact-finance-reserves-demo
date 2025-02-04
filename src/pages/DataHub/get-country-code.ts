export function getCountryCode(country: string) {
  switch (country) {
    case 'Argentina':
      return 'ar';
    case 'Brazil':
      return 'br';
    case 'Chile':
      return 'cl';
    case 'Colombia':
      return 'co';
    case 'Costa Rica':
      return 'cr';
    case 'Cuba':
      return 'cu';
    case 'Dominican Republic':
      return 'do';
    case 'Ecuador':
      return 'ec';
    case 'El Salvador':
      return 'sv';
    case 'Guatemala':
      return 'gt';
    case 'Honduras':
      return 'hn';
    case 'Mexico':
      return 'mx';
    case 'Panama':
      return 'pa';
    case 'Paraguay':
      return 'py';
    case 'Peru':
      return 'pe';
    case 'Uruguay':
      return 'uy';
    case 'Venezuela':
      return 've';
    case 'Latam':
      return 'la';
    default:
      return country;
  }
}
