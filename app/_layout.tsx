// app/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';
import BottomNavBar from '../components/BottomNavBar';

export default function Layout() {
  return (
    <>
      <Stack />
      <BottomNavBar />
    </>
  );
}
