import React, { Component } from "react";
import { AppRegistry, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Picker,
  Item,
  Input,
  Container,
  Header,
  Content,
  DatePicker,
  Text,
  Body,
  Title,
  Left,
  Right,
  Button,
  Icon,
  List,
  ListItem,
  Textarea,
  Form
} from "native-base";
// import { Picker } from "react-native-picker-dropdown";
// import { Col, Row, Grid } from "react-native-easy-grid";

export default class ticket extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Create a support ticket"
  });

  constructor(props) {
    super(props);
    this.state = {
      userTicket: "",
      userBusiness: "Low Business Impact",
      userDescription: "",
      userName: "",
      userEmail: "",
      userPhone: "",
      userCurrent: "Basic Free Plan",
      userHistory: ""
    };
  }

  onValueChange1(value) {
    this.setState({
      userBusiness: value
    });
  }

  onValueChange2(value) {
    this.setState({
      userCurrent: value
    });
  }

  userTicketing = () => {
    const { userTicket } = this.state;
    const { userBusiness } = this.state;
    const { userDescription } = this.state;
    const { userName } = this.state;
    const { userEmail } = this.state;
    const { userPhone } = this.state;
    const { userCurrent } = this.state;
    const { userHistory } = this.state;

    fetch("http://192.168.1.48/react_server/ticketing.php", {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        ticket_title: userTicket,
        business: userBusiness,
        description: userDescription,
        name: userName,
        email: userEmail,
        phone: userPhone,
        current: userCurrent,
        ticket_history: userHistory
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        alert(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
    console.log(this.userTicketing);
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Ticket Title</Text>
            </ListItem>
            <ListItem>
              <Item rounded style={{ padding: 5, margin: 5 }}>
                <Input
                  onChangeText={userTicket =>
                    this.setState({
                      userTicket
                    })
                  }
                  placeholder="What is the title of your ticket?"
                />
              </Item>
            </ListItem>

            <ListItem itemDivider>
              <Text>Business Impact</Text>
            </ListItem>
            <ListItem>
              <Item picker style={{ padding: 5, margin: 5 }}>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Select your Business"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.userBusiness}
                  onValueChange={this.onValueChange1.bind(this)}
                  onChangeValue={userBusiness =>
                    this.setState({ userBusiness })
                  }
                >
                  <Picker.Item
                    label="Low Business Impact"
                    value="Low Business Impact"
                  />
                  <Picker.Item
                    label="Medium Business Impact"
                    value="Medium Business Impact"
                  />
                  <Picker.Item
                    label="High Business Impact"
                    value="High Business Impact"
                  />
                </Picker>
              </Item>
            </ListItem>

            <ListItem itemDivider>
              <Text>Issue Description</Text>
            </ListItem>
            <View style={{ padding: 5, margin: 5 }}>
              <Textarea
                onChangeText={userDescription =>
                  this.setState({
                    userDescription
                  })
                }
                rounded
                rowSpan={5}
                bordered
                placeholder="Help us help you. Give it a description"
              />
            </View>
            <ListItem itemDivider>
              <Text>Contact Full Name</Text>
            </ListItem>
            <ListItem>
              <Item rounded style={{ padding: 5, margin: 5 }}>
                <Input
                  onChangeText={userName =>
                    this.setState({
                      userName
                    })
                  }
                  placeholder="What is your full name?"
                />
              </Item>
            </ListItem>

            <ListItem itemDivider>
              <Text>Contact Email</Text>
            </ListItem>
            <ListItem>
              <Item rounded style={{ padding: 5, margin: 5 }}>
                <Input
                  onChangeText={userEmail =>
                    this.setState({
                      userEmail
                    })
                  }
                  placeholder="What is your email address?"
                />
              </Item>
            </ListItem>

            <ListItem itemDivider>
              <Text>Contact Phone</Text>
            </ListItem>
            <ListItem>
              <Item rounded style={{ padding: 5, margin: 5 }}>
                <Input
                  onChangeText={userPhone =>
                    this.setState({
                      userPhone
                    })
                  }
                  placeholder="What number can we reach you at?"
                />
              </Item>
            </ListItem>

            <ListItem itemDivider>
              <Text>Current Support Plan</Text>
            </ListItem>
            <ListItem>
              <Item picker style={{ padding: 5, margin: 5 }}>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Select your Current"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.userCurrent}
                  onValueChange={this.onValueChange2.bind(this)}
                  onChangeValue={userCurrent =>
                    this.setState({
                      userCurrent
                    })
                  }
                >
                  <Picker.Item
                    label="Basic Free Plan"
                    value="Basic Free Plan"
                  />
                  <Picker.Item label="Standard Plan" value="Standard Plan" />
                  <Picker.Item label="Premium Plan" value="Premium Plan" />
                  <Picker.Item
                    label="Super Duper Plan"
                    value="Super Duper Plan"
                  />
                </Picker>
              </Item>
            </ListItem>

            <ListItem itemDivider>
              <Text>Ticket Number</Text>
            </ListItem>
            <View style={{ padding: 5, margin: 5 }}>
              <Button block disabled bordered>
                <Text>830</Text>
              </Button>
            </View>

            <ListItem itemDivider>
              <Text>Ticket History</Text>
            </ListItem>
            <View style={{ padding: 5, margin: 5 }}>
              <Textarea
                onChangeText={userHistory =>
                  this.setState({
                    userHistory
                  })
                }
                rowSpan={5}
                bordered
                placeholder="Ticket #803 - new ticket"
              />
            </View>

            <Button block onPress={this.userTicketing}>
              <Text>Create Ticket</Text>
            </Button>
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  pageName: {
    margin: 10,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  },

  week_days: {
    flexDirection: "row"
  },
  day: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 17,
    margin: 2
  },
  day_text: {
    textAlign: "center",
    color: "#A9A9A9",
    fontSize: 25
  },
  btn1: {
    backgroundColor: "#3366ff",
    padding: 10,
    margin: 10,
    width: "95%"
  }
});

AppRegistry.registerComponent("ticket", () => ticket);
