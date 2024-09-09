import translatte from 'translatte'

export const translateText = async (message) => {
  try {
    const text = await translatte(message, {
      to: 'pt',
      from: 'en'
    }).then(data => data.text)

    return text
  } catch (error) {
    return message
  }
}
