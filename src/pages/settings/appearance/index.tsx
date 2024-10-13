import { AppearanceForm } from './appearance-form'
import ContentSection from '../components/content-section'
import AppearanceColor from './appearance-color'
import { ThemeColorContext } from '@/context/ThemeColorContext';
import { useContext } from 'react';

export default function SettingsAppearance() {


  const themeContext = useContext(ThemeColorContext);
  const themeColor = themeContext?.themeColor;

  return (
    <ContentSection
      title='Appearance'
      desc='Customize the appearance of the app. Automatically switch between day
          and night themes.'
    >
      <>
        <p className={themeColor}> Hello </p>
        <AppearanceColor />

        <AppearanceForm />
      </>


    </ContentSection>
  )
}
