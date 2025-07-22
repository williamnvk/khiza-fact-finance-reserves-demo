export function formatLargeNumber(value: number, currency: string = ''): string {
  if (value >= 1_000_000_000) {
    return `${currency}${(value / 1_000_000_000).toFixed(2)}B`;
  }
  if (value >= 1_000_000) {
    return `${currency}${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 10_000) {
    return `${currency}${(value / 1_000).toFixed(1)}K`;
  }
  if (value < 1000) {
    return `${currency}${value.toFixed(0)}`;
  }

  return value.toLocaleString();
}

export function translatePeriod(period: string, t: (key: string) => string): string {
  // Map of English month names to their translation keys
  const monthMap: Record<string, string> = {
    'January': 'months.january',
    'February': 'months.february',
    'March': 'months.march',
    'April': 'months.april',
    'May': 'months.may',
    'June': 'months.june',
    'July': 'months.july',
    'August': 'months.august',
    'September': 'months.september',
    'October': 'months.october',
    'November': 'months.november',
    'December': 'months.december'
  };

  // Check if the period contains a month (format: "Month, Year" or "Month Year")
  const monthRegex = /(January|February|March|April|May|June|July|August|September|October|November|December)/gi;
  
  return period.replace(monthRegex, (match) => {
    const monthKey = monthMap[match];
    return monthKey ? t(monthKey) : match;
  });
}
