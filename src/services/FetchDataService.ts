import axios from 'axios'

export const url = 'https://fathomless-plains-56785.herokuapp.com'

class Error {
  public name: string
  public message: any
  constructor(message: any) {
    this.message = message
    this.name = 'Error'
  }
}

interface DataFetchResult {
  status: number
  data: any
}

const responseAssembler = (result: DataFetchResult | null) => {
  if (!result || result.status !== 200) {
    throw new Error('NO_DATA')
  }

  return result.data.data
}

export const fetch = async (query: any) => {
  const result = await axios({
    url,
    method: 'post',
    data: {
      query,
    },
  })

  return responseAssembler(result)
}
