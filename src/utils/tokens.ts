export function generateRandomSVGID() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const idLength = 10 // Cambia este valor si necesitas IDs más largos o más cortos
  let randomId = 'svg' + '-'

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    randomId += chars[randomIndex]
  }

  return randomId
}
