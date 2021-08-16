import React from 'react';
import {View, Image} from 'react-native';

import AppText from '../AppText';
import styles from './styles';

const Card = ({image, title, subTitle}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText customStyle={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText customStyle={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

export default Card;
