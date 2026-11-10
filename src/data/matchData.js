// Convierte el documento de Firestore (cargado desde /admin) al formato que usa el Hero
export function docToMatch(data) {
  if (!data || !data.home_team) return null
  return {
    home:      { name: data.home_team, short: data.home_short || '', shield: data.home_shield || null },
    away:      { name: data.away_team, short: data.away_short || '', shield: data.away_shield || null },
    homeScore: data.home_score ?? null,
    awayScore: data.away_score ?? null,
    date:      data.match_date || '',
    time:      data.match_time || '',
    stadium:   data.stadium || '',
    competition: data.competition || '',
  }
}

// Sin datos por defecto: si /admin no tiene partidos cargados, la barra del Hero no se muestra
// (mejor nada que un partido inventado). Formato de ejemplo:
// {
//   home: { name: 'Universitario', short: 'UNI', shield: null },
//   away: { name: 'Sporting Cristal', short: 'SCR', shield: null },
//   homeScore: null, awayScore: null,
//   date: 'Dom 16 Nov', time: '20:00', stadium: 'Monumental', competition: 'Liga 1',
// }
export const defaultMatches = {
  last: null,
  next: null,
}
