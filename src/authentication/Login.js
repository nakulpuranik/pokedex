import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "native-base";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import AppLogo from "../assets/images/pokemon_logo.png";
import colors from "../config/colors";
import strings from "../config/strings";
import constants from "../config/constants";

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "ash@pokemon.com",
      password: "user123!",
      isError: false
    };
  }

  /**
   * Handle the email updation
   */
  handleEmailChange = (email: string) => {
    this.setState({ email: email, isError: false });
  };

  /**
   * Handle password updation
   */
  handlePasswordChange = (password: string) => {
    this.setState({ password: password, isError: false });
  };

  /**
   * Handle login button press
   */
  handleLoginPress = () => {
    if(this.authenticateUser()){
      //todo redirect user to next screen 
      console.log("REDIRECT TO HOME SCREEN");
      this.props.navigation.navigate('Home');
    }
  };

  /**
   * Authenticate user
   */
  authenticateUser = () => {
    let isResult = false;
    if(this.state.email === constants.IS_USER_ASH && this.state.password === constants.IS_ASH_PASSWORD){
      isResult = true;
    }
    this.setState({isError: !isResult});
    return isResult;
  };

  /**
   * Render the error message
   */
  renderError = () => {
    
    return this.state.isError ? 
    (
        <Text style={styles.errorText}>Something Went wrong.</Text>
    ) :
    null;
    
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={AppLogo} style={styles.logo} /> */}
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
          />
          {this.renderError()}
          <Button
            label={strings.LOGIN}
            onPress={this.handleLoginPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  },
  errorText: {
    color: "red",
    margin: 5,
    fontSize: 15
  }
});

export default LoginScreen;