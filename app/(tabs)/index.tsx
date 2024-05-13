import { Image, StyleSheet, Platform, View, Text, Button, TextInput, ScrollView, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import GoalItem from '@/components/GoalItem';
import GoalInput from '@/components/GoalInput';

export default function HomeScreen() {
  const [goals, setGoals] = useState<{text: string, id: string}[]>([])
  const [isAddMode, setIsAddMode] = useState<boolean>(false)

  function addGoalHandler(goalText: string) {
    setGoals((currentGoals) => [...currentGoals, {text: goalText, id: Math.random().toString()}])
    setIsAddMode(false)
  }

  function deleteGoalHandler(goalId: string) {
    setGoals((currentGoals) => currentGoals.filter(({id}) => id !== goalId))
  }

  function startAddGoalHandler() {
    setIsAddMode(true)
  }

  console.log(goals)
  return (
    <View style={styles.container}>
      {/* If you want to style you button   */}
      <Button title='Add new goal' color='#5e0acc' onPress={startAddGoalHandler} />
      { isAddMode ? (
        <GoalInput addGoal={addGoalHandler} showModal={isAddMode} setIsAddMode={setIsAddMode} />
      ) : null
        }
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item: {
            text,
            id,
          } }) => (
            <GoalItem title={text} id={id} deleteGoalHandler={deleteGoalHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
