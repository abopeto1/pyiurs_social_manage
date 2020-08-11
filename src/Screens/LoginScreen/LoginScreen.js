/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { styles } from '../../Styles/styles'

export const LoginScreen = props => {
    return (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Pyiurs Social Manager</Text>
              <Text style={styles.sectionDescription}>
                Login with Facebook
              </Text>
            </View>
          </View>
        </ScrollView>
    )
}
