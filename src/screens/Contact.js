import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert('Plzz fill all the fields');
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView>
    <KeyboardAvoidingView>
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}> Level up your knowledge </Text>

      <Text style={styles.description}>
        You can reach us anytime via thapa@vinod.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your name </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'vinod thapa'}
          value={name}
          onChangeText={userdata => setName(userdata)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Email </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'demo@thapa.com'}
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your mobile </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'vinod thapa'}
          value={phone}
          onChangeText={phone => setPhone(phone)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> How can we help you? </Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={'Tell us about your self'}
          value={message}
          onChangeText={msg => setMessage(msg)}
          numberOfLines={5}
          multiline={true}
        />
      </View>

     

      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onClick={() => setAgree(!agree)}
          color={agree ? '#4630EB' : undefined}
        />
        <Text style={styles.wrapperText}>
        I have read and agreed with the Terms and Conditions
        </Text>
      </View>

      {/* submit button  */}

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? '#4630EB' : 'grey',
          },
        ]}
        disabled={!agree}
        onPress={submit}>
        <Text style={styles.buttonText}> Contact Us </Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    //fontFamily: "JosefinSans_500Medium",
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    //fontFamily: "JosefinSans_400Light",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: 'bold',
    // fontSize: 15,
    color: '#7d7d7d',
    paddingBottom: 5,
    // fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: 'white',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    // fontFamily: "JosefinSans_300Light",
  },
  wrapperText: {
    marginLeft: 10,
    color: '#7d7d7d',
    //  fontFamily: "JosefinSans_300Light",
  },
});
export default Contact;
