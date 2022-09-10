import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeArea } from './src/components/safe-area.component';

import ContactUsFormScreen from './src/features/screens/contact-us-form.screen';

export default function App() {
  return (
    <>
      <SafeArea>
        <ContactUsFormScreen />
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
}