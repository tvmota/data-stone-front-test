import { object, string, boolean } from 'yup'

export const clientSchema = object({
  name: string().required('O campo nome é requerido'),
  document: string().required('O campo documento é requerido'),
  phone: string()
    .matches(/(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/, 'Insira um telefone válido')
    .required('O campo documento é requerido'),
  email: string().required('O email é requerido').email('Insira um e-mail válido'),
  active: boolean()

})
