import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = { Input_12: "" }

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: 20,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: "System",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 20,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          fontFamily: "System",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "100%",
            height: "50%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            backgroundColor: "#ffffff",
            fontStyle: "normal",
            fontWeight: "normal",
            fontFamily: "System",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <Input
            placeholder="Enter Description"
            editable={true}
            multiline={true}
            textStyle={{ height: 100, fontSize: 20, color: "#000000" }}
            style={{
              width: "100%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 5,
              marginBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0
            }}
            value={this.state.Input_12}
            onChangeText={nextValue => this.setState({ Input_12: nextValue })}
          />
          <Button
            style={{
              width: "100%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 5,
              marginBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              overflow: "visible",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              backgroundColor: "#3366FF",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0
            }}
            onPress={() => alert("Pressed!")}
          >
            Submit
          </Button>
          <Slider
            value={50}
            minimumValue={0}
            maximumValue={100}
            step={1}
            disabled={false}
            style={{
              marginLeft: 0,
              marginRight: 0,
              marginTop: 5,
              marginBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              fontFamily: "System"
            }}
          />
          <ImageBackground
            source={{
              uri:
                "https://d3nfddh2sbo9hk.cloudfront.net/media/project_component_resources/0-Slack-Image.jpg"
            }}
            style={{
              width: "100%",
              height: "100%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              backgroundSize: "stretch"
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: "50%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            backgroundColor: "#ffffff",
            fontStyle: "normal",
            fontWeight: "normal",
            fontFamily: "System",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <Image
            resizeMode="cover"
            source={{
              uri:
                "https://d3nfddh2sbo9hk.cloudfront.net/media/project_component_resources/1-slack.png"
            }}
            style={{
              width: "100%",
              height: "100%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              fontFamily: "System"
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
