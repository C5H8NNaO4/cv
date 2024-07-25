import './App.css';
import './lib/i18n';
import { Templates } from './lib/templates';
import { TEMPLATE } from './const';

function App() {
  // const printing = useMediaQuery('print');
  const Layout = Templates[TEMPLATE].Layout;

  return (
    <div id="root">
      <Layout />
      {/* <Box sx={{ mt: !printing ? '100vh' : 0 }} />
      <Page>
        <AchievementsCard />
      </Page> */}
    </div>
  );
}

export default App;
