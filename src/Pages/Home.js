import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image, FlatList} from 'react-native';

import Header from '../components/Header';

const request = async (method, urlApi, params ) => {
  method = method.toLowerCase()
  let fullUrl = `${urlApi}`
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

export default function Home(){
  let [isLoading, setLoading] = useState(true);
  let [error,setError] = useState();
  let [response, setResponse] = useState([]);
  
  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    setResponse(true)
    
    let coinBtc = await request('get', 'https://www.mercadobitcoin.net/api/BTC/ticker', {})
    let coinDoge = await request('get', 'https://www.mercadobitcoin.net/api/DOGE/ticker', {})
    let coinETH = await request('get', 'https://www.mercadobitcoin.net/api/ETH/ticker', {})
    let coins = {
      'btc' : {
        'buy' : coinBtc.ticker.buy,
        'last' : coinBtc.ticker.last,
      },
      'doge' : {
        'buy' : coinDoge.ticker.buy,
       'last' : coinDoge.ticker.last,
      },
      'eth' : {
        'buy' : coinETH.ticker.buy,
        'last' : coinETH.ticker.last,
      },

    }
    
    setResponse(coins)
    setLoading(false)
  }
    // .then(res => res.json())
    // .then(
    //   (result) =>{
    //     setIsLoading(false);
    //     setResponse(result);
    //   },
    //   (error) =>{
    //     setIsLoading(false);
    //     setError(error);
    //   }
    //   )
  const getContent= () => {
    if(isLoading){
      return <ActivityIndicator size="large"/>;
    }

    if (error){
      return<Text>{error}</Text>
    }
    return <Text style={styles.moedinha}>Cotação bitcoin: {response.btc.last}</Text>
    
  };

  const getContentDoge= () => {
    if(isLoading){
      return <ActivityIndicator size="large"/>;
    }

    if (error){
      return<Text>{error}</Text>
    }
    return <Text style={styles.moedinha}>Cotação DogeCoin: {response.doge.last}</Text>
    
  };

  const getContentEth= () => {
    if(isLoading){
      return <ActivityIndicator size="large"/>;
    }

    if (error){
      return<Text>{error}</Text>
    }
    return <Text style={styles.moedinha}>Cotação Etherum: {response.eth.last}</Text>
    
  };
  
  return( 
    <View style={styles.container}>
      <Header/>
      <TouchableOpacity style={styles.ButtonBtc}>
        <Image 
        source={require('../../images/Bitcoinlogo.png')}
        style={styles.imagemoeda}
        />
        <View style={styles.buttonIconSeparatorStyle}/>
      {getContent()}
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonBtc}>
      <Image 
        source={require('../../images/Dogecoin.png')}
        style={styles.imagemoeda}
        />
        <View style={styles.buttonIconSeparatorStyle}/>
      {getContentDoge()}
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonBtc}>
      <Image 
        source={require('../../images/Etherum.png')}
        style={styles.imagemoeda}
        />
        <View style={styles.buttonIconSeparatorStyle}/>
      {getContentEth()}
      </TouchableOpacity>
    </View>
  )
}

  // fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
  // .then((response) => response.json())
  // .then((json) => console.log(json));
  
  
  // const [moedas, setCoin] = useState([]);

  // const getCoin = async () => {
  //   const {data} = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker')
  // setCoin(data);
  // }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },

  moedinha:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagemoeda:{
    padding: 10, 
    margin: 5, 
    height: 50, 
    width: 50, 
    resizeMode: 'stretch', 
  },
  ButtonBtc:{
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    borderWidth: 0.5, 
    borderColor: '#fff', 
    height: 80, 
    borderRadius: 5, 
    margin: 5, 
  },
  buttonIconSeparatorStyle:{
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  }
});