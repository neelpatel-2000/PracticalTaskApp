import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import SvgConstant from '../../assets/SvgConstant';

const PopularItem = ({item, onItemCilck}) => {
  const popularIcon = (iconName, isInclude) => {
    let iconComponent;

    switch (iconName) {
      case 'Aerobics':
        iconComponent = (
          <SvgConstant.Aerobics fill={isInclude ? '#FFFFFF' : '#3974BD'} />
        );
        break;
      case 'Box':
        iconComponent = (
          <SvgConstant.Box fill={isInclude ? '#FFFFFF' : '#3974BD'} />
        );
        break;
      case 'Children':
        iconComponent = (
          <SvgConstant.Children fill={isInclude ? '#FFFFFF' : '#3974BD'} />
        );
        break;
      case 'Dances':
        iconComponent = (
          <SvgConstant.Dances fill={isInclude ? '#FFFFFF' : '#3974BD'} />
        );
        break;
      case 'Yoga':
        iconComponent = (
          <SvgConstant.Yoga fill={isInclude ? '#FFFFFF' : '#3974BD'} />
        );
        break;
      case 'Run':
        iconComponent = (
          <SvgConstant.Run fill={isInclude ? '#FFFFFF' : '#3974BD'} />
        );
        break;
      case 'Wrestling':
        iconComponent = (
          <SvgConstant.Wrestling fill={isInclude ? '#FFFFFF' : '#3974BD'} />
        );
        break;
      default:
        break;
    }
    return iconComponent;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onItemCilck(item)}
      style={[
        styles.cardView,
        {backgroundColor: item?.include ? '#3974BD' : '#FFFFFF'},
      ]}>
      {popularIcon(item?.iconName, item?.include)}
    </TouchableOpacity>
  );
};

export default PopularItem;

const styles = StyleSheet.create({
  cardView: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(8),

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.6,
    marginLeft: wp(1),

    marginRight: wp(4),
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
