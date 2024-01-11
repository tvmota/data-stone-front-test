export const getItem = (key) => {
  let result = ''

  try {
    result = localStorage.getItem(key)
  } catch {
    result = false
  }

  return result;
}

export const setItem = (key, value) => {
  let result = false

  try {
    localStorage.setItem(key, value)
    result = true
  } catch {
    result = false
  }
  return result
}

export const removeItem = (key) => {
  let result = false

  try {
    localStorage.removeItem(key)
    result = true
  } catch {
    result = false
  }
  return result
}