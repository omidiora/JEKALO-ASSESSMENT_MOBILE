import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {urlEndpoint} from '../url';
import axios from 'axios';

const Item = ({item, onPress, backgroundColor, textColor, loading}) => (
  <>
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[styles.title, textColor]}>Season {item.season}</Text>
        <Text style={[styles.title, textColor]}>Episode {item.episode}</Text>
      </View>
      <Text style={[styles.title, textColor]}>{item.series}</Text>
    </TouchableOpacity>
  </>
);
const Episode = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limitNumber, setLimitNumber] = useState(10);
  useEffect(() => {
    axios.get(`https://breakingbadapi.com/api/episodes`).then(data => {
      setData(data);
    });
  }, []);

  const renderItem = ({item}) => {
    const [selectedId, setSelectedId] = useState(null);
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => onReachDown()}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
        loading={loading}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={data?.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text style={{textAlign: 'center'}}>{loading ? 'Loading ...' : ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});

export default Episode;
