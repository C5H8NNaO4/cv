import './App.css';
import './lib/i18n';
import * as Harvard from '@/components/templates/harvard/harvard';

function App() {
  // const printing = useMediaQuery('print');
  const { Layout } = Harvard;

  return (
    <div>
      <Layout />
      {/* <Box sx={{ mt: !printing ? '100vh' : 0 }} />
      <Page>
        <AchievementsCard />
      </Page> */}
    </div>
  );
}

export default App;
