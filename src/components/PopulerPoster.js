import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SvgConstant from '../../assets/SvgConstant';

const PopularPost = ({item, onFavClick}) => {
  return (
    <View style={styles.Container}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image style={styles.img} source={item?.image} resizeMode="stretch" />
          <TouchableOpacity
            onPress={() => onFavClick(item)}
            style={styles.favIcon}>
            {item.favorite ? (
              <SvgConstant.FavoriteSelect width={wp(8)} height={wp(8)} />
            ) : (
              <SvgConstant.Favorite width={wp(8)} height={wp(8)} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{item?.title}</Text>
            <Text style={styles.priceText}>
              {`$${item?.price}\n`}
              <Text style={styles.dayText}>{`  /day`}</Text>
            </Text>
          </View>
          <Text style={styles.nameText}>{'Gym Seven'}</Text>
          <View style={styles.childContainer}>
            <SvgConstant.Location />
            <Text style={styles.childText}>{item?.location}</Text>
          </View>
          <View style={styles.timeContainer}>
            <SvgConstant.Watch />
            <Text style={styles.childText}>{item?.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PopularPost;

const styles = StyleSheet.create({
  Container: {
    width: wp(90),
    backgroundColor: '#FFFFFF',
    height: wp(40),
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: hp(2),
    borderRadius: wp(3),
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  img: {
    width: wp(40),
    height: wp(40),
  },
  favIcon: {
    right: wp(3),
    top: wp(3),
    position: 'absolute',
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  subContainer: {
    paddingRight: wp(0),
    padding: wp(3),
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    width: wp(36),
    fontSize: 16,
    fontWeight: '600',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3974BD',
    width: wp(10),
  },
  dayText: {
    color: '#3E3E3E',
    fontSize: 12,
    fontWeight: '300',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4A4A4A',
    paddingVertical: wp(1),
    paddingLeft: wp(1),
  },
  childContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(3),
  },
  childText: {
    paddingLeft: wp(1),
    fontSize: 14,
    color: '#4A4A4A',
  },
  timeContainer: {
    marginLeft: wp(1),
    paddingBottom: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
