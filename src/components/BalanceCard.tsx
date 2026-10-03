import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Premium balance widget – iOS‑style glass‑morphism card.
 */
const BalanceCard: React.FC<{ balance: string }> = ({ balance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Balance</Text>
      <Text style={styles.amount}>{balance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.85)', // frosted glass effect
    borderRadius: 24,
    padding: 20,
    margin: 16,
    // subtle shadow – iOS like
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 4,
  },
  title: {
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    color: '#6E6E73',
    marginBottom: 4,
  },
  amount: {
    fontFamily: 'SF Pro Display',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
});

export default BalanceCard;
