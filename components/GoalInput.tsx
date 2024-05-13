import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Image } from "react-native";

export default function GoalInput({addGoal, showModal, setIsAddMode} : {
  addGoal: (goalText: string) => void;
  showModal: boolean;
  setIsAddMode: (value: boolean) => void;
}) {
  const [goal, setGoal] = useState<string>('')

  function goalInputHandler(enteredText: string) {
    setGoal(enteredText);
  }

  function addGoalHandler() {
    addGoal(goal)
    setGoal('')
  }
  
  return (
    <Modal visible={showModal} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/Terracotta-Pattern.png')}
          style={{ width: 200, height: 100 }}
        />
        <TextInput placeholder="Your goal" style={styles.textInput} onChangeText={goalInputHandler} value={goal} />
        {/* Button don't have style prop */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={() => setIsAddMode(false)} />
          </View>
        </View>
      </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 24,
    padding: 16,
    backgroundColor: 'yellow',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4doe0',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  }
});
