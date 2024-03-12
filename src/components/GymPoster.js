import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import SvgConstant from '../../assets/SvgConstant';
import ImageConstant from '../../assets/ImageConstant';

const GymPost = ({item, onFavClick}) => {
  return (
    <View>
      <View style={styles.mapContainer}>
        <Image
          source={ImageConstant.map}
          style={{
            height: '100%',
            width: '100%',
            borderTopRightRadius: wp(4),
            borderTopLeftRadius: wp(4),
          }}
        />
        <View style={styles.iconContainer}>
          <SvgConstant.Location width={wp(7)} height={wp(7)} />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imgView}>
          <Image source={item?.image} style={{width: '100%', height: '100%'}} />
        </View>
        <TouchableOpacity
          onPress={() => onFavClick(item)}
          style={styles.favIcon}>
          {item?.favorite ? (
            <SvgConstant.FavoriteSelect width={wp(8)} height={wp(8)} />
          ) : (
            <SvgConstant.Favorite width={wp(8)} height={wp(8)} />
          )}
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <View style={styles.titleView1}>
            <Text style={styles.titleText}>{item?.title}</Text>
            <Text style={[styles.titleText, {color: '#3974BD'}]}>
              {`$${item?.price}\n`}
              <Text style={styles.dayText}>{`  /day`}</Text>
            </Text>
          </View>
          <View style={styles.titleView2}>
            <View style={styles.ratingView}>
              <SvgConstant.Star width={wp(4)} height={wp(4)} />
              <Text style={styles.ratingText}>{item?.rating}</Text>
            </View>
            <Text style={styles.dateText}>{item?.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    width: wp(60),
    height: wp(20),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 6,
    borderTopRightRadius: wp(4),
    borderTopLeftRadius: wp(4),
  },
  iconContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: wp(3),
  },
  imageContainer: {
    width: wp(60),
    borderRadius: wp(4),
    marginRight: wp(7),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.0,
    elevation: 6,
    marginTop: -10,
  },
  imgView: {
    width: wp(60),
    height: wp(40),
    alignSelf: 'center',
  },
  favIcon: {
    position: 'absolute',
    right: wp(3),
    top: wp(3),
  },
  titleContainer: {
    backgroundColor: '#FFFFFF',
    padding: wp(3),
    borderBottomLeftRadius: wp(4),
    borderBottomRightRadius: wp(4),
  },
  titleView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center ',
  },
  titleText: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '600',
  },
  dayText: {
    color: '#3E3E3E',
    fontWeight: '300',
    fontSize: 12,
  },
  titleView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: wp(3),
    marginBottom: wp(2),
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    paddingHorizontal: wp(2.5),
    color: '#000000',
  },
  dateText: {
    color: '#000000',
    fontWeight: '300',
  },
});

export default GymPost;
