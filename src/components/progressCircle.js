
import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableHighlight } from 'react-native';

import Svg, { Circle, Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProgressCircle() {

    const radius = 50;
    const strokeWidth = 10;
    const progress = 1.998;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = (circumference - progress) * circumference;

    return (
        <>
            <View>
                <View style={styles.scoreCardWrapper}>

                    <View style={styles.score}>

                        <Text style={styles.scoreText}>
                            93 %
                        </Text>

                    </View>

                    <View style={styles.scoreCard}>
                        <View>
                            <Text style={styles.attendence}>
                                Attendence
                            </Text>
                            <Text style={styles.date}>
                                Jan 2024 <Icon name="angle-down" color={'#fff'} size={15} />
                            </Text>
                        </View>
                        <Svg height="200" width="110">
                            <Circle
                                cx="55"
                                cy="100"
                                r={radius}
                                stroke="#A198D5"
                                strokeWidth={strokeWidth}
                                fill="transparent"
                            />
                            <Path
                                d={`M 55 100 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${2 * radius} a ${radius} ${radius} 0 1 1 0 -${2 * radius}`}
                                stroke="#DCD9EF"
                                strokeWidth={strokeWidth}
                                fill="transparent"
                                strokeLinecap="round"
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                            />
                        </Svg>
                    </View>
                </View>

            </View>

        </>
    )
}
const styles = StyleSheet.create({

    scoreCardWrapper: {
        width: '100%',

    },
    scoreCard: {
        width: '100%',
        height: 130,
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 73, // Adjust this value based on your design
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20,
        padding: 15,
        backgroundColor: '#978CD0',
    },
    scoreTextWrapper: {
        width: 60,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    attendence: {
        color: '#fff',
        fontWeight: "400",
        marginBottom: 10,
        fontSize: 12,
        fontStyle: 'normal',
        textAlign: 'center'
    },
    date: {
        color: '#fff',
        fontWeight: "400",
        marginBottom: 10,
        fontSize: 20,
        fontStyle: 'normal',
        textAlign: 'center'
    },
    score: {
        position: 'absolute',
        zIndex: 2,
        top:'42%',
        left:'69%'

    },
    scoreText: {

        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',


    },
})