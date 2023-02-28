
const baseURL = 'https://www.mercadobitcoin.net/api'

const request = async (method, endpoint, params ) => {
   method = method.toLowerCase()
   let fullUrl = `${baseURL}${endpoint}`
   let body = null
 
   // eslint-disable-next-line default-case
   switch (method) {
     case 'get':
       let queryString = new URLSearchParams(params).toString()
       fullUrl += `?${queryString}`
       break
     case 'post':
     case 'put':
     case 'delete':
       body = JSON.stringify(params)
       break
   }
   let headers = {
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*',
   }
   let req = await fetch(fullUrl, { method, headers, body })
   let json = await req.json()
   return json
 }
export default () => {
      return{
         getCoinBtc: async () => {
            let json = await request('get', '/BTC/ticker', {})
            return json
          },
      }
}