import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  addToPopularClass,
  addToPopularFav,
  addToFav,
  removeFromFav,
  removePopularClass,
  removeFromPopularFav,
} from '../redux/Action/favoriteAction';
import SvgConstant from '../../assets/SvgConstant';
import ImageConstant from '../../assets/ImageConstant';
import PopularItem from '../components/Populer';
import GymPost from '../components/GymPoster';
import PopularPost from '../components/PopulerPoster';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const gymData = useSelector(state => state.favorite.gymData);
  const popularFavClass = useSelector(state => state.favorite.popularFavClass);
  const popularClass = useSelector(state => state.favorite.popularClass);

  const handleFavClick = item => {
    if (item?.favorite) {
      dispatch(removeFromFav(item));
    } else {
      dispatch(addToFav(item));
    }
  };

  const handlePopularClick = item => {
    if (item?.favorite) {
      dispatch(removeFromPopularFav(item));
    } else {
      dispatch(addToPopularFav(item));
    }
  };

  const handleMenuClick = item => {
    if (item?.include) {
      dispatch(removePopularClass(item));
    } else {
      dispatch(addToPopularClass(item));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={{flex: 1}}>
            <SvgConstant.Dumbbelll />
          </View>
          <View style={styles.menuContainer}>
            <SvgConstant.map />
            <SvgConstant.Search />
            <View style={styles.imgContainer}>
              <Image
                source={ImageConstant.user}
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
                borderRadius={10}
              />
            </View>
          </View>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.heading}>{'Recommanded Gyms'}</Text>
          <FlatList
            horizontal
            data={gymData}
            style={{marginBottom: hp(1)}}
            contentContainerStyle={styles.contentStyle}
            showsHorizontalScrollIndicator={false}
            decelerationRate={'fast'}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <GymPost
                  item={item}
                  onFavClick={item => handleFavClick(item)}
                />
              );
            }}
          />
          <Text style={styles.heading}>{'Popular Classes'}</Text>
          <FlatList
            horizontal
            data={popularClass}
            nestedScrollEnabled={true}
            renderItem={({item, index}) => (
              <PopularItem
                item={item}
                onItemCilck={item => handleMenuClick(item)}
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: wp(5)}}
            style={{marginTop: hp(3)}}
          />
          <FlatList
            data={popularFavClass}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <PopularPost
                item={item}
                onFavClick={item => handlePopularClick(item)}
              />
            )}
            style={{marginBottom: hp(2)}}
            contentContainerStyle={styles.contentStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    padding: wp(4),
    backgroundColor: '#3974BD',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.2,
    elevation: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgContainer: {
    width: wp(8),
    height: wp(8),
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.5,
  },
  heading: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  subContainer: {
    margin: wp(4),
    marginRight: wp(0),
  },
  contentStyle: {
    paddingVertical: hp(1),
    marginLeft: wp(1),
  },
});

export default HomeScreen;
