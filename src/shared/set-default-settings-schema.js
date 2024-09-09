export const setDefaultSettingsSchema = (schema) => {
  schema.set('toJSON', { virtuals: true })

  schema.set('toObject', { virtuals: true })

  schema.set('versionKey', false)
}
