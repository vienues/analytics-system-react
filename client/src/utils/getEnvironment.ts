export function getEnvironment(): string {
  const serviceUrl = window.location.host

  if (serviceUrl.includes('localhost')) return 'local'

  const envMatch = /(?<env>[a-zA-Z]+)-reactive-analytics.adaptivecluster\.com/.exec(serviceUrl)
  return envMatch ? envMatch['groups']!.env : 'unknown'
}
