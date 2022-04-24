import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
  Alert,
  ToastAndroid,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

var dollar1 = require("./assets/1-USD.png");
var dollar5 = require("./assets/5-USD.png");
var dollar10 = require("./assets/10-USD.png");

var dollar = dollar10;
var day = "24th";
var month = "March";

var cashTotal = 0;
var cashValue = 10;
var disabledColor = "#bab7bd";

var textColor = "#000000";
var aboutTextColor = "#000000";
var buttonColor = "white";
var iconToggle = 0.4;
var textToggle = "normal";

function Game() {
  const [count, setCount] = useState(cashTotal + cashValue);

  const updateDate = () => {
    switch (true) {
      case count < 100:
        month = "March";
        day = "25th";
        break;
      case count < 200:
        month = "March";
        day = "26th";
        break;
      case count < 300:
        month = "March";
        day = "27th";
        break;
      case count < 400:
        month = "March";
        day = "28th";
        break;
      case count < 500:
        month = "March";
        day = "29th";
        break;
      case count < 600:
        month = "March";
        day = "30th";
        break;
      case count < 700:
        month = "March";
        day = "31st";
        break;
      case count < 800:
        month = "April";
        day = "1st";
        break;
      case count < 900:
        month = "April";
        day = "2nd";
        break;
      case count < 1000:
        month = "April";
        day = "3rd";
        break;
      case count < 1100:
        month = "April";
        day = "4th";
        break;
      case count < 1200:
        month = "April";
        day = "5th";
        break;
      case count < 1300:
        month = "April";
        day = "6th";
        break;
      case count < 1400:
        month = "April";
        day = "7th";
        break;
      case count < 1500:
        month = "April";
        day = "8th";
        break;
      case count < 1600:
        month = "April";
        day = "9th";
        break;
      case count < 1700:
        month = "April";
        day = "10th";
        break;
      case count < 1800:
        month = "April";
        day = "11th";
        break;
      case count < 1900:
        month = "April";
        day = "12th";
        break;
      case count < 2000:
        month = "April";
        day = "13th";
        break;
      case count < 2100:
        month = "April";
        day = "14th";
        break;
      case count < 2200:
        month = "April";
        day = "15th";
        break;
      case count < 2300:
        month = "April";
        day = "16th";
        break;
      case count < 2400:
        month = "April";
        day = "17th";
        break;
      case count < 2500:
        month = "April";
        day = "18th";
        break;
      case count < 2600:
        month = "April";
        day = "19th";
        break;
      case count < 2700:
        month = "April";
        day = "20th";
        break;
      case count < 2800:
        month = "April";
        day = "21st";
        break;
      case count < 2900:
        month = "April";
        day = "22nd";
        break;
      case count < 3000:
        month = "April";
        day = "23rd";
        break;
      case count < 3100:
        month = "April";
        day = "24th";
        break;
      case count < 3200:
        month = "April";
        day = "25th";
        break;
      case count >= 3200:
        month = "April";
        day = "25th (Complete)";
        break;
      default:
        console.log("Broken... I hope I never see this");
        break;
    }
  };

  return (
    <View style={styles.fullApp}>
      <View style={styles.container}>
        <View style={styles.calendar}>
          <Text style={{ color: textColor, fontSize: 28 }}>Calendar:</Text>
          <Text style={[styles.calendarText, { color: textColor }]}>
            {month} {day}
          </Text>
        </View>
        <View style={styles.counter}>
          <Text style={[styles.counterText, { color: textColor }]}>
            ${cashTotal}
          </Text>
        </View>
        <View style={styles.clicker}>
          <TouchableOpacity
            style={styles.clickerImage}
            onPress={() => {
              setCount(count + cashValue);
              cashTotal = count;
              updateDate();
            }}
          >
            <Image source={dollar} style={{ width: 345, height: 146 }} />
          </TouchableOpacity>
        </View>
        <View style={{ position: "absolute", bottom: 0 }}>
          <Button
            title="Skip to $3200"
            onPress={() => {
              cashTotal = 3200;
              setCount(count + cashTotal);
              updateDate();
            }}
          />
        </View>
      </View>
    </View>
  );
}

function Gift() {
  const createCashAlert = () =>
    Alert.alert("Not enough cash!", "You need at least $3200 to buy gift.", [
      { text: "OK" },
    ]);
  const createSuccessAlert = () =>
    Alert.alert("Hurray!", "You bought the perfect luxary gift!", [
      {
        text: "Totally worth it.",
        onPress: () => {
          showToast();
          cashTotal = cashTotal - 3200;
        },
      },
    ]);
  const showToast = () => {
    ToastAndroid.show("Happy Birthday!", ToastAndroid.LONG);
  };
  return (
    <View style={styles.fullApp}>
      <View style={styles.container}>
        <View style={styles.giftView}>
          <Text
            style={[styles.giftText, { color: textColor, marginBottom: 50 }]}
          >
            Gift!
          </Text>
          <Text
            style={[
              styles.giftText,
              { color: textColor, marginTop: 5, fontSize: 18 },
            ]}
          >
            Total cash: ${cashTotal}
          </Text>
          <Text
            style={[
              styles.giftText,
              { color: textColor, marginTop: 5, fontSize: 18 },
            ]}
          >
            Cash needed: $3200
          </Text>
        </View>
        <View style={styles.items}>
          <TouchableOpacity
            onPress={() => {
              if (cashTotal >= 100) {
                createSuccessAlert();
              } else {
                createCashAlert();
              }
            }}
          >
            <View style={[styles.item, { backgroundColor: buttonColor }]}>
              <View style={styles.itemLeft}>
                <View style={[styles.giftIcon, { opacity: iconToggle }]}>
                  <MaterialCommunityIcons
                    name="gift-outline"
                    color="#55BCF6"
                    size={24}
                  />
                </View>
                <Text
                  style={[
                    styles.itemText,
                    { fontWeight: textToggle, color: textColor },
                  ]}
                >
                  Buy gift
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function About() {
  return (
    <View style={styles.fullApp}>
      <View>
        <Text style={[styles.aboutTitle, { color: aboutTextColor }]}>
          About This App:
        </Text>
      </View>
      <SafeAreaView style={styles.aboutContainer} sh>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollView}
        >
          <Text style={[styles.aboutText, { color: aboutTextColor }]}>
            I wanted to make an app that showed off quite a range of skills, so
            the app includes a bottom tab navigation bar, buttons
            (TouchableOpacity because more customizable than buttons), alerts,
            toasts, switches, scrollviews and even themes (light and dark mode).
            The idea came from you mentioning that the beginning of finals week
            (the 25th) is also your birthday. (Or at least I hope I remembered
            that correctly, otherwise this is a bit awkward…)
          </Text>
          <Text style={[styles.aboutText, { color: aboutTextColor }]}>
            You joked about saving $100 dollars a day to save for a nice gift so
            although I didn't in real life, I created the opportunity to do so
            in an app (so just about as good, right?).
          </Text>
          <Text style={[styles.aboutText, { color: aboutTextColor }]}>
            I'm glad I did this app because I learned a lot, I spent a lot of
            time in the developer docs just learning, and occasionally seeing if
            I could find a tutorial (either a text tutorial sort of thing like
            on stackoverflow, or on youtube) of something at least close enough
            to relate to my project. This sight isn't the prettiest.. I am not
            much of an artist and don't "see" the design coming to me. But due
            to the time put into it pushing through error after error or even
            worse… having nothing happen (took forever for me to successfully
            implement a dark mode, and I don't think I can tell you 100% sure on
            how I did it.) I feel really proud of how the app turned out.
          </Text>
          <Text style={[styles.aboutText, { color: aboutTextColor }]}>
            Again, I know that it probably could be a lot more optimized.
            Especially when it comes to switching between screens. But it is how
            I got all the things to work and I think it is good enough for a
            first full on application. Maybe in the future I'll look back and
            shake my head at how I wrote this but not now... now, I celebrate
            getting it done.
          </Text>
          <Text style={[styles.aboutText, { color: aboutTextColor }]}>
            I will also mention the two bugs that I know about. Both coming from
            the last features added. The buy gift now takes away $3200 (before
            that you just kept the money) but it doesn't update the total number
            listed. It actually is only visual though, because pressing the
            button will fail even if it says you have enough cash if you don't
            actually. It fixes itself if you click on another tab and then
            return to it. The bigger bug, comes with the very last thing I added
            (which I kind of did hastily). It is the 'skip to $3200' button. I
            added it just in case you don't want to spend the time
            clicking/tapping the screen 320 or more times. It kinda works but if
            you click it more than once and click the money button the numbers
            get all messed up (overall it still works, it just makes you very
            rich very fast).
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function Settings({ navigation }) {
  const { setTheme, theme } = React.useContext(ThemeContext);
  const [isEnabledDark, setIsEnabledDark] = useState(false);
  const toggleSwitchDark = () => {
    setIsEnabledDark((previousState) => !previousState);
    if (isEnabledDark) {
      setTheme(theme === "Light" ? "Dark" : "Light");
      textColor = "#000000";
      buttonColor = "white";
      iconToggle = 0.4;
      textToggle = "normal";
      aboutTextColor = "#000000";
    } else {
      setTheme(theme === "Light" ? "Dark" : "Light");
      textColor = "#FFFFFF";
      buttonColor = "#767577";
      iconToggle = 1;
      textToggle = "bold";
      aboutTextColor = "#e5e4e2";
    }
  };
  const [isEnabledHard, setIsEnabledHard] = useState(false);
  const toggleSwitchHard = () => {
    setIsEnabledHard((previousState) => !previousState);
    if (isEnabledHard) {
      setIsEnabledExtra(false);
      disabledColor = "#bab7bd";
      cashValue = 10;
      dollar = dollar10;
    } else {
      disabledColor = "#767577";
      cashValue = 5;
      dollar = dollar5;
    }
  };
  const [isEnabledExtra, setIsEnabledExtra] = useState(false);
  const toggleSwitchExtra = () => {
    setIsEnabledExtra((previousState) => !previousState);
    if (isEnabledExtra) {
      cashValue = 5;
      dollar = dollar5;
    } else {
      cashValue = 1;
      dollar = dollar1;
    }
  };

  return (
    <View style={styles.fullApp}>
      <View style={styles.container}>
        <Text style={[styles.settingTitle, { color: textColor }]}>
          Settings:
        </Text>
        <View style={styles.setting}>
          <Text style={[styles.settingText, { color: textColor }]}>
            Light/Dark Mode:{" "}
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#FFFFFF" }}
            thumbColor={isEnabledDark ? "#767577" : "#FFFFFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchDark}
            value={isEnabledDark}
          />
        </View>
        <View style={styles.setting}>
          <Text style={[styles.settingText, { color: textColor }]}>
            Hard Mode ($5):{" "}
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#FFFFFF" }}
            thumbColor={isEnabledHard ? "#767577" : "#FFFFFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchHard}
            value={isEnabledHard}
          />
        </View>
        <View style={styles.setting}>
          <Text style={[styles.settingText, { color: textColor }]}>
            (Extra) Hard Mode ($1):{" "}
          </Text>
          <Switch
            trackColor={{ false: disabledColor, true: "#FFFFFF" }}
            thumbColor={isEnabledExtra ? "#767577" : "#FFFFFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchExtra}
            disabled={!isEnabledHard}
            value={isEnabledExtra}
          />
        </View>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="About"
      screenOptions={{
        tabBarActiveTintColor: "#55BCF6",
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen
        name="Game"
        component={Game}
        options={{
          tabBarLabel: "Game",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cash-100" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={Gift}
        options={{
          tabBarLabel: "Gift",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gift" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          unmountOnBlur: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState("Light");

  const themeData = { theme, setTheme };
  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer theme={theme === "Light" ? DefaultTheme : DarkTheme}>
        <MyTabs />
        <StatusBar style="auto" />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  fullApp: {
    width: "100%",
    height: "100%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    margin: 100,
    paddingBottom: 100,
  },
  calendar: {
    flex: 1,
    justifyContent: "center",
  },
  calendarText: {
    fontSize: 20,
    borderColor: "#55BCF6",
    borderWidth: 1,
    textAlign: "center",
    paddingVertical: 10,
    marginTop: 7,
    borderRadius: 10,
  },
  counter: {
    flex: 1,
    justifyContent: "center",
  },
  counterText: {
    fontSize: 24,
  },
  clicker: {
    flex: 2,
    justifyContent: "center",
  },
  clickerImage: {
    padding: 20,
  },
  giftView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  giftText: {
    fontSize: 24,
  },
  aboutTitle: {
    fontSize: 24,
    margin: 10,
  },
  aboutContainer: {
    flex: 1,
    paddingTop: 10,
    maxWidth: "80%",
    alignSelf: "center",
  },
  scrollView: {
    marginHorizontal: 20,
    width: "100%",
    paddingRight: 20,
  },
  aboutText: {
    fontSize: 20,
    marginVertical: 20,
  },
  settingTitle: {
    paddingBottom: 75,
    fontSize: 32,
  },
  setting: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    width: "150%",
    justifyContent: "flex-end",
    marginBottom: 20,
    marginRight: 200,
  },
  settingText: {
    marginRight: 10,
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    height: "75%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  giftIcon: {
    opacity: 0.4,
    marginRight: 15,
    marginLeft: 35,
  },
  items: {
    marginTop: 30,
    width: "100%",
    height: "50%",
  },
  itemText: {
    maxWidth: "80%",
  },
});
