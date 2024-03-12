import SvgConstant from '../../assets/SvgConstant';

export const popularIcon = (iconName, isInclude) => {
  let iconComponent;

  if (iconName === 'Aerobics') {
    iconComponent = (
      <SvgConstant.Aerobics fill={isInclude ? '#FFFFFF' : '#3974BD'} />
    );
  } else if (iconName === 'Box') {
    iconComponent = (
      <SvgConstant.Box fill={isInclude ? '#FFFFFF' : '#3974BD'} />
    );
  } else if (iconName === 'Children') {
    iconComponent = (
      <SvgConstant.Children fill={isInclude ? '#FFFFFF' : '#3974BD'} />
    );
  } else if (iconName === 'Dances') {
    iconComponent = (
      <SvgConstant.Dances fill={isInclude ? '#FFFFFF' : '#3974BD'} />
    );
  } else if (iconName === 'Run') {
    iconComponent = (
      <SvgConstant.Run fill={isInclude ? '#FFFFFF' : '#3974BD'} />
    );
  } else if (iconName === 'Wrestling') {
    iconComponent = (
      <SvgConstant.Wrestling fill={isInclude ? '#FFFFFF' : '#3974BD'} />
    );
  } else {
    // Handle the default case if needed
    // iconComponent = <DefaultIcon />;
  }

  return iconComponent;
};
