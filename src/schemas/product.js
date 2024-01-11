import { object, string, boolean } from 'yup'

export const productSchema = object({
  name: string().required('O campo nome é requerido'),
  active: boolean()
})
