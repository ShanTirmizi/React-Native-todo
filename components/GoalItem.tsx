import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ title, deleteGoalHandler, id}: {
  title: string;
  id: string;
  deleteGoalHandler: (goalId: string) => void;
}) {
  return (
    <View style={styles.listItem}>
      <Pressable onPress={() => deleteGoalHandler(id)} android_ripple={{color: '#dddddd'}}
      style={({ pressed }) => pressed && styles.pressedItem}
      >
          <Text style={styles.goalText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 8,
    borderRadius: 8,
  },
  goalText: {
    padding: 16,
  },
  pressedItem: {
    backgroundColor: '#dddddd',
  }
});